import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => (
    <div className="h-screen bg-gray-600">
        <div className="relative bg-white">
            <main className="p-4 lg:px-12 lg:w-1/2 lg:h-full">
                <div className="text-center lg:text-left lg:my-32">
                    <h2 className="text-4xl tracking-wide font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        STARTED
                    </h2>
                    <p className="text-base text-gray-500 mb-4 sm:text-lg md:text-xl">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <Link
                        to="/app"
                        className="mb-4 rounded-md shadow w-1/2 mx-auto lg:mx-0 flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-400 hover:bg-teal-300 focus:outline-none focus:border-teal-500 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                        Get Started
                    </Link>
                </div>
            </main>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="https://source.unsplash.com/cckf4TsHAuw/1600x900"
                    alt=""
                />
            </div>
            <svg
                className="hidden absolute lg:block w-32 h-full left-1/2 inset-y-0 text-white"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <polygon points="0,0 100,0 0,100" />
            </svg>
        </div>
    </div>
);

export default IndexPage;
