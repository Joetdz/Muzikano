import React from 'react';
import Banner from './Banner';
import Section from './Section';
import { testContext } from '../contexts';
import { useState, useEffect } from 'react';
import LoadingSpin from 'react-loading-spin';

import SpotifyWebApi from 'spotify-web-api-js';
const Main = () => {
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(window.localStorage.getItem('token'));
  const [myTopArtiste, setMyTopArtiste] = useState([])
  const [isLoading , setIsLoading]=useState(true)


  useEffect(() => {

    spotifyApi.getMyTopArtists('').then(
      (data) => {
        console.log(data);
        setMyTopArtiste(data.items);
        setIsLoading(false)

      },
      (err) => {
        console.error(err);
      }
    );

  }, [])
  const minIndex=1;
  const maxIndex=10;
  function randomIndex(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
const currentIndex=randomIndex(minIndex,maxIndex)

  return (
    <div className="main-section">
      {isLoading ? <span className='loader'><LoadingSpin primaryColor="rgba(188, 73, 124, 1)"
            secondaryColor="#333"/></span>:
      <><Banner  img={myTopArtiste[currentIndex].images[0].url} />
      <div className='sections'>
          <Section title={'Les Artistes que tu ecoutes le plus'} TopArtiste={myTopArtiste} />
      
       <Section title={'Les Artistes que tu ecoutes le plus'} TopArtiste={myTopArtiste} /> 
      
      </div></>}

    </div>
  );
};

export default Main;