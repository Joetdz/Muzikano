import React, { useContext } from 'react';
import Illustration from '../component /Illustration';
import LoginBtn from '../component /LoginBtn';
import Logo from '../component /Logo';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { testContext } from '../contexts';

const Login = () => {

 
 
  const SCOPE = 'streaming user-follow-read playlist-read-private user-read-private user-read-email user-read-playback-state user-top-read user-library-modify user-library-read user-read-currently-playing playlist-read-private user-read-recently-played  user-modify-playback-state'

   

  const { logedIn, setLogedIn } = useContext(testContext);
  const [token, setToken] = useState("");
  
  
  useEffect(() => {
   
    
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')

    if (hash) {
      token = hash.substring(1).split('&').find(Element => Element.startsWith('access_token')).split("=")[1]
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      setToken(token)


    }
    if (token) setLogedIn(true)
    
  },[])


  return (

    <div className="login-page">
     
      <div className="login-section">
        <Logo />
        <h2>Retrouvez toute la musique d’ici et d’ailleur à porté de main</h2>
        {!logedIn ? <LoginBtn href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=${SCOPE}&redirect_uri=${process.env.REACT_APP_REDIRECT_ID}&response_type=${process.env.REACT_APP_RESPONSE_TYPE} `}></LoginBtn>
          : <Navigate to="/home" />}
      </div>
      <div className="ilustartion-section">
        <Illustration image='img/illustration.png'/>
      </div>
    </div>
  );
};

export default Login;