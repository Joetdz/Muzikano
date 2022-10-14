import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import { testContext } from '../contexts';
import { parseVolume } from 'react-spotify-web-playback/lib/utils';
import Avatar from './Avatar';
import { useContext } from 'react';

const CardPlaylist = ({type, name, image, id, uri, al }) => {
    const { playMusic, setPlayMusic }=useContext(testContext);

    let musicPlaying = ()=>{
        setPlayMusic(uri)
       
    }
    return (

        <div className="card-body" onClick={musicPlaying}>
            <NavLink to='/playlist' >
                <div className='card-btn-play'>

                    <button>
                        <BsFillPlayCircleFill fontSize={40} color={'black'} className='icon-paly'  />
                    </button>
                </div>
                <div className='card-image-playlist' style={ {backgroundImage:`url(${image})`  } }>
                   
                </div>
                <div className='card-title'>
                    <h3>{name}</h3>
                </div>
                <div className="card-description">
                    <h4>{type}</h4>

                </div>
            </NavLink>
        </div>
    );
};

export default CardPlaylist;