import React, { useContext, useState,useEffect } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { testContext } from '../contexts';
const Footer = () => {
  let token = window.localStorage.getItem('token')
  console.log('token', token)
  const { playMusic , setPlayMusic}=useContext(testContext);
  const [play, setPlay]=useState(false);
  useEffect(()=>{
    setPlay(true)
  }, [playMusic])
  return (
    <div className='footer'>
      <SpotifyPlayer

        token={`${token}`}
        uris={[`${playMusic}`]} 
        play={play}
        autoPlay={true}
        callback={(event) => !event.isPlaying && setPlay(false)}
        styles={{
          activeColor: '#fff',
          bgColor: '#333',
          color: '#fff',
          loaderColor: '#fff',
          sliderColor: '#1cb954',
          trackArtistColor: '#ccc',
          trackNameColor: '#fff',
        }}
      />;

    </div>
  );
};

export default Footer;