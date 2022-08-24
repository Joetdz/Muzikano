import React, { useContext, useEffect } from 'react';
import Banner from '../component /Banner';
import Form from '../component /Form';
import LeftSidebar from '../component /LeftSidebar';
import RigthSidebar from '../component /RigthSidebar';
import { testContext } from '../contexts';
import { useState } from 'react';
import SectionTracks from '../component /SectionTracks';
import SectionAlbum from '../component /SectionAlbum';
import SpotifyWebApi from 'spotify-web-api-js';


const Artist = () => {
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(window.localStorage.getItem('token'));
  const { artistDetail, setArtistDetail } = useContext(testContext)
  const id = artistDetail.id
  const [topTracks, setTopTracks] = useState({})
  const [topAblum, setAlbums] = useState([])
  


  const [loading, setLoading] = useState(true);





  const getArtistTopTracks = () => {
    spotifyApi.getArtistTopTracks(id, "CD").then(
       (data)=> {
        console.log('ArtistTracks fetching ', data);
        setTopTracks(data.tracks)
       
      },
       (err)=> {
        console.error(err);
      }
    ).then(() => setLoading(false)
    
    )

  }

  const getArtistAlbums= ()=>{
          spotifyApi.getArtistAlbums(id, "CD").then(
              function (data) {
            console.log('Artist albums', data.items);
            setAlbums(data.items)
            
          },
          function (err) {
            console.error(err);
          }
        );
      }
  useEffect(() => {
    getArtistTopTracks()
    

    getArtistAlbums()

   
  }, [])
  console.log('modify  State tracklist  ', topTracks);
  return (
    <div className="home-page"><LeftSidebar />
      {
        loading ? <div>Loading...</div> : 
          <div className="main-section">{artistDetail ? <Banner img={artistDetail.images[0].url} name={artistDetail.name} followers={artistDetail.followers.total} follow='abonnés' /> : <Banner />}
            <div className='sections'>
              <SectionTracks title='Chansons' tracks={topTracks} />
              <SectionAlbum title='Albums' albums={topAblum}/>
              {/* <SectionAlbum title='Playlists' albums={topAblum}/> */}
              </div>
          </div>
      }<RigthSidebar />
    </div>
  );
};

export default Artist;