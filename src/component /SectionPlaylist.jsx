import React from 'react';
import CardPlaylist from './CardPlaylist';

const SectionPlaylist = ({title , playlists}) => {
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
              { playlists.map((playlist)=>( 
                 <CardPlaylist key={playlist.id} name={playlist.name}  uri={playlist.uri} image={playlist.images[0]?playlist.images[0].url:""}/>
              ))}
          
           

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

export default SectionPlaylist;