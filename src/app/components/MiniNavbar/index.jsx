import React from 'react';

import { FaFacebook, FaGithub, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function MiniNavbar() {
    return (
        <div
            className='bg-firstColor text-cW'
        >
            <div
                className='flex justify-between container p-2 items-center gap-3 mx-auto'
            >
                <div
                    className='flex justify-center items-center gap-3'
                >
                    <div
                        className='flex justify-center items-center gap-1'
                    >
                        <FaPhoneAlt />
                        <span>
                            0300-9297318
                        </span>
                    </div>
                    <div
                        className='flex justify-center items-center gap-1'
                    >
                        <MdOutlineEmail />
                        <span>
                            zainarfeen87@gmail.com
                        </span>
                    </div>
                </div>
                <div
                    className='flex justify-center items-center gap-3'
                >
                    <div
                        className='bg-buttonClr cursor-pointer p-2 rounded-full transition-all hover:bg-buttonClrHvr'
                    >
                        <FaYoutube />
                    </div>
                    <div
                        className='bg-buttonClr cursor-pointer p-2 rounded-full transition-all hover:bg-buttonClrHvr'
                    >
                        <FaFacebook />
                    </div>
                    <div
                        className='bg-buttonClr cursor-pointer p-2 rounded-full transition-all hover:bg-buttonClrHvr'
                    >
                        <FaInstagram />
                    </div>
                    <div
                        className='bg-buttonClr cursor-pointer p-2 rounded-full transition-all hover:bg-buttonClrHvr'
                    >
                        <FaGithub />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniNavbar;