import React, { useContext } from 'react';
import Avatar from './Avatar';
import { Navigate, useNavigate } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import { useState, useEffect } from 'react';
import { testContext } from '../contexts';
import {AiOutlineLogout} from 'react-icons/ai'

const UserCard = () => {
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(window.localStorage.getItem('token'));

  const [user, setUser] = useState()
  const [isLoading, setIsLoading]=useState(true)
  const { logedIn, setLogedIn , } = useContext(testContext)
  console.log(isLoading)
 
  
  const getMe = () => {
    spotifyApi.getMe().then(
      function (data) {

        setUser(data)
        setIsLoading(false) 
        console.log('user ', data);

      },
      function (err) {
        console.error(err);
      }
    )
  }

  useEffect(() => {
    getMe()
    console.log(isLoading)
    if  (logedIn == false){navigate('/')}
  }, [])

  let token = window.localStorage.getItem('token')
  let navigate = useNavigate()

  const logout = () => {
    window.localStorage.removeItem('token')
    setLogedIn(false)
    console.log('token effacé', { logedIn });
    navigate('/')
    console.log(user.display_name)
  }
 
  return (<>
  { isLoading?<div></div>:
    <div className='user-card' >
      <div className='user-avatar'>
        d
      </div>
      <div className='user-name'>
        {user.display_name} 
      </div>
      <div className="logout-link">
        <button onClick={logout}>Deconnexion<span classeName='logout-icon'><AiOutlineLogout/></span></button>

      </div>

    </div>}</>

  );
};

export default UserCard;