import logo from './logo.svg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import './App.scss';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Playlist from './pages/Playlist';



function App() {
  const CLIENT_ID='bec8c9ed95414c20817137eb2dbf4e25';
  const REDIRECT_URI='http://localhost:3000/';
  const AUTH_ENDPOINT='https://accounts.spotify.com/authorize'
  const RESPONSE_TYPE='token'
 
// const Container=  styled.div`
// color: red;
// background: red;


// `;

//   const[token , setToken]= useState("");

//   useEffect(()=>{
//     const hash= window.location.hash
//     let token= window.localStorage.getItem('token')

//     if(!token && hash){
//       token=hash.substring(1).split('&').find(Element=>Element.startsWith('access_token')).split("=")[1]
//       window.location.hash = "";
//       window.localStorage.setItem("token", token);
//       setToken(token)
//     }

//   }, [])

//   const logout = ()=>{
//     setToken('')
//     window.localStorage.removeItem('token')
//   }
 
  return (
  //   // <Container>
  //   //  {console.log(token)}
  //   //   <h1> Musika connexion</h1> 
  //   //   {!token? 
  //   //   <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE} `}>Se connecter</a>
  //   //      : <button onClick={logout}>se deconnecter</button> }

  //   //     <Login></Login>

  //   //   </Container>
  <BrowserRouter>
  <Routes>
  
  <Route path="/artist" element={<Login/>} />
  <Route path='/' element = {<Home/> } />
  <Route path= '/playlist' element = {<Playlist/>} />

  </Routes>
  </BrowserRouter>
   
  );
}

export default App;
