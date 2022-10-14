import React, { useState, useEffect } from 'react';
import CardTrack from './CardTrack';

const SectionTracks = ({ title, tracks, tracksRecentlyplayed }) => {

    console.log("teste de tracxk",tracks);
   
    return (
        <div className='section'>
            <div className='title-section'>
                <div className='title'>
                    <h1>{title} </h1>
                </div>
                <div className='more'>
                    <span>Voir plus</span>
                </div>
            </div>
            <div className='cardTracks'>

                {
                     tracks&&tracks.slice(0, 12).map((track) => (

                    <CardTrack trackTitle={track.name} image={track.album&&track.album.images[0].url} duration={track.duration_ms}  uri={track.uri}/>))
                }
                {
                     tracksRecentlyplayed&&tracksRecentlyplayed.slice(0, 12).map((track) => (

                        <CardTrack trackTitle={track.track.name} image={track.track.album&&track.track.album.images[0].url} duration={track.track.duration_ms}  uri={track.track.uri}/>))
                }

            </div>

        </div>
    );
};

export default SectionTracks;

























































































