import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';
import _keyBy from 'lodash/keyBy';

import QuestionnaireBuilder from '../QuestionnaireBuilder';
import Questionnaire from '../Questionnaire';
import {
    filterCollection,
    addIdsToQuestionsInQuestionnaireSection,
    questionnaireSectionToBlobData,
} from '../../util';
import allQuestionnaireSections from '../../data/questionnaireSections';

const questionnaireSectionsIndexed = _keyBy(allQuestionnaireSections, 'id');

const App = () => {
    const [isReady, setIsReady] = useState(false);

    // Array of { question, responses } (no nested questionGroups/questions)
    const [answersToConfigQuestions, setAnswersToConfigQuestions] = useState([]);

    const [questionnaireSections, setQuestionnaireSections] = useState(null);

    const [responses, setResponses] = useState({});

    useEffect(() => {
        // TODO: check localstorage for saved data.
        setIsReady(true);
    }, []);

    useEffect(() => {
        if (answersToConfigQuestions.length > 0) {
            setQuestionnaireSections(
                answersToConfigQuestions
                    .flatMap(({ question, responses }) =>
                        filterCollection(question.questionnaireSections, responses)
                    )
                    .map(({ id }) =>
                        addIdsToQuestionsInQuestionnaireSection(questionnaireSectionsIndexed[id])
                    )
            );
        }
    }, [answersToConfigQuestions]);

    if (!isReady) {
        return null;
    }

    // -- Answer Config Questions to Generate Questionnaire

    if (questionnaireSections === null) {
        return <QuestionnaireBuilder setAnswersToConfigQuestions={setAnswersToConfigQuestions} />;
    }

    // -- Questionnaire

    const handleClickExport = () => {
        const blobData = [
            '# STARTED\n\n',
            '## Configuration\n\n',
            ...answersToConfigQuestions.flatMap(({ question, responses }) => {
                const responsesForQuestion = responses
                    .map((responseIndex) => question.responseOptions[responseIndex])
                    .join(', ');

                // In markdown, to force a line return, place two empty spaces at the end of a line.
                const questionTrailingWhitespace = responsesForQuestion !== '' ? '  ' : '';

                const responseLeadingWhitespace = responsesForQuestion !== '' ? '  ' : '';

                return [
                    `- ${question.question}`,
                    `${questionTrailingWhitespace}\n${responseLeadingWhitespace}${responsesForQuestion}\n`,
                ];
            }),
            '\n',
            ...questionnaireSections.flatMap((questionnaireSection) =>
                questionnaireSectionToBlobData({ questionnaireSection, responses })
            ),
        ];

        saveAs(new Blob(blobData, { type: 'text/markdown;charset=utf-8' }), 'started.md');
    };

    if (questionnaireSections.length > 0) {
        return (
            <Questionnaire
                questionnaireSections={questionnaireSections}
                responses={responses}
                setResponses={setResponses}
                onClickExport={handleClickExport}
            />
        );
    }

    // -- No Questions!

    return (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="ml-3">
                    <p className="text-sm leading-5 text-yellow-700">
                        This tool is not appropriate for the study.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default App;
