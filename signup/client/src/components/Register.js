import React,{useState} from 'react'

import "./css/login.css"
import img from "../assets/profile.png"
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import {registerValidation} from "../validation/validate"

import convertToBase64 from '../validation/convert';
const Register = () => {
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues : {
      username:'',
      email : '',
      password: '',
      confirmPassword: ''
    },
    validate : registerValidation,
    
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
      
 <div className='flex-continer'>
        <h4 >Register</h4>
        <span>Happy to join you</span>
<div className="signup_container">
 <div class="brand-logo">
          {/* <label htmlFor="profile">
          <img src={file || img} alt="avatar" />
          </label>
          <input onChange={onUpload} type="file" id="profile" name="profile"/> */}
            
            </div>
            <form  onSubmit={formik.handleSubmit}>
            <div >
            
            <input {...formik.getFieldProps('username')} type="tex" placeholder='username' />
              <input {...formik.getFieldProps('email')} type="email" placeholder='email' />
              <input {...formik.getFieldProps('password')} type="password" placeholder='password' />
              <input {...formik.getFieldProps(' confirmPassword')} type="password" placeholder='confirm password' />
              <button type="submit">Register</button>
           
          </div>
          <div className="">
            <span>Alredy Register? <Link className='text' to='/'>Login Now</Link></span>
          </div>
        </form>
        </div>
      </div>
    </div>

  )
}

export default Register;
