import React, { useState } from 'react';
import _isString from 'lodash/isString';
import _intersection from 'lodash/intersection';
import _difference from 'lodash/difference';

import allNodes from '../../../content/nodes.json';

const FILTER_TYPE_SOME = 'some';

const FILTER_TYPE_EVERY = 'every';

const filterCollection = (collection, responses) =>
    collection.filter((item) => {
        if (item.filter === undefined || item.filter === true) {
            return true;
        }

        if (_isString(item.filter)) {
            return responses.length === 1 && responses[0] === item.filter;
        }

        if (item.filter.type === FILTER_TYPE_SOME) {
            return _intersection(item.filter.values, responses).length > 0;
        }

        if (item.filter.type === FILTER_TYPE_EVERY) {
            return _difference(item.filter.values, responses).length === 0;
        }

        throw new Error('Bad Implementation!');
    });

const App = () => {
    const [nodes, setNodes] = useState(allNodes);

    const [responses, setResponses] = useState([]);

    const [answers, setAnswers] = useState([]);

    if (nodes.length) {
        console.log(nodes);
        const currentNode = nodes[0];

        const warnings = currentNode.responseOptions
            .filter(({ warning, value }) => warning && responses.includes(value))
            .map(({ warning }) => warning);

        const warningsContent = warnings.length ? (
            <ul className="text-red-600">
                {warnings.map((warning, idx) => (
                    <li key={idx}>{warning}</li>
                ))}
            </ul>
        ) : null;

        const isNextButtonDisabled = currentNode.isResponseRequired && responses.length === 0;

        const handleChangeOptionFactory = (isMultipleResponsesAllowed) => (e) => {
            e.persist();

            const toggledResponse = e.target.value;

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

        const handleClickNext = (e) => {
            if (isNextButtonDisabled) {
                return;
            }

            setAnswers([...answers, { node: currentNode, responses }]);

            setNodes([...nodes.slice(1), ...filterCollection(currentNode.children, responses)]);

            setResponses([]);
        };

        return (
            <div className="bg-white overflow-hidden shadow-md rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h2 className="text-2xl">Section</h2>
                </div>
                <div className="border-t border-b border-gray-200 px-4 py-5 sm:p-6 h-64">
                    <p className="text-xl mb-2">{currentNode.question}</p>
                    <form>
                        <ul className="">
                            {currentNode.responseOptions.map(({ value }) => {
                                return (
                                    <li className="mb-1" key={value}>
                                        <label className="inline-flex items-center">
                                            <input
                                                type={
                                                    currentNode.isMultipleResponsesAllowed
                                                        ? 'checkbox'
                                                        : 'radio'
                                                }
                                                className={`form-${
                                                    currentNode.isMultipleResponsesAllowed
                                                        ? 'checkbox'
                                                        : 'radio'
                                                } text-teal-400`}
                                                value={value}
                                                checked={responses.includes(value)}
                                                onChange={handleChangeOptionFactory(
                                                    currentNode.isMultipleResponsesAllowed
                                                )}
                                            />
                                            <span className="ml-2">{value}</span>
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>
                    </form>
                </div>
                <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center">
                        <button
                            type="button"
                            className={`py-2 px-4 text-sm leading-5 font-semibold rounded-md text-white bg-teal-400 focus:outline-none focus:shadow-outline-teal focus:border-teal-500 ${
                                isNextButtonDisabled
                                    ? `disabled:opacity-50 disabled:cursor-not-allowed`
                                    : `hover:bg-teal-300 active:bg-teal-500 `
                            }`}
                            onClick={handleClickNext}
                            disabled={isNextButtonDisabled}
                        >
                            Next
                        </button>
                        <div className="ml-2">{warningsContent}</div>
                    </div>
                </div>
            </div>
        );
    }

    const handleClickReset = () => {
        setNodes(allNodes);

        setResponses([]);

        setAnswers([]);
    };

    const results = answers.flatMap(({ node, responses }) =>
        filterCollection(node.results, responses)
    );

    const resultsContent = results.length ? (
        <ul>
            {results.map(({ value }, idx) => (
                <li key={idx}>{value}</li>
            ))}
        </ul>
    ) : null;

    return (
        <div className="bg-white overflow-hidden shadow-md rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex items-center justify-between flex-wrap sm:flex-no-wrap">
                <h2 className="text-2xl">Results</h2>
                <button
                    type="button"
                    className="py-2 px-4 text-sm leading-5 font-semibold rounded-md text-white bg-teal-400 focus:outline-none focus:shadow-outline-teal focus:border-teal-500 hover:bg-teal-300 active:bg-teal-500"
                    onClick={handleClickReset}
                >
                    Reset
                </button>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">{resultsContent}</div>
        </div>
    );
};

export default App;
