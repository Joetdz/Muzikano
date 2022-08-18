import React from 'react';
import Card from './Card';

const Section = () => {
    return (
        <div className='section'>
            <div className='title-section'>
                <div className='title'>
                   <h1>Les artiste les plus ecoutés</h1>
                </div>
                <div className='more'>
                    <span>Voir plus</span>
                </div>
            </div>
            <div className='cards'>
             <Card/>
             <Card/>
             <Card/>
             <Card/> 
             <Card/>
             <Card/>
             <Card/>
             <Card/>
            </div>
            
        </div>
    );
};

export default Section;