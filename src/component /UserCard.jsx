import React, { useContext } from 'react';
import Avatar from './Avatar';
import { Navigate } from 'react-router-dom';

const UserCard = () => {
    let  token= window.localStorage.getItem('token')
    const logout= ()=>{
        window.localStorage.removeItem('token')
    }
    {!token?? <Navigate to="/"/> }
    return (
        
        <div className='user-card'>
           
            <Avatar/>
             <div className='user-name'>
                <h2>Joel tondozi</h2>
                {!token?? <Navigate to="/home"/> }  
             </div>
            <div className="logout-link">
                <button onClick={ logout} >deconnexion</button>
               
            </div> 

        </div>
    );
};

export default UserCard;