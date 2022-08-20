
import { useContext } from 'react';
import { testContext } from '../contexts';
import Card from './Card';

const Section = ({title, Artist}) => {

    const {myTopArtiste,  setMyTopArtiste}=useContext(testContext)
    console.log(myTopArtiste);
    return (
        <div className='section'>
            <div className='title-section'>
                <div className='title'>
                   <h1>{title}</h1>
                </div>
                <div className='more'>
                    <span>Voir plus</span>
                </div>
            </div>
            <div className='cards'>
                { myTopArtiste.slice(0,12).map((artist)=>(
                    <Card  key = { artist.id} name={artist.name}  type={artist.type} img={artist.images[0].url}/>))
                    
                } 
            
             {/* <Card/>
             <Card/>
             <Card/> 
             <Card/>
             <Card/>
             <Card/> */}
             <Card/>
            </div>
            
        </div>
    );
};

export default Section;