import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

const Footer = () => {
    let token = window.localStorage.getItem('Token')
    console.log(token)
    return (
        <div className='footer'>
            <SpotifyPlayer
  token={`${token}`}
  uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']} styles={{
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