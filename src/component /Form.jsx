import React, { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { testContext } from '../contexts';
const Form = () => {
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(window.localStorage.getItem('token'));
  const [search, setSearch] = useState()
  const navigate = useNavigate()

  const { resultsTrack, setResulstTrack } = useContext(testContext);
  const { resultsArtist, setResulstArtist } = useContext(testContext)
  const { resultsAlbum, setResulstAlbum } = useContext(testContext)
  const { resultsPlaylist, setResulstPlaylist } = useContext(testContext)

  const searchArtist = () => {
    spotifyApi.searchArtists(`${search}`).then(
      function (data) {

        console.log('Search artists by ' , search, data.artists.items);
        setResulstArtist(data.artists.items)
      },
      function (err) {
        console.error(err);
      }
    );
  }

  const searchTrack = () => {
    spotifyApi.searchTracks(`${search}`).then(

      function (data) {
        console.log('Search by  trach "Love"', data.tracks.items);
        setResulstTrack(data.tracks.items)
      },
      function (err) {
        console.error(err);
      }
    );
  }

  useEffect(() => {
    searchArtist()
    searchTrack()


  }, [search])
  console.log(search);
  return (
    <div className='form'>

      <form action="">
        <AiOutlineSearch />
        <input type="text" placeholder="Cherchez artistes, chansons , album " onChange={(e) => {
          setSearch(e.target.value)
          window.location.pathname != '/search' && navigate('/search')
        }} />
        {/* <input type="submit" value="cherchez"></input> */}
      </form>

    </div>
  );
};

export default Form;