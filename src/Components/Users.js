import React, { useEffect, useState } from 'react';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect( () =>{
        const url = 'https://thawing-crag-43400.herokuapp.com/user'
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [users])
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-8'>User Information</h2>

            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                users.map(user => <User key={user._id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users

