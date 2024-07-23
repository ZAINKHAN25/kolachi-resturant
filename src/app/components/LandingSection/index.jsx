import React from 'react';

function LandingSection() {
    return (
        <div
            className='LandingPageDiv'
        >
            <h1
                className='text-6xl'
            >
                Best food for your taste.
            </h1>
            <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
            <div
                className='flex justify-center items-center gap-2'
            >
                <button
                    type="button"
                    className="text-cW bg-secondColor/80 border border-gray-800 hover:bg-secondColor focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-cW dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
                    Book a Table
                </button>
                <button
                    type="button"
                    className="text-cB hover:text-cW border border-gray-800 hover:bg-cB focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-cW dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
                    Explore Menu
                </button>
            </div>
        </div>
    );
}

export default LandingSection;
