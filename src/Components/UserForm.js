import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
// import { useHistory } from "react-router-dom";
// import axios from 'axios'

const UserForm = () => {
    // let history = useHistory();

    const registrationForm= useFormik({

        initialValues: {
            name: '',
            age: '',
            sex: '',
            mobile: '',
            issuedid:'',
            id:'',
            glabel:'',
            gname:'',
            email:'',
            cnumber:'',
            address:'',
            state:'',
            city:'',
            country:'',
            pincode:'',
            occupation:'',
            region:'',
            marital:'',
            blood:'',
            nationality:'',

          },

          onSubmit:values=>{

            fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values)
        })

        .then(res => res.json())
        .then(data =>{
            if(data){
                toast('Thank you for successfully add a product')
                
            }
        })


        // const AddCompany= e=> {
        //     e.preventDefault();
        //     axios.post('http://localhost:5000/user',values)
        //     .then(res => {
        //      if(res.data.status_code === 200){
        //       //setUser(res.data.msg)
        //       history.push("");
        //      }
             
        //    })
        //    .catch(err => {
        //     toast.error("Couldnot post data")
        //   }) 
        //    }

          }

          

    })
    return (
        <div className='items-left'>
            <h3 className='text-left ml-12 font-bold mt-4'>Personal Details</h3>
            <form onSubmit={registrationForm}>
       

        <div className='flex justify-around mt-4'>

        <div><label htmlFor="name">Name<span className='text-red-500'>*</span></label>
       <input className='border-2 rounded ml-4 w-80' 
       type="text" 
       name="name" 
       id="" 
       placeholder='Enter Name' 
       onChange={registrationForm.handleChange}
       onBlur={registrationForm.handleBlur}
       value={registrationForm.values.name}
       
       /></div>

        <div><label htmlFor="age">Date of birth or Age<span className='text-red-500'>*</span></label>
       <input className='border-2 rounded ml-4 w-64' 
       type="text" 
       name="age" 
       id="" 
       placeholder='DD/MM/YYYY or Age in Years'
       onChange={registrationForm.handleChange}
       onBlur={registrationForm.handleBlur}
       value={registrationForm.values.age}
       /></div>

        <div>
        <label htmlFor="sex">Sex<span className='text-red-500'>*</span></label>
        <select 
        name='sex' 
        id='' 
        onChange={registrationForm.handleChange}
        onBlur={registrationForm.handleBlur}
        value={registrationForm.values.sex}
        class=" w-48 ml-4 border-2 rounded">
            <option disabled selected>Enter Sex</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
        </select>
        </div>
        </div>
        <div className='flex justify-around mt-4'>

        <div className='ml-2'><label htmlFor="mobile">Mobile</label>
       <input className='border-2 rounded ml-4 w-80' 
       type="text" 
       name="mobile" 
       id="" 
       placeholder='Enter Number'
       onChange={registrationForm.handleChange}
       onBlur={registrationForm.handleBlur}
       value={registrationForm.values.mobile}

       /></div>

        <div className='flex mr-24'>
        <div>
        <label htmlFor="issuedid">Govt Issued ID</label>
        <select 
        name='issuedid'
         id=''
         onChange={registrationForm.handleChange}
         onBlur={registrationForm.handleBlur}
         value={registrationForm.values.issuedid}
          class=" w-64 border-2 rounded ml-4">
            <option disabled selected>ID Type</option>
            <option>NID</option>
            <option>SID</option>
            <option>SSID</option>
        </select>
        </div>
        <div>
        <input className='border-2 rounded ml-4 w-80' 
        type="text" 
        name="id" id="" 
        onChange={registrationForm.handleChange}
        onBlur={registrationForm.handleBlur}
        value={registrationForm.values.id}
        placeholder='Enter Govt ID' />
        </div>
        </div>
        </div>

        <div className=''>
            <h3 className='font-bold text-left ml-12 mt-4'>Contact Details</h3>

            <div className='flex items-center my-4'>

            <div className='flex items-center ml-12'>
        <div>
        <label htmlFor="glabel">Guardian Details</label>
        <select 
        name='glabel' 
        id='' 
        onChange={registrationForm.handleChange}
        onBlur={registrationForm.handleBlur}
        value={registrationForm.values.glabel}
        class=" w-40 border-2 rounded ml-4">
            <option disabled selected>Enter Lavel</option>
            <option>Father</option>
            <option>Mother</option>
            <option>Brother</option>
        </select>
        </div>
        <div>
        <input className='border-2 rounded ml-4 w-40' 
        type="text" 
        name="gname" 
        id="" 
        onChange={registrationForm.handleChange}
        onBlur={registrationForm.handleBlur}
        value={registrationForm.values.gname}
        placeholder='Enter Guardian Name' />
        </div>
        </div>

            <div><label className='ml-8' htmlFor="name">Email</label>
       <input className='border-2 rounded ml-4 w-64' 
       type="text" 
       name="email" 
       id="" 
       placeholder='Enter Email'
       onChange={registrationForm.handleChange}
       onBlur={registrationForm.handleBlur}
       value={registrationForm.values.email}
        /></div>

        <div><label className='ml-8' htmlFor="cnumber">Emergency Contact Number</label>
       <input className='border-2 rounded ml-4 w-48' type="text"
        name="cnumber"
        id=""
        placeholder='Enter Emergency No'
        onChange={registrationForm.handleChange}
        onBlur={registrationForm.handleBlur}
        value={registrationForm.values.cnumber}
           /></div>

            </div>
        </div>


        <div>
        <h3 className='text-left ml-12 font-bold mt-4'>Address Details</h3>

        <div className='flex justify-around mt-4'>
        <div className='mr-16'><label htmlFor="address">Address</label>
       <input className='border-2 rounded ml-4 w-80' type="text" name="address" id="" placeholder='Enter Address' /></div>

        <div>
        <label htmlFor="state">State</label>
        <select 
        name='state' 
        id='' 
        onChange={registrationForm.handleChange}
        onBlur={registrationForm.handleBlur}
        value={registrationForm.values.state}
        class=" w-64 ml-4 border-2 rounded">
            <option disabled selected>Enter State</option>
            <option>Delhi</option>
            <option>Chennai</option>
            <option>Kalkata</option>
            <option>Pune</option>
            <option>Bengaluru</option>
        </select>
        </div>

        <div>
        <label htmlFor="city">City</label>
        <select 
        name='city'
        id='' 
        onChange={registrationForm.handleChange}
        onBlur={registrationForm.handleBlur}
        value={registrationForm.values.city}
        class=" w-64 ml-4 border-2 rounded">
            <option disabled selected>Enter City/Town/Village</option>
            <option>Delhi</option>
            <option>Kalkata</option>
            <option>Gujrat</option>
        </select>
        </div>

        </div>

        <div className='flex ml-12 my-4'>
            
        <div>
        <label htmlFor="country">Country</label>
        <select 
        name='country' 
        id='' 
        onChange={registrationForm.handleChange}
        onBlur={registrationForm.handleBlur}
        value={registrationForm.values.country}

        class=" w-64 ml-4 border-2 rounded">
            <option disabled selected>India</option>
            <option>Bangladesh</option>
            <option>Pakistan</option>
            <option>China</option>
            <option>UAE</option>
            <option>USA</option>
        </select>
        </div>

        

        <div className='ml-48'><label htmlFor="pincode">Pincode</label>
       <input className='border-2 rounded ml-4 w-48' 
       type="text" 
       name="pincode" 
       id="" 
       placeholder='Enter Pincode'
       onChange={registrationForm.handleChange}
       onBlur={registrationForm.handleBlur}
       value={registrationForm.values.pincode}
        /></div>

        </div>

        </div>


        <div className='my-4'>
            <h3 className='font-bold text-left ml-12 my-4'>Other Details</h3>
            <div className='flex justify-around my-4'>
            
            
        <div><label className='ml-4' htmlFor="occupation">Occupation</label>
       <input className='border-2 rounded ml-4 w-64' 
       type="text" 
       name="occupation" 
       id="" 
       placeholder='Enter Occupation'
       onChange={registrationForm.handleChange}
       onBlur={registrationForm.handleBlur}
       value={registrationForm.values.occupation}
        /></div>

            <div className=''>
        <label htmlFor="region">Region</label>
        <select 
        name='region' 
        id='' 
        onChange={registrationForm.handleChange}
        onBlur={registrationForm.handleBlur}
        value={registrationForm.values.region}
        class=" w-64 ml-4 border-2 rounded">
            <option disabled selected>Enter Region</option>
            <option>Islam</option>
            <option>Hindu</option>
            <option>Christian</option>

        </select>
        </div>
            <div className=''>
        <label htmlFor="marital">Marital Status</label>
        <select 
        name='marital' 
        id='' 
        onChange={registrationForm.handleChange}
        onBlur={registrationForm.handleBlur}
        value={registrationForm.values.marital}
        class=" w-64 ml-4 border-2 rounded">
            <option disabled selected>Enter Marital Status</option>
            <option>Married</option>
            <option>Unmarried</option>
            
        </select>
        </div>
            <div className=''>
        <label htmlFor="blood">Blood Group</label>
        <select 
        name='blood' 
        id='' 
        onChange={registrationForm.handleChange}
        onBlur={registrationForm.handleBlur}
        value={registrationForm.values.blood}
        class=" w-32 ml-4 border-2 rounded">
            <option disabled selected>Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>O+</option>
            <option>O-</option>
        </select>
        </div>

        
            </div>

            
            <div className='flex justify-start ml-12 my-4'>
        <div>
        <label htmlFor="nationality">Nationality</label>
        <select 
        name='nationality' 
        id='' 
        onChange={registrationForm.handleChange}
        onBlur={registrationForm.handleBlur}
        value={registrationForm.values.nationality}
        class=" w-64 ml-4 border-2 rounded">
            <option disabled selected>India</option>
            <option>UK</option>
            <option>Bangladesh</option>
            <option>Pakistan</option>
            <option>UAE</option>
            <option>USA</option>
        </select>
        </div>
        </div>
            
        </div>

       <a className='btn bg-white text-red-500 border border-red-500 ml-80'>Cancel</a>
       <button className='bg-[#2F7D31] text-white btn ml-96' type="submit">Submit</button>
     </form>
        </div>
    );
};

export default UserForm