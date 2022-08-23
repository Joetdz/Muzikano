import React from 'react';
import Banner from '../component /Banner';
import Form from '../component /Form';
import LeftSidebar from '../component /LeftSidebar';
import RigthSidebar from '../component /RigthSidebar';

const Artist = () => {
    return (
        <div className="home-page">
            <LeftSidebar/>
            <div className="main-section">
            <Banner img='img/Bannerimage.png'/>
            </div>
           
            <RigthSidebar/>
       </div>
    );
};

export default Artist;