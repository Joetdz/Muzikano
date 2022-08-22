import React, { useContext } from 'react';
import Avatar from './Avatar';
import { Navigate, useNavigate } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import { useState, useEffect } from 'react';
import { testContext } from '../contexts';


const UserCard = () => {
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(window.localStorage.getItem('token'));

  const [user, setUser] = useState()
  const { logedIn, setLogedIn } = useContext(testContext)
  const getMe = () => {
    spotifyApi.getMe().then(
      function (data) {

        setUser()
        console.log('user ', data);
      },
      function (err) {
        console.error(err);
      }
    );
  }

  useEffect(() => {
    getMe()
    if  (logedIn == false){navigate('/')}
  }, [])

  let token = window.localStorage.getItem('token')
  let navigate = useNavigate()

  const logout = () => {
    window.localStorage.removeItem('token')
    setLogedIn(false)
    console.log('token effacé', { logedIn });
    navigate('/')
    
  }
 
  return (

    <div className='user-card'>

      <Avatar />
      <div className='user-name'>
        <h2>Joel tondozi</h2>
      </div>
      <div className="logout-link">
        <button onClick={logout} >deconnexion</button>

      </div>

    </div>
  );
};

export default UserCard;