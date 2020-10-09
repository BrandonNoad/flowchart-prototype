import React from 'react';
import { Link } from 'gatsby';
import { Redirect } from '@reach/router';

const Questionnaire = ({ location }) => {
    if (!location.state || !location.state.questions) {
        return <Redirect to="/app" noThrow />;
    }

    const results = location.state.questions;

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
    ) : (
        <p>This tool is not appropriate for your study.</p>
    );

    return (
        <div className="bg-white overflow-hidden shadow-md rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex items-center justify-between flex-wrap sm:flex-no-wrap">
                <h2 className="text-2xl">Reporting Standards</h2>
                <Link to="/app">Reset</Link>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">{resultsContent}</div>
        </div>
    );
};

export default Questionnaire;
