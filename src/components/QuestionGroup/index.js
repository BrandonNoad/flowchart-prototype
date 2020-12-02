import React from 'react';

import { isItemIncluded } from '../../util';

const NUM_QUESTIONS_TO_DISPLAY = 3;

const QuestionGroup = ({
    questionGroup,
    responses,
    respondToQuestion,
    parentQuestionResponses = [],
    depth = 0,
}) => {
    const isEnabled = isItemIncluded(parentQuestionResponses)(questionGroup);

    const indent = depth * 25;

    if (!isEnabled) {
        const questionsToDisplay = questionGroup.questions.slice(0, NUM_QUESTIONS_TO_DISPLAY);

        const questionsJsx = questionsToDisplay.map(({ question }, idx) => (
            <p key={idx}>{question}</p>
        ));

        const numHiddenQuestions = questionGroup.questions.length - NUM_QUESTIONS_TO_DISPLAY;

        const moreJsx =
            numHiddenQuestions > 0
                ? `${numHiddenQuestions} more ${
                      numHiddenQuestions === 1 ? 'question' : 'questions'
                  }...`
                : '';

        return (
            <div style={{ margin: `0 0 10px ${indent}px`, color: '#999' }}>
                {questionsJsx}
                {moreJsx}
            </div>
        );
    }

    return questionGroup.questions.map(
        (
            { id, question, isMultipleResponsesAllowed = false, responseOptions, questionGroups },
            questionIndex
        ) => {
            return (
                <div key={questionIndex}>
                    <div style={{ margin: `0 0 15px ${indent}px` }}>
                        <p style={{ marginBottom: '8px' }}>{question}</p>
                        <ul>
                            {responseOptions.map((responseOption, responseOptionIndex) => (
                                <li className="mb-1" key={responseOption + responseOptionIndex}>
                                    {responseOptionIndex === undefined ? 'YAHHOOO@' : ''}
                                    <label className="flex items-center">
                                        <input
                                            type={isMultipleResponsesAllowed ? 'checkbox' : 'radio'}
                                            className={`form-${
                                                isMultipleResponsesAllowed ? 'checkbox' : 'radio'
                                            } text-teal-400`}
                                            value={responseOptionIndex}
                                            checked={
                                                responses[id] !== undefined &&
                                                responses[id].includes(responseOptionIndex)
                                            }
                                            onChange={(e) => {
                                                const toggledResponse = parseInt(
                                                    e.target.value,
                                                    10
                                                );

                                                // TODO: handle optional radios (i.e. the ability to have no radios checked).
                                                // Radios
                                                if (!isMultipleResponsesAllowed) {
                                                    respondToQuestion(id, [toggledResponse]);
                                                    return;
                                                }

                                                // Checkboxes

                                                const isChecked = e.target.checked;

                                                const responsesForQuestion = responses[id] ?? [];

                                                const nextResponses = isChecked
                                                    ? [...responsesForQuestion, toggledResponse]
                                                    : responsesForQuestion.filter(
                                                          (response) => response !== toggledResponse
                                                      );

                                                respondToQuestion(id, nextResponses);
                                            }}
                                        />
                                        <span className="ml-2">{responseOption}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {questionGroups
                        ? questionGroups.map((questionGroup, questionGroupIndex) => (
                              <QuestionGroup
                                  questionGroup={questionGroup}
                                  responses={responses}
                                  respondToQuestion={respondToQuestion}
                                  parentQuestionResponses={responses[id] ?? []}
                                  depth={depth + 1}
                                  key={questionGroupIndex}
                              />
                          ))
                        : null}
                </div>
            );
        }
    );
};

export default QuestionGroup;
