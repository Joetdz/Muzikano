import React from 'react';
import Banner from './Banner';
import Section from './Section';
import { testContext } from '../contexts';
import { useState , useEffect} from 'react';

import SpotifyWebApi from 'spotify-web-api-js';
const Main = () => {
    const  spotifyApi  =  new  SpotifyWebApi ( ) ;
  spotifyApi.setAccessToken(window.localStorage.getItem('token'));
   const [myTopArtiste, setMyTopArtiste ]=useState([])
   
  
  useEffect(() => {
  
 spotifyApi.getMyTopArtists('').then(
       (data)=> {
        console.log(data);
        setMyTopArtiste(data.items);
        

      },
     (err) =>{
        console.error(err);
      }
    );

  },[])

    
    return (
        <div className="main-section">
            <Banner/>
            <div className='sections'>
                <Section title={'Les Artiste que tu ecoutes le plus'}  TopArtiste={myTopArtiste}/>
                <Section title={'Les Artiste que tu ecoutes le plus'}  TopArtiste={myTopArtiste}/>
               
                
            </div>
    
        </div>
    );
};

export default Main;