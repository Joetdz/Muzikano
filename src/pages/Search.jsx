import React from 'react';
import Banner from '../component /Banner';
import LeftSidebar from '../component /LeftSidebar';
import RigthSidebar from '../component /RigthSidebar';

const Search = () => {
    return (
        <div className='search-page'>
            <LeftSidebar/>
            <Banner />
            <RigthSidebar />
            
        </div>
    );
};

export default Search;