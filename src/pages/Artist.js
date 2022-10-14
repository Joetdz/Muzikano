import React, { useContext, useEffect } from 'react';
import Banner from '../component /Banner';
import LeftSidebar from '../component /LeftSidebar';
import RigthSidebar from '../component /RigthSidebar';
import { testContext } from '../contexts';
import { useState } from 'react';
import SectionTracks from '../component /SectionTracks';
import SectionAlbum from '../component /SectionAlbum';
import SpotifyWebApi from 'spotify-web-api-js';
import LoadingSpin from 'react-loading-spin';


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
        setTopTracks(data.tracks)
        console.log('les data',data.tracks);
      },
       (err)=> {
        console.error(err);
      }
    ).then(
    
    )

  }

  const getArtistAlbums= ()=>{
          spotifyApi.getArtistAlbums(id, "CD").then(
              function (data) {
           
            setAlbums(data.items)
            console.log('les data',data.items)
            
          },
          function (err) {
            console.error(err);
          }
        );
      }
  useEffect(() => {
   
    getArtistTopTracks()
  
    getArtistAlbums()

   
  }, [topTracks])
  
  return (
    <div className="home-page"><LeftSidebar />
      {
        
          <div className="main-section">{loading ? <span className='loader'><LoadingSpin primaryColor="rgba(188, 73, 124, 1)"
          secondaryColor="#333"/></span> :<><Banner img={artistDetail.images&&artistDetail.images[0].url} name={artistDetail.name&&artistDetail.name} followers={artistDetail.followers&&artistDetail.followers.total} follow='abonnés' />  <Banner /></>}
            <div className='sections'>
            {/* {artistDetail.name?<SectionTracks title='Chansons' tracks={topTracks&&topTracks} />:''} */}
              {artistDetail.name?<SectionAlbum title='Albums' albums={topAblum&&topAblum}/>:''}
             
              </div>
          </div>
      }<RigthSidebar />
    </div>
  );
};

export default Artist;