import React, { useState,useEffect } from 'react';
import LeftSidebar from '../component /LeftSidebar';
import RigthSidebar from '../component /RigthSidebar';
import SpotifyWebApi from 'spotify-web-api-js';

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
             
            <RigthSidebar/>
            
        </div>
    );
};

export default Playlist;