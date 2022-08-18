
import React from 'react';
import Avatar from './Avatar'
import {BsFillPlayCircleFill } from 'react-icons/bs'

const Card = () => {
    return (
        <div className="card-body"> 
             <div className='card-btn-play'>
                <button>
                    <BsFillPlayCircleFill fontSize={40} color={'black'} className='icon-paly'/> 
                </button>
            </div> 
            <div className='card-image'>
                <Avatar/>
            </div>
            <div className='card-title'>
                <h3>Dadju</h3>
            </div>  
            <div className="card-description">
                <h4> Artiste</h4>
            </div>

        </div>
    );
};

export default Card;