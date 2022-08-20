
import React from 'react';
import Avatar from './Avatar'
import {BsFillPlayCircleFill } from 'react-icons/bs'

const Card = ({type , name, img}) => {
    return (
        <div className="card-body"> 
             <div className='card-btn-play'>
                <button>
                    <BsFillPlayCircleFill fontSize={40} color={'black'} className='icon-paly'/> 
                </button>
            </div> 
            <div className='card-image' >
                <Avatar image={img}/>
            </div>
            <div className='card-title'>
                <h3>{name}</h3>
            </div>  
            <div className="card-description">
                <h4> {type}</h4>
            </div>

        </div>
    );
};

export default Card;