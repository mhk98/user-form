import React from 'react';
import { Link } from 'react-router-dom';
import registration  from '../image/registration.png'

const Cancel = () => {
    return (
        <div>
            <img className='h-half w-full' src={registration} alt="registration"  />
            <Link to='/registration' className='bg-[#74EAF8] btn w-full text-red-500 border-none font-bold text-2xl rounded-none'>Click Here For Go User Registration Form</Link>
        </div>
    );
};

export default Cancel