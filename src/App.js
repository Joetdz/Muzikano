import logo from './logo.svg';
import './App.scss';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Playlist from './pages/Playlist';



function App() {
 
 
  return (
    <BrowserRouter>
  <Routes>
  
  <Route path="/" element={<Login/>} />
  <Route path='home' element = {<Home/> } />
  <Route path= '/playlist' element = {<Playlist/>} />

  </Routes>

  </BrowserRouter>

    

   
  );
}

export default App;
