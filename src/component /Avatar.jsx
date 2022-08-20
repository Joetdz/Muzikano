import React from 'react';

const Avatar = ({image}) => {
    return (
        <div className='avatar' style={ {backgroundImage:`url(${image})` }}>
            
        </div>
    );
};

export default Avatar;