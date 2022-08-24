import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import { testContext } from '../contexts';
import { parseVolume } from 'react-spotify-web-playback/lib/utils';
import Avatar from './Avatar';

const CardPlaylist = ({type, name, img, id, uri, allDetailArtiste , musicPlaying}) => {
    return (

        <div className="card-body" onClick={musicPlaying}>
            <NavLink to='/artist' >
                <div className='card-btn-play'>

                    <button>
                        <BsFillPlayCircleFill fontSize={40} color={'black'} className='icon-paly' />
                    </button>
                </div>
                <div className='card-image' >
                   
                </div>
                <div className='card-title'>
                    <h3>{name}</h3>
                </div>
                <div className="card-description">
                    <h4> {type}</h4>

                </div>
            </NavLink>
        </div>
    );
};

export default CardPlaylist;