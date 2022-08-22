import React, { useContext } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { testContext } from '../contexts';
const Footer = () => {
  let token = window.localStorage.getItem('token')
  console.log('token', token)
  const { playMusic , setPlayMusic}=useContext(testContext);
  return (
    <div className='footer'>
      <SpotifyPlayer
        token={`${token}`}
        uris={[`${playMusic}`]} styles={{
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