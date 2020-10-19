import React, { useState } from 'react';

const Questionnaire = ({ questionGroups }) => {
    const [activeQuestionGroup, setActiveQuestionGroup] = useState(null);

    const [answers, setAnswers] = useState(
        questionGroups.reduce((acc, questionGroup) => {
            return {
                ...acc,
                [questionGroup.id]: questionGroup.questions.map(() => undefined),
            };
        }, {})
    );

    if (!questionGroups.length) {
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
                                fill-rule="evenodd"
                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                clip-rule="evenodd"
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
    }

    // -- Overview
    if (activeQuestionGroup === null) {
        const content = (
            <ul>
                {questionGroups.map((questionGroup, idx) => {
                    const { id, title, questions } = questionGroup;

                    const progress =
                        questions.length === 0
                            ? 100
                            : (answers[id].filter((val) => val !== undefined).length /
                                  questions.length) *
                              100;

                    const isWarning = answers[id].filter((val) => val === 'No').length > 0;

                    return (
                        <li key={id}>
                            <div
                                onClick={() => setActiveQuestionGroup(questionGroup)}
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
                                                {`${questions.length} ${
                                                    questions.length === 1
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
                                                    style={{ width: `${progress}%` }}
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
                </div>
                <div className="border-t border-gray-200">{content}</div>
            </div>
        );
    }

    // -- Question Group Details

    const answerQuestion = (val, idx) => {
        setAnswers({
            ...answers,
            [activeQuestionGroup.id]: [
                ...answers[activeQuestionGroup.id].slice(0, idx),
                val,
                ...answers[activeQuestionGroup.id].slice(idx + 1),
            ],
        });
    };

    const content = (
        <>
            <h2 className="text-xl font-bold mb-2">{activeQuestionGroup.title}</h2>
            <ol>
                {activeQuestionGroup.questions.map((question, idx) => (
                    <li key={idx} className="mb-2">
                        <p className="text-lg mb-1">{question}</p>
                        <label className="flex items-center mb-1">
                            <input
                                type="radio"
                                name={`radio${activeQuestionGroup.id}-${idx}`}
                                className="form-radio text-teal-400"
                                value="Yes"
                                checked={answers[activeQuestionGroup.id][idx] === 'Yes'}
                                onChange={() => answerQuestion('Yes', idx)}
                            />
                            <span className="ml-2">Yes</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name={`radio${activeQuestionGroup.id}-${idx}`}
                                className="form-radio text-teal-400"
                                value="No"
                                checked={answers[activeQuestionGroup.id][idx] === 'No'}
                                onChange={() => answerQuestion('No', idx)}
                            />
                            <span className="ml-2">No</span>
                        </label>
                    </li>
                ))}
            </ol>
        </>
    );

    return (
        <div className="bg-white overflow-hidden shadow-md rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex items-center justify-between flex-wrap sm:flex-no-wrap">
                <h2 className="text-2xl">Reporting Standards</h2>
                <button
                    type="button"
                    onClick={() => setActiveQuestionGroup(null)}
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
