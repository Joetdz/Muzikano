import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
const Form = () => {
    return (
        <div className='form'>
           
            <form action="">
                <AiOutlineSearch/>
                <input type="text"  placeholder="Cherchez artistes, chansons , album "/>
                <input type="submit" value="cherchez"></input>
            </form>
        
        </div>
    );
};

export default Form;