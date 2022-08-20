import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

const Footer = () => {
    return (
        <div className='footer'>
            <SpotifyPlayer
  token="BQAI_7RWPJuqdZxS-I8XzhkUi9RKr8Q8UUNaJAHwWlpIq6..."
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