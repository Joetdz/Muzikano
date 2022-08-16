import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <div className="logo">
            <Logo/>
            </div>

            <div className='nav'>
               <Navigation/>

            </div>
            
        </div>
    );
};

export default LeftSidebar;