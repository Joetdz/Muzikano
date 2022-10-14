import React from 'react';
import Main from '../component /Main';
import LeftSidebar from '../component /LeftSidebar';
import RigthSidebar from '../component /RigthSidebar';

import Footer from './Footer';
import Banner from '../component /Banner';

const Home = ({topArtist }) => {
    return (
        <div className="home-page">
            <LeftSidebar/>
             <Main/>
            <RigthSidebar/>
        
        </div>
    );
};

export default Home;