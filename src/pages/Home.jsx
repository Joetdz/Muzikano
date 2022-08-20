import React from 'react';
import Main from '../component /Main';
import LeftSidebar from '../component /LeftSidebar';
import RigthSidebar from '../component /RigthSidebar';
import SpotifyPlayer from 'react-spotify-web-playback';
import Footer from './Footer';

const Home = ({topArtist }) => {
    return (
        <div className="home-page">
            <LeftSidebar/>
            <Main/>
            <RigthSidebar/>
            <Footer/>
        </div>
    );
};

export default Home;