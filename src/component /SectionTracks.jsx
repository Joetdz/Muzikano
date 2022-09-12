import React, { useState, useEffect } from 'react';
import CardTrack from './CardTrack';

const SectionTracks = ({ title, tracks, tracksRecentlyplayed }) => {
    console.log( 'liste des track',tracks);
 
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
                     tracks&& tracks.slice(0, 12).map((track) => (

                    <CardTrack key={track.id} trackTitle={track.name} image={track.album&&track.album.images[0].url} duration={track.duration_ms}  uri={track.uri}/>))
                }
                {
                     tracksRecentlyplayed&&tracksRecentlyplayed.slice(0, 12).map((track) => (

                        <CardTrack key={track.track.id} trackTitle={track.track.name} image={track.track.album&&track.track.album.images[0].url} duration={track.track.duration_ms}  uri={track.track.uri}/>))
                }

            </div>

        </div>
    );
};

export default SectionTracks;

























































































