import React from 'react';
import { PiCoffeeFill } from "react-icons/pi";
import { LuPopcorn } from "react-icons/lu";
import { CiGlass } from "react-icons/ci";
import { GiCakeSlice } from "react-icons/gi";

const dummyData = [
    {
        name: "Brak Fast",
        icon: <PiCoffeeFill />
    },
    {
        name: "Main Dishes",
        icon: <LuPopcorn />
    },
    {
        name: "Drinks",
        icon: <CiGlass />
    },
    {
        name: "Desserts",
        icon: <GiCakeSlice />
    }
];

function SubLandingSection() {
    return (
        <div
            className='Sub-Landing-Page-Section'
        >
            <div
                className='container mx-auto'
            >

                <h1
                    className='text-6xl'
                >
                    Browse Our Menu
                </h1>
                <div
                    className='menu-items'
                >
                    {
                        dummyData.map((item, index) => (
                            <div className='menu-item' key={index}>
                                <span>{item.icon}</span>
                                <h1>{item.name}</h1>
                                <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                                <button>Explore Menu</button>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default SubLandingSection;
