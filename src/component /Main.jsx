import React from 'react';
import Banner from './Banner';
import Section from './Section';

const Main = () => {
    return (
        <div className="main-section">
            <Banner/>
            <div className='sections'>
                <Section/>
                <Section/>
                <Section/>
            </div>
    
        </div>
    );
};

export default Main;