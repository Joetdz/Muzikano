import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {  AiFillHome , AiOutlineUsergroupAdd , AiOutlineStepBackward,AiOutlineSearch} from  "react-icons/ai";

const Navigation = () => {
    const [navActive , setNavActive]=useState('nav-active');
    return (
        <div className="navigation">
            <nav>

                <ul><li>
                        <NavLink to="/home" className={({isActive}) => isActive ? navActive : ""} >
                            <span className="navlink-icon"><AiFillHome/></span><span className='navlink-text'>Acueil</span>
                        </NavLink>
                    </li> 
                    {/* <li>
                        <NavLink to="/artist" className={({isActive}) => isActive ? navActive : ""} >
                         <AiOutlineUsergroupAdd/>Artist
                         </NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/playlist" className={({isActive}) => isActive ? navActive : ""} >
                        <span className="navlink-icon"><AiOutlineStepBackward/></span><span className='navlink-text'>playlist</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" className={({isActive}) => isActive ? navActive : ""} >
                        <span className="navlink-icon"><AiOutlineSearch/></span><span className='navlink-text'>Search</span>
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default Navigation;