import React, { useState, useEffect } from 'react';
import CardTrack from './CardTrack';

const SectionTracks = ({ title, tracks }) => {
    console.log( 'props',tracks);
 
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


                {tracks.slice(0, 12).map((track) => (

                    <CardTrack key={track.id} trackTitle={track.name} image={track.album.images[0].url} duration={track.duration_ms}  uri={track.uri}/>))

                }

                {/* <Card/>
             <Card/>
             <Card/> 
             <Card/>
             <Card/>
             <Card/> */}

            </div>

        </div>
    );
};

export default SectionTracks;

























































































