import React, { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {useState} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { Navigate } from 'react-router-dom';
const Form = () => {
    const  spotifyApi  =  new  SpotifyWebApi ( ) ;
  spotifyApi.setAccessToken(window.localStorage.getItem('token'));

    const [search , setSearch]=useState()

     const  searchArtist= ()=>{
        spotifyApi.searchArtists(`${search}`).then(
            function (data) {
              console.log('Search artists by ', data);
            },
            function (err) {
              console.error(err);
            }
          );
    }

    const searchTrack= ()=>{
        spotifyApi.searchTracks('Love').then(
            function (data) {
              console.log('Search by  trach "Love"', data);
            },
            function (err) {
              console.error(err);
            }
          );
    }

    useEffect(()=>{
        searchArtist()
        searchTrack()


    },[search])
    console.log(search);
    return (
        <div className='form'>
           
            <form action="">
                <AiOutlineSearch/>
                <input type="text"  placeholder="Cherchez artistes, chansons , album "  onChange={(e)=>{
                            setSearch(e.target.value)
                        } }/>
                <input type="submit" value="cherchez"></input>
            </form>
        
        </div>
    ); 
};

export default Form;