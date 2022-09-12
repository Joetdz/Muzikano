import React, { useState,useEffect } from 'react';
import LeftSidebar from '../component /LeftSidebar';
import RigthSidebar from '../component /RigthSidebar';
import SpotifyWebApi from 'spotify-web-api-js';
import SectionPlaylist from '../component /SectionPlaylist';
import Banner from '../component /Banner';

const Playlist = () => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(window.localStorage.getItem('token'));
    const [userPlaylists , setUserPlaylists]=useState([]);
    const getUserPlaylists= ()=>{
        spotifyApi.getUserPlaylists().then( (data)=>{ 
            console.log('playlists', data.items)
            setUserPlaylists(data.items)
        })
    }
    useEffect(() =>{
        getUserPlaylists();

    },[])
    return (
        <div className="playlist-page" >
            <LeftSidebar/>
            <div className="main-section">
                <Banner/>
             <SectionPlaylist playlists={userPlaylists}/>
             </div>
            <RigthSidebar/>
            
        </div>
    );
};

export default Playlist;