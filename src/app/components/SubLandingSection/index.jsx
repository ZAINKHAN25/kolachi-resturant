import React from 'react';

const dummyData = ["Brak Fast", "Main Dishes", "Drinks", "Desserts"];

function SubLandingSection() {
    return (
        <div className='Sub-Landing-Page-Section'>
            <h1 className='text-6xl'>
                Browse Our Menu
            </h1>
            <div className='menu-items'>
                {dummyData.map((item, index) => (
                    <div className='menu-item' key={index}>
                        <h2>{item}</h2>
                        <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubLandingSection;
