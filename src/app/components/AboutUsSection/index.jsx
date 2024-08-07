import React from 'react';

import AboutUsSectionImg from "../../assets/About-Us-Section-Img.png"

import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn, MdOutlineMailOutline } from 'react-icons/md';
import Image from 'next/image';

function AboutUsSection() {
    return (
        <div className='aboutUsSectionDiv min-h-screen p-5'>
            <div className='container mx-auto flex justify-center items-center flex-wrap'>
                <div className='firstLineOfAboutUsSection relative flex-1'>
                    <div>
                        <Image width={"500px"} height={"400px"} className='imgDivOfAbout' src={AboutUsSectionImg} alt="About Us Section Img" />
                    </div>
                    <div className='AboutUsSectionSubCard'>
                        <h3>Come and visit us</h3>
                        <div className='flex gap-2 justify-start items-center text-md'>
                            <FaPhoneAlt />
                            +11 1111111 11
                        </div>
                        <div className='flex gap-2 justify-start items-center text-md'>
                            <MdOutlineMailOutline />
                            zainarfeen87@gmail.com
                        </div>
                        <div className='flex gap-2 justify-start items-center text-md'>
                            <MdLocationOn className='text-2xl'/>
                            837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <h3>
                        We provide healthy food for your family.
                    </h3>
                    <b>
                        Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in  {true ? "city's" : ""} rich culinary culture, we aim to honor our local roots while infusing a global palate.
                    </b>
                    <p>
                        At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                    </p>
                    <button>
                        More About Us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection;