
import React, { useContext } from 'react';
import Avatar from './Avatar'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import { testContext } from '../contexts';
import { parseVolume } from 'react-spotify-web-playback/lib/utils';
const Card = ({ type, name, img, id, uri, allDetailArtiste }) => {
 const {artistDetail , setArtistDetail}=useContext(testContext)
    const { playMusic, setPlayMusic }=useContext(testContext);

    let musicPlaying = ()=>{
        setPlayMusic(uri)
        setArtistDetail(allDetailArtiste)
    }
        
    return (
        <div className="card-body" onClick={musicPlaying}>
            <NavLink to='/artist' >
                <div className='card-btn-play'>

                    <button>
                        <BsFillPlayCircleFill fontSize={40} color={'black'} className='icon-paly' />
                    </button>
                </div>
                <div className='card-image' >
                    <Avatar image={img} />
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

export default Card;