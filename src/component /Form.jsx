import React, { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {useState} from 'react';
const Form = () => {

    const [search , setSearch]=useState()
    useEffect(()=>{

    },[])
    console.log(search);
    return (
        <div className='form'>
           
            <form action="">
                <AiOutlineSearch/>
                <input type="text"  placeholder="Cherchez artistes, chansons , album "  onChange={(e)=>{
                            setSearch(e.target.value)
                        }}/>
                <input type="submit" value="cherchez"></input>
            </form>
        
        </div>
    ); 
};

export default Form;