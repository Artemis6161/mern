import React,{useState} from 'react'

import "./css/profile.css"
import img from "../assets/profile.png"
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import {profileValidation} from "../validation/validate"

import convertToBase64 from '../validation/convert';
const Profile = () => {
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues : {
      username:'',
      age : '',
      mobile: '',
      dateofbirth: ''
    },
    validate : profileValidation,
    
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      values = await Object.assign(values, { profile : file || ''})
      console.log(values)
      
    }
  })
  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }
  return (
    <div class="container">
      <Toaster  reverseOrder={false}></Toaster>
      
 
        <h4 >profile</h4>
        <span>Happy to join you</span>

 <div class="brand-logo">
          {/* <label htmlFor="profile">
          <img src={file || img} alt="avatar" />
          </label>
          <input onChange={onUpload} type="file" id="profile" name="profile"/> */}
            
            </div>
            <div class="inputs">
            <form  onSubmit={formik.handleSubmit}>
            
            <>
            <input {...formik.getFieldProps('username')} type="tex" placeholder='username' />
            </>
       <div>
       <input {...formik.getFieldProps('age')} type="text" placeholder='age' />
       </div>
              <div>
              <input {...formik.getFieldProps('mobile')} type="text" placeholder='mobile' />
              </div>
              
              <input {...formik.getFieldProps(' dateofbirth')} type="date" placeholder='Date Of Birth' />
 
             
              <button type="submit">Update</button>
              <span>Come Back later? <Link  to='/Login'>Log Out</Link></span>
          
         
        </form>
        </div>
        </div>
   
      
  
    

  )
}

export default Profile;

{/* <input  type="radio" name="gender" value="male" checked />
<label>Male</label>

<input  type="radio" name="gender" value="female"/>
<label>Female</label>

<input  type="radio" name="gender" value="" disabled/>
<label>Don't know (Disabled)</label> */}