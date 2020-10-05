import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="bg-gray-100 h-screen text-gray-900">
            <header className="bg-gray-600 shadow">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold leading-tight text-white">Flowchart</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{children}</div>
            </main>
        </div>
    );
};

export default Layout;
