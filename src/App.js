import logo from './logo.svg';
import './App.scss';
import Login from './pages/Login';
import Home from './pages/Home';
import Search from './pages/Search';
import Artist from './pages/Artist';
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import Playlist from './pages/Playlist';
import { testContext } from './contexts';
import { useState, useEffect } from 'react';
import Footer from './pages/Footer';
import Form from './component /Form';




function App() {




  const [logedIn, setLogedIn] = useState(false);

  const [playMusic , setPlayMusic]=useState('');
  const [artistDetail , setArtistDetail]= useState({})
  console.log('details',artistDetail);
  const [resultsTrack , setResulstTrack]=useState([])
  const [resultsArtist , setResulstArtist]=useState([])
  const [resultsAblum , setResultsAblum]=useState([])
  const [resultsPlaylist, setResultPlaylist]=useState([])




  return (
    <testContext.Provider value={{
      logedIn,
      setLogedIn,
      playMusic,
      setPlayMusic,
      artistDetail,
      setArtistDetail,
      resultsTrack , 
      setResulstTrack,
      resultsArtist , 
      setResulstArtist,
      resultsAblum , 
      setResultsAblum,
      resultsPlaylist, 
      setResultPlaylist,
      


    }}>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path='home' element={<Home />} />
          <Route path='/playlist' element={<Playlist />} />
          <Route path='/search' element={<Search />} />
          <Route path='/artist' element={<Artist />} />
        </Routes>

        {logedIn&& <Form/> }
      </BrowserRouter>
      {logedIn&& <Footer />}
    
     {/* {  <Form/>   } */}
{/* 
      <Footer /> */}

    </testContext.Provider>




  );
}

export default App;
