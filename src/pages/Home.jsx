import React from 'react';
import Main from '../component /Main';
import LeftSidebar from '../component /LeftSidebar';
import RigthSidebar from '../component /RigthSidebar';

const Home = () => {
    return (
        <div className="home-page">
            <LeftSidebar/>
            <Main/>
            <RigthSidebar/>
        </div>
    );
};

export default Home;