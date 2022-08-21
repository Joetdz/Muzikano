import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

const Footer = () => {
    let token = window.localStorage.getItem('token')
    console.log('token' ,token)
    return (
        <div className='footer'>
            <SpotifyPlayer
  token={`${token}`}
  uris={['spotify:artist:6IflU2YrY5Cyw7YoBICosV']} styles={{
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