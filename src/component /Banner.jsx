import React from 'react';
import Form from './Form';

const Banner = ({img, BgIMG, name ,followers , follow}) => {
    return (
        <div className='banner' style={ {backgroundImage:`url(${img})` }}>
            <div className="banner-details">
                <div className='name'>
                 <h1> {name}</h1>
                </div>
                <span className='details'>
                    {followers}{follow}
                </span>

              
            </div>
              
        </div>
    );
};

export default Banner;