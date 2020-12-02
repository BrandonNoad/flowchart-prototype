import React, { useState, useEffect } from 'react';

import { filterCollection } from '../../util';
import rootQuestion from '../../data/rootQuestion';

const QuestionnaireBuilder = ({ setAnswersToConfigQuestions }) => {
    const [questions, setQuestions] = useState([rootQuestion]);

    const [responses, setResponses] = useState([]);

    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        if (questions.length === 0) {
            setAnswersToConfigQuestions(answers);
        }
    }, [questions, answers, setAnswersToConfigQuestions]);

    if (questions.length === 0) {
        return null;
    }

    const currentQuestion = questions[0];

    const isNextButtonDisabled = currentQuestion.isResponseRequired && responses.length === 0;

    const handleChangeOptionFactory = (isMultipleResponsesAllowed) => (e) => {
        const toggledResponse = parseInt(e.target.value, 10);

        const isChecked = e.target.checked;

        // TODO: handle optional radios (i.e. the ability to have no radios checked).
        // Radios
        if (!isMultipleResponsesAllowed) {
            setResponses([toggledResponse]);
            return;
        }

        // Checkboxes

        const nextResponses = isChecked
            ? [...responses, toggledResponse]
            : responses.filter((response) => response !== toggledResponse);

        setResponses(nextResponses);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isNextButtonDisabled) {
            return;
        }

        const { questionGroups, ...currentQuestionWithoutQuestionGroups } = currentQuestion;

        setAnswers([...answers, { question: currentQuestionWithoutQuestionGroups, responses }]);

        setQuestions([
            ...filterCollection(questionGroups, responses).flatMap(({ questions }) => questions),
            ...questions.slice(1),
        ]);

        setResponses([]);
    };

    return (
        <div className="bg-white overflow-hidden shadow-md rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h2 className="text-2xl">Study Configuration</h2>
            </div>
            <div className="border-t border-b border-gray-200 px-4 py-5 sm:p-6 h-64">
                <p className="text-xl mb-2">{currentQuestion.question}</p>
                <form id="flowchart-form" onSubmit={handleSubmit}>
                    <ul>
                        {currentQuestion.responseOptions.map(
                            (responseOption, responseOptionIndex) => (
                                <li className="mb-1" key={responseOption + responseOptionIndex}>
                                    <label className="flex items-center">
                                        <input
                                            type={
                                                currentQuestion.isMultipleResponsesAllowed
                                                    ? 'checkbox'
                                                    : 'radio'
                                            }
                                            className={`form-${
                                                currentQuestion.isMultipleResponsesAllowed
                                                    ? 'checkbox'
                                                    : 'radio'
                                            } text-teal-400`}
                                            value={responseOptionIndex}
                                            checked={responses.includes(responseOptionIndex)}
                                            onChange={handleChangeOptionFactory(
                                                currentQuestion.isMultipleResponsesAllowed
                                            )}
                                        />
                                        <span className="ml-2">{responseOption}</span>
                                    </label>
                                </li>
                            )
                        )}
                    </ul>
                </form>
            </div>
            <div className="px-4 py-4 sm:px-6">
                <button
                    type="submit"
                    form="flowchart-form"
                    className={`py-2 px-4 text-sm leading-5 font-semibold rounded-md text-white bg-teal-400 focus:outline-none focus:shadow-outline-teal focus:border-teal-500 ${
                        isNextButtonDisabled
                            ? `disabled:opacity-50 disabled:cursor-not-allowed`
                            : `hover:bg-teal-300 active:bg-teal-500 `
                    }`}
                    disabled={isNextButtonDisabled}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default QuestionnaireBuilder;
