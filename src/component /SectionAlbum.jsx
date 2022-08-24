import React from 'react';
import Card from './Card';
import CardPlaylist from './CardPlaylist';

const SectionAlbum = ({title}) => {
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
            <div className='cards'>
                  
                <CardPlaylist/>
                <CardPlaylist/>
                  
                <CardPlaylist/>

                {/* {TopArtiste.slice(0, 12).map((artist) => (

                    <Card key={artist.id} id={artist.id} name={artist.name} type={artist.type} img={artist.images[0].url}  uri={artist.uri} allDetailArtiste={artist}/>))

                } */}

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

export default SectionAlbum;