import React from 'react';
import Avatar from './Avatar';

const UserCard = () => {
    return (
        <div className='user-card'>
            <Avatar/>
             <div className='user-name'>
                <h2>Joel tondozi</h2>
             </div>
            <div className="logout-link">
                <button>deconnexion</button>
            </div>

        </div>
    );
};

export default UserCard;