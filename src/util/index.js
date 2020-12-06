import _isInteger from 'lodash/isInteger';
import _intersection from 'lodash/intersection';
import _difference from 'lodash/difference';
import _keyBy from 'lodash/keyBy';

import { labels } from '../data/questionnaire-sections';

const labelsIndexed = _keyBy(labels, 'id');

const FILTER_TYPE_SOME = 'some';

const FILTER_TYPE_EVERY = 'every';

export const isItemIncluded = (responses) => (item) => {
    if (item.filter === undefined || item.filter === true) {
        return true;
    }

    if (_isInteger(item.filter)) {
        return responses.includes(item.filter);
    }

    if (item.filter.type === FILTER_TYPE_SOME) {
        return _intersection(item.filter.values, responses).length > 0;
    }

    if (item.filter.type === FILTER_TYPE_EVERY) {
        return _difference(item.filter.values, responses).length === 0;
    }

    throw new Error('Bad Implementation!');
};

export const filterCollection = (collection, responses) => {
    const predicate = isItemIncluded(responses);

    return collection.filter(predicate);
};

const addIdsToQuestionsInQuestionGroups = ({ questionGroups, idPrefix }) =>
    questionGroups.map((questionGroup, questionGroupIndex) => ({
        ...questionGroup,
        questions: questionGroup.questions.map(({ questionGroups, ...rest }, questionIndex) => {
            const id = `${idPrefix}-${questionGroupIndex}-${questionIndex}`;

            const questionWithId = { ...rest, id };

            if (questionGroups && questionGroups.length) {
                questionWithId.questionGroups = addIdsToQuestionsInQuestionGroups({
                    questionGroups,
                    idPrefix: id,
                });
            }

            return questionWithId;
        }),
    }));

export const addIdsToQuestionsInQuestionnaireSection = (questionnaireSection) => ({
    ...questionnaireSection,
    questionGroups: addIdsToQuestionsInQuestionGroups({
        questionGroups: questionnaireSection.questionGroups,
        idPrefix: questionnaireSection.id,
    }),
});

// { numQuestions, numResponses }
export const generateProgressDataForQuestionGroups = ({
    questionGroups,
    responses,
    parentQuestionResponses = [],
}) =>
    filterCollection(questionGroups, parentQuestionResponses).reduce(
        (questionGroupsAcc, { questions }) => {
            const progressDataForQuestions = questions.reduce(
                (questionsAcc, { id, questionGroups }) => {
                    const responsesForQuestion = responses[id] ?? [];

                    const progressDataForQuestionGroupsInQuestion = generateProgressDataForQuestionGroups(
                        {
                            questionGroups: questionGroups ?? [],
                            responses,
                            parentQuestionResponses: responses[id] ?? [],
                        }
                    );

                    return {
                        numQuestions:
                            1 +
                            questionsAcc.numQuestions +
                            progressDataForQuestionGroupsInQuestion.numQuestions,
                        numResponses:
                            (responsesForQuestion.length ? 1 : 0) +
                            questionsAcc.numResponses +
                            progressDataForQuestionGroupsInQuestion.numResponses,
                    };
                },
                { numQuestions: 0, numResponses: 0 }
            );

            return {
                numQuestions:
                    questionGroupsAcc.numQuestions + progressDataForQuestions.numQuestions,
                numResponses:
                    questionGroupsAcc.numResponses + progressDataForQuestions.numResponses,
            };
        },
        { numQuestions: 0, numResponses: 0 }
    );

const questionGroupsToBlobData = ({
    questionGroups,
    responses,
    parentQuestionResponses = [],
    depth = 0,
}) => {
    const indent = new Array(depth * 4).fill(' ').join('');

    return filterCollection(questionGroups, parentQuestionResponses).flatMap(
        ({ questions, heading }) => [
            heading ? `### ${heading}\n\n` : '',
            ...questions.flatMap(({ id, question, labels, responseOptions, questionGroups }) => {
                const responsesForQuestion = (responses[id] ?? [])
                    .map((responseIndex) => responseOptions[responseIndex])
                    .join(', ');

                // In markdown, to force a line return, place two empty spaces at the end of a line.
                const questionTrailingWhitespace = responsesForQuestion !== '' ? '  ' : '';

                const responseLeadingWhitespace = responsesForQuestion !== '' ? `${indent}  ` : '';

                return [
                    `${indent}- ${question}${labels
                        .map((labelId) => ` [${labelsIndexed[labelId].label}]`)
                        .join('')}`,
                    `${questionTrailingWhitespace}\n${responseLeadingWhitespace}${responsesForQuestion}\n`,
                    ...questionGroupsToBlobData({
                        questionGroups: questionGroups ?? [],
                        responses,
                        parentQuestionResponses: responses[id] ?? [],
                        depth: depth + 1,
                    }),
                ];
            }),
        ]
    );
};

export const questionnaireSectionToBlobData = ({ questionnaireSection, responses }) => [
    `## ${questionnaireSection.title}\n\n`,
    ...questionGroupsToBlobData({ questionGroups: questionnaireSection.questionGroups, responses }),
    '\n',
];
