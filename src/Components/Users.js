import React, { useEffect, useState } from 'react';
import User from './User';

const Users = () => {

    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);


    useEffect( () =>{
        const url = 'https://thawing-crag-43400.herokuapp.com/user'
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            const match = data.filter(d => d.name.toLowerCase().includes(searchText));
            setSearchResult(match);
        } )
    }, [searchText])


    const handleSearchChange = event =>{
        setSearchText(event.target.value)
        
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-8'>User Information</h2>

            <div className='grid place-items-center my-8 mx-60'>
                <input onChange={handleSearchChange} className='border-2 rounded w-full h-12 p-2 ' type="text" name="" id="" placeholder='Search'/>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                searchResult.map(user => <User key={user._id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users

