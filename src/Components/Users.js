import React, { useEffect, useState } from 'react';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect( () =>{
        const url = 'http://localhost:5000/user'
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-4'>User Information</h2>

            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {
                users.map(user => <User key={user._id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;