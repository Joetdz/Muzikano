import logo from './logo.svg';
import './App.scss';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Playlist from './pages/Playlist';
import { testContext } from './contexts';
import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';



function App() {
  const  spotifyApi  =  new  SpotifyWebApi ( ) ;
  spotifyApi.setAccessToken(window.localStorage.getItem('token'));
   const [myTopArtiste, setMyTopArtiste ]=useState([])
  
  useEffect(() => {
  
 spotifyApi.getMyTopArtists('').then(
       (data)=> {
        setMyTopArtiste(data.items);
        

      },
     (err) =>{
        console.error(err);
      }
    );
  },[])
 
 

  const [logedIn, setLogedIn] = useState(false);


  return (
    <testContext.Provider value={{
      logedIn,
      setLogedIn,
      myTopArtiste,
      setMyTopArtiste,
    }}>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path='home' element={<Home />} />
          <Route path='/playlist' element={<Playlist />} />

        </Routes>

      </BrowserRouter>
    </testContext.Provider>




  );
}

export default App;
