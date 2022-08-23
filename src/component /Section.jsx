
import { useContext } from 'react';
import { testContext } from '../contexts';
import Card from './Card';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Section = ({ title, TopArtiste }) => {


    const [topArtisteData, setTopArtisteData] = useState([]);

    useEffect(() => {
        setTopArtisteData({ TopArtiste })
        setTopArtisteData({ TopArtiste })
    }, [])
    console.log(TopArtiste);
    // const {myTopArtiste,  setMyTopArtiste}=useContext(testContext)
    // console.log('props yefh', {myTopArtiste});

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
                {TopArtiste.slice(0, 12).map((artist) => (

                    <Card key={artist.id} id={artist.id} name={artist.name} type={artist.type} img={artist.images[0].url}  uri={artist.uri} allDetailArtiste={artist}/>))

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

export default Section;