import React, { useState, useEffect } from 'react';

import QuestionGroup from '../QuestionGroup';
import { generateProgressDataForQuestionGroups } from '../../util';

let isFileSaverSupported;
try {
    isFileSaverSupported = !!new Blob();
} catch (e) {
    isFileSaverSupported = false;
}

// const useInterval = (callback) => {
//     const savedCallback = useRef();

//     useEffect(() => {
//         savedCallback.current = callback;
//     });

//     useEffect(() => {
//         const tick = () => {
//             savedCallback.current();
//         };

//         const intervalId = setInterval(tick, 1000 * 10);

//         return () => clearInterval(intervalId);
//     }, []);
// };

const Questionnaire = ({ questionnaireSections, responses, setResponses, onClickExport }) => {
    const [activeQuestionnaireSection, setActiveQuestionnaireSection] = useState(null);

    const [progressData, setProgressData] = useState({});

    useEffect(() => {
        setProgressData(
            questionnaireSections.reduce((progressDataAcc, { id, questionGroups }) => {
                return {
                    ...progressDataAcc,
                    [id]: generateProgressDataForQuestionGroups({ questionGroups, responses }),
                };
            }, {})
        );
    }, [questionnaireSections]);

    // useInterval(() => {
    //     localStorage.setItem('responses', JSON.stringify(responses));
    // });

    // -- Overview

    if (activeQuestionnaireSection === null) {
        const content = (
            <ul>
                {questionnaireSections.map((questionnaireSection, idx) => {
                    const { id, title } = questionnaireSection;

                    const progressForQuestionnaireSection =
                        (progressData[id]?.numQuestions ?? 0) === 0
                            ? 100
                            : (progressData[id].numResponses / progressData[id].numQuestions) * 100;

                    const isWarning = false; // answers[id].filter((val) => val === 'No').length > 0;

                    return (
                        <li key={id}>
                            <div
                                onClick={() => setActiveQuestionnaireSection(questionnaireSection)}
                                className="hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <div className="font-semibold text-indigo-700 truncate">
                                            {title}
                                        </div>
                                        <div className="ml-2 flex-shrink-0">
                                            {isWarning ? (
                                                <span className="px-2 inline-block text-xs leading-5 font-semibold rounded-full bg-yellow-300 text-yellow-800">
                                                    Warning!
                                                </span>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                        <div className="sm:flex">
                                            <div className="mr-6 flex items-center text-sm leading-5 text-gray-500">
                                                <svg
                                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                {progressData[id] &&
                                                    `${progressData[id].numQuestions} ${
                                                        progressData[id].numQuestions === 1
                                                            ? 'Question'
                                                            : 'Questions'
                                                    }`}
                                            </div>
                                        </div>
                                        <div className="mt-2" style={{ width: '300px' }}>
                                            <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                                                <div className="w-full h-full bg-gray-200 absolute"></div>
                                                <div
                                                    className="h-full bg-teal-400 absolute"
                                                    style={{
                                                        width: `${progressForQuestionnaireSection}%`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );

        return (
            <div className="bg-white overflow-hidden shadow-md rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex items-center justify-between flex-wrap sm:flex-no-wrap">
                    <h2 className="text-2xl">Reporting Standards</h2>
                    {isFileSaverSupported && (
                        <button
                            type="button"
                            onClick={onClickExport}
                            className="py-2 px-4 text-sm leading-5 font-semibold rounded-md text-white bg-teal-400 focus:outline-none focus:shadow-outline-teal focus:border-teal-500 hover:bg-teal-300 active:bg-teal-500"
                        >
                            Export
                        </button>
                    )}
                </div>
                <div className="border-t border-gray-200">{content}</div>
            </div>
        );
    }

    // -- Questionnaire Section View

    const handleClickBack = () => {
        setProgressData({
            ...progressData,
            [activeQuestionnaireSection.id]: generateProgressDataForQuestionGroups({
                questionGroups: activeQuestionnaireSection.questionGroups,
                responses,
            }),
        });

        setActiveQuestionnaireSection(null);
    };

    const respondToQuestion = (questionId, responsesForQuestion) =>
        setResponses({
            ...responses,
            [questionId]: responsesForQuestion,
        });

    const content = (
        <>
            <h2 className="text-xl font-bold mb-2">{activeQuestionnaireSection.title}</h2>
            <ol>
                {activeQuestionnaireSection.questionGroups.map(
                    (questionGroup, questionGroupIndex) => (
                        <li key={questionGroupIndex}>
                            <QuestionGroup
                                questionGroup={questionGroup}
                                responses={responses}
                                respondToQuestion={respondToQuestion}
                            />
                        </li>
                    )
                )}
            </ol>
        </>
    );

    return (
        <div className="bg-white overflow-hidden shadow-md rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex items-center justify-between flex-wrap sm:flex-no-wrap">
                <h2 className="text-2xl">Reporting Standards</h2>
                <button
                    type="button"
                    onClick={handleClickBack}
                    className="py-2 px-4 text-sm leading-5 font-semibold rounded-md text-white bg-teal-400 focus:outline-none focus:shadow-outline-teal focus:border-teal-500 hover:bg-teal-300 active:bg-teal-500"
                >
                    Back
                </button>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">{content}</div>
        </div>
    );
};

export default Questionnaire;
