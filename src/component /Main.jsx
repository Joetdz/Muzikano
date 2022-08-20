import React from 'react';
import Banner from './Banner';
import Section from './Section';
import { testContext } from '../contexts';
import { useContext } from 'react';

const Main = () => {
    const {myTopArtiste,  setMyTopArtiste}= useContext(testContext)
    
    return (
        <div className="main-section">
            <Banner/>
            <div className='sections'>
                <Section title={'Les Artiste que tu ecoutes le plus'}  TopArtiste={myTopArtiste}/>
                <Section title={'Playlist'}/>
             
            </div>
    
        </div>
    );
};

export default Main;