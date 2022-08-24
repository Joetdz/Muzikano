import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { testContext } from '../contexts';
import { useContext } from 'react';

const CardTrack = ({image, trackTitle,artist,duration,uri}) => {
    const timeConvert = (number) =>{
        var s = Math.floor(number / 1000) % 60;
      //minutes
        var m = Math.floor(number / 60000) % 60;
      //affichage
        var chaine = m+":"+s;
        return chaine
      }
      const { playMusic, setPlayMusic }=useContext(testContext);

      let musicPlaying = ()=>{
          setPlayMusic(uri)
          
      }
          

    return (
        <div className='cardTrack-body' onClick={musicPlaying}>
        <div className='track-info'>
            <div className='card-image' style={ {backgroundImage:`url(${image})` }}>
            </div>
            <div className='names'>
                <span className='track-name'>{trackTitle}</span>
                <span className='artist'>{artist}</span>
            </div>
        </div>
        <div className='duration'>
            <span>{timeConvert(duration)}</span>
            <button>

                
                <BsFillPlayCircleFill fontSize={40} color={'black'} className='icon-paly' />
            </button>
        </div>
            
        </div>
    );
};

export default CardTrack;