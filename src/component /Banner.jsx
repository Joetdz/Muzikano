import React from 'react';
import Form from './Form';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="form-banner">
             <Form/>
            </div>
            <img src="img/Bannerimage.png" alt="" />     
        </div>
    );
};

export default Banner;