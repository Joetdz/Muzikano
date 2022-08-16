import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {  AiFillHome , AiOutlineUsergroupAdd , AiOutlineStepBackward} from  "react-icons/ai";

const Navigation = () => {
    const [navActive , setNavActiv]=useState('nav-active');
    return (
        <div className="navigation">
            <nav>

                <ul><li>
                    <NavLink to="/" className={({isActive}) => isActive ? navActive : ""} >
                        <AiFillHome/>Acueil
                    </NavLink>
                        </li>
                        <NavLink to="/" className={({isActive}) => isActive ? navActive : ""} >
                        <li><AiOutlineUsergroupAdd/>Artist</li>
                    </NavLink>
                    <li>
                    <NavLink to="/playlist" className={({isActive}) => isActive ? navActive : ""} >
                        <AiOutlineStepBackward/>playlist
                    </NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default Navigation;