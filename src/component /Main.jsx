import React from 'react';
import Banner from './Banner';
import Section from './Section';

const Main = () => {
    return (
        <div className="main-section">
            <Banner/>
            <div className='sections'>
                <Section title={'Les Artiste que tu ecoutes le plus'}/>
                <Section title={'Playlist'}/>
             
            </div>
    
        </div>
    );
};

export default Main;