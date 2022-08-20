import React from 'react';

const User = ({user}) => {
    const {name, age, sex, mobile, issuedid, id, glabel, gname, email, cnumber, address, state, city, country, pincode, occupation, region, marital, blood, nationality } = user;
    return (
<div class="card w-96 bg-base-100 shadow-xl border-2">
  <div class="card-body">
    <h3 className='text-xl font-bold'>Personal Details</h3>
    <p>Name: {name}</p>
    <p>Date of Birth or Age: {age}</p>
    <p>Sex:{sex}</p>
    <p>Mobile: {mobile}</p>
    <p>{issuedid}: {id}</p>
    <h3 className='text-xl font-bold'>Contact Details</h3>
    <p>{glabel}: {gname}</p>
    <p>Email: {email}</p>
    <p>Emergency Contact Number: {cnumber}</p>
    <h3 className='text-xl font-bold'>Address Details</h3>
    <p>Address: {address}</p>
    <p>State: {state}</p>
    <p>City: {city}</p>
    <p>Country: {country}</p>
    <p>Pincode: {pincode}</p>
    <h3 className='text-xl font-bold'>Other Details</h3>
    <p>Occupation: {occupation}</p>
    <p>Religion: {region}</p>
    <p>Marital Status: {marital}</p>
    <p>Blood Group: {blood}</p>
    <p>Nationality: {nationality}</p>
  </div>
</div>
    );
};

export default User;