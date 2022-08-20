import React from 'react';

const LoginBtn = ({href}) => {
    return (
        <div className="login-btn">
            <div className="google-img">
                <img src="img/google.png" alt="" />
            </div>
            <div className="login-link">
               <a href={href}><button>Connectez vous </button></a> 
            </div>
        </div>
    );
}

export default LoginBtn;