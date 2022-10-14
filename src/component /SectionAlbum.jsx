import React from 'react';
import Card from './Card';
import CardPlaylist from './CardPlaylist';

const SectionAlbum = ({title , albums}) => {
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
                  { albums.map((album)=>( 
                     <CardPlaylist key={album.id} name={album.name}  type={album.album_group} image={album.images[0].url} uri={album.uri}/>
                  ))}
              
               

            
            </div>

        </div>
    );
};

export default SectionAlbum;