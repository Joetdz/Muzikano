import React from 'react';
import Illustration from '../component /Illustration';
import LoginBtn from '../component /LoginBtn';
import Logo from '../component /Logo';

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-section">
                <Logo/>
                <h2>Retrouvez toute la musique d’ici et d’ailleur à porté de main</h2>
                <LoginBtn/>
            </div>
            <div className="ilustartion-section">
                <Illustration/>
            </div>
        </div>
    );
};

export default Login;