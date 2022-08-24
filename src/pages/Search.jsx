import React, { useContext, useState , useEffect} from 'react';
import Banner from '../component /Banner';
import LeftSidebar from '../component /LeftSidebar';
import RigthSidebar from '../component /RigthSidebar';
import SectionTracks from '../component /SectionTracks';
import { testContext } from '../contexts';
import Section from '../component /Section';


const Search = () => {
 const {resultsTrack , setResulstTrack }=useContext(testContext);
 const { resultsArtist , setResulstArtist}=useContext(testContext)
 const { resultsAlbum , setResulstAlbum}=useContext(testContext)
 const { resultsPlaylist , setResulstPlaylist}=useContext(testContext)
 
    // useEffect(()=>{
    //     setTracks(resultsTrack)
    // }, [resultsTrack])

    return (
        <div className='search-page'>
            <LeftSidebar/>
            <div className="main-section">
            
            <div className="container-results">
                <div className='sections'>
                    { resultsTrack && <SectionTracks title={'Musiques '}  tracks={resultsTrack}/> }
                    {resultsArtist && <Section title={'Artsites'}  TopArtiste={resultsArtist}/>}
                    
                </div>
                </div>

    </div>
            <RigthSidebar />
           
            

            
        </div>
    );
};

export default Search;