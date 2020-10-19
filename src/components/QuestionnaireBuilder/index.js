import React, { useState, useEffect } from 'react';

import { filterCollection } from '../../util';
import allNodes from '../../data/nodes';

const QuestionnaireBuilder = ({ navigate }) => {
    const [nodes, setNodes] = useState(allNodes);

    const [responses, setResponses] = useState([]);

    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        if (nodes.length === 0) {
            const results = answers.flatMap(({ node, responses }) =>
                filterCollection(node.results, responses)
            );

            navigate('/app/reporting-standards', { state: { results } });
        }
    }, [nodes, answers, navigate]);

    if (nodes.length === 0) {
        return null;
    }

    const currentNode = nodes[0];

    const isNextButtonDisabled = currentNode.isResponseRequired && responses.length === 0;

    const handleChangeOptionFactory = (isMultipleResponsesAllowed) => (e) => {
        e.persist();

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

        const { children, ...currentNodeWithoutChildren } = currentNode;

        setAnswers([...answers, { node: currentNodeWithoutChildren, responses }]);

        setNodes([...filterCollection(children, responses), ...nodes.slice(1)]);

        setResponses([]);
    };

    return (
        <div className="bg-white overflow-hidden shadow-md rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h2 className="text-2xl">Study Configuration</h2>
            </div>
            <div className="border-t border-b border-gray-200 px-4 py-5 sm:p-6 h-64">
                <p className="text-xl mb-2">{currentNode.question}</p>
                <form id="flowchart-form" onSubmit={handleSubmit}>
                    <ul>
                        {currentNode.responseOptions.map((responseOption, idx) => (
                            <li className="mb-1" key={responseOption + idx}>
                                <label className="flex items-center">
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
                                        value={idx}
                                        checked={responses.includes(idx)}
                                        onChange={handleChangeOptionFactory(
                                            currentNode.isMultipleResponsesAllowed
                                        )}
                                    />
                                    <span className="ml-2">{responseOption}</span>
                                </label>
                            </li>
                        ))}
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
