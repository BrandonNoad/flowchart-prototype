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
        const currentNode = nodes[0];

        const warnings = currentNode.responseOptions
            .filter(({ warning, value }) => warning && responses.includes(value))
            .map(({ warning }) => warning);

        const warningsContent = warnings.length ? (
            <p className="text-red-600">{warnings.join('; ')}</p>
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

        const handleSubmit = (e) => {
            e.preventDefault();

            if (isNextButtonDisabled) {
                return;
            }

            setAnswers([...answers, { node: currentNode, responses }]);

            setNodes([...filterCollection(currentNode.children, responses), ...nodes.slice(1)]);

            setResponses([]);
        };

        return (
            <div className="bg-white overflow-hidden shadow-md rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h2 className="text-2xl">{currentNode.title}</h2>
                </div>
                <div className="border-t border-b border-gray-200 px-4 py-5 sm:p-6 h-64">
                    <p className="text-xl mb-2">{currentNode.question}</p>
                    <form id="flowchart-form" onSubmit={handleSubmit}>
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
        <>
            {results.map(({ title, data }, idx) => (
                <div key={idx}>
                    <h2 className="text-xl font-bold mb-3">{title}</h2>
                    {data.map(({ heading, items }, idx) => (
                        <div key={idx} className="mb-2">
                            <h3 className="text-lg font-semibold">{heading}</h3>
                            <ul>
                                {items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </>
    ) : null;

    return (
        <div className="bg-white overflow-hidden shadow-md rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex items-center justify-between flex-wrap sm:flex-no-wrap">
                <h2 className="text-2xl">Reporting Standards</h2>
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
