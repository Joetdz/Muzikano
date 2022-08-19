import React from 'react';
import Illustration from '../component /Illustration';
import LoginBtn from '../component /LoginBtn';
import Logo from '../component /Logo';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {

    const CLIENT_ID='bec8c9ed95414c20817137eb2dbf4e25';
    const REDIRECT_URI='http://localhost:3000/';
    const AUTH_ENDPOINT='https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE='token'
  
  
   const[token , setToken]= useState("");
   
  
   useEffect(()=>{
      const hash= window.location.hash
      let newtoken= window.localStorage.getItem('token')
  
      if(!token && hash){
        newtoken=hash.substring(1).split('&').find(Element=>Element.startsWith('access_token')).split("=")[1]
        window.location.hash = "";
        window.localStorage.setItem("token", token);
        setToken(newtoken)
      }
  
    }, )
  
    const logout = ()=>{
      setToken('')
      window.localStorage.removeItem('token')
    }
    return (
        
        <div className="login-page">
            <div className="login-section">
                <Logo/>
                 {/* {console.log(token)}
      <h1> Musika connexion</h1> 
      
      <a href= */}


                <h2>Retrouvez toute la musique d’ici et d’ailleur à porté de main</h2>
                {!token? 
                <LoginBtn href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE} `}></LoginBtn>
         :<Navigate to="/home"/> } 
            </div>
            <div className="ilustartion-section">
                <Illustration/>
            </div>
        </div>
    );
};

export default Login;