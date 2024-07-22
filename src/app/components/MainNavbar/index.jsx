import Image from 'next/image';
import React from 'react';

import KolochiLogo from "../../assets/logo.png";

const lisOfNav = ["Home", "About", "Menu", "Pages", "Contact"];

function MainNavbar() {
    return (
        <div
            className='w-screen bg-cW'
        >
            <div
                className='container mx-auto flex justify-between px-3 py-2'
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
                <div></div>
            </div>
        </div>
    )
}

export default MainNavbar;