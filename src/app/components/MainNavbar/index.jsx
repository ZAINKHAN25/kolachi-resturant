import Image from 'next/image';
import React from 'react';

import KolochiLogo from "../../assets/logo.png";

const lisOfNav = ["Home", "About", "Menu", "Pages", "Contact"];

function MainNavbar() {
    return (
        <div
            className='w-full bg-cW'
        >
            <div
                className='container mx-auto flex justify-between items-center px-3 py-2'
            >
                <div>
                    <Image
                        src={KolochiLogo}
                        width={80}
                    />
                </div>
                <div
                    className='flex justify-center items-center gap-3'
                >
                    {
                        lisOfNav.map((item, index) => (
                            <span
                                key={index}
                                className='px-3 py-1 rounded-lg cursor-pointer transition-all hover:bg-hoverClr'
                            >
                                {item}
                            </span>
                        ))
                    }
                </div>
                <div>
                    <button
                        type="button"
                        className="text-cB hover:text-cW border border-gray-800 hover:bg-cB focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-gray-600 dark:text-gray-400 dark:hover:text-cW dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                    >
                        Book a Table
                    </button>


                </div>
            </div>
        </div>
    )
}

export default MainNavbar;