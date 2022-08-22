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




function App() {




  const [logedIn, setLogedIn] = useState(false);
  console.log(logedIn);
  const [playMusic , setPlayMusic]=useState('')


  return (
    <testContext.Provider value={{
      logedIn,
      setLogedIn,
      playMusic,
      setPlayMusic

    }}>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path='home' element={<Home />} />
          <Route path='/playlist' element={<Playlist />} />
          <Route path='/search' element={<Search />} />
          <Route path='/artist' element={<Artist />} />
        </Routes>

      </BrowserRouter>
      {logedIn && <Footer />}

      {/* <Footer /> */}

    </testContext.Provider>




  );
}

export default App;
