

import Card from './Card';
import { useState, useEffect } from 'react';


const Section = ({ title, TopArtiste }) => {


    const [topArtisteData, setTopArtisteData] = useState([]);

    useEffect(() => {
        setTopArtisteData({ TopArtiste })

    }, [])
  
   
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
                {TopArtiste && TopArtiste.slice(0, 12).map((artist) => (
                    artist &&
                    <Card key={artist.id} id={artist.id} name={artist.name} type={artist.type} img={artist && artist.images && artist.images.length > 0 ? artist.images[0].url : ''} uri={artist.uri} allDetailArtiste={artist} />))

                }

               

            </div>

        </div>
    );
};

export default Section;