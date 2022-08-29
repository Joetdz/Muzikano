import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {  AiFillHome , AiOutlineUsergroupAdd , AiOutlineStepBackward} from  "react-icons/ai";

const Navigation = () => {
    const [navActive , setNavActive]=useState('nav-active');
    return (
        <div className="navigation">
            <nav>

                <ul><li>
                        <NavLink to="/home" className={({isActive}) => isActive ? navActive : ""} >
                            <AiFillHome/>Acueil
                        </NavLink>
                    </li> 
                    {/* <li>
                        <NavLink to="/artist" className={({isActive}) => isActive ? navActive : ""} >
                         <AiOutlineUsergroupAdd/>Artist
                         </NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/playlist" className={({isActive}) => isActive ? navActive : ""} >
                            <AiOutlineStepBackward/>playlist
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" className={({isActive}) => isActive ? navActive : ""} >
                            <AiOutlineStepBackward/>Search
                        </NavLink>
                    </li>
                </ul>

            </nav>n 
        </div>
    );
};

export default Navigation;