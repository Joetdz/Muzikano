import logo from './logo.svg';
import './App.scss';
import Login from './pages/Login';
import Home from './pages/Home';
import Search from './pages/Search';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Playlist from './pages/Playlist';
import { testContext } from './contexts';
import { useState, useEffect } from 'react';




function App() {
  
 
 

  const [logedIn, setLogedIn] = useState(false);


  return (
    <testContext.Provider value={{
      logedIn,
      setLogedIn,
  
    }}>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path='home' element={<Home />} />
          <Route path='/playlist' element={<Playlist />} />
          <Route path='/search' element={<Search/>} />
        </Routes>

      </BrowserRouter>
    </testContext.Provider>




  );
}

export default App;
