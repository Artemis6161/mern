import React from 'react'

import "./css/login.css"
import img from "../assets/profile.png"
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import {loginValidation} from "../validation/validate"

import convertToBase64 from '../validation/convert';
const Login = () => {
 
  const formik = useFormik({
    initialValues : {
     
      email : '',
      password: '',
      
    },
    validate : loginValidation,
    
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      
      console.log(values)
      
    }
  })
  
  return (
    
      

    <div class="container">
     <Toaster  reverseOrder={false}></Toaster>
     
        <h4 >Login</h4>
        <span>Happy to join you</span>
      <div class="brand-logo">
      {/* <img src={ img} alt="avatar" /> */}
      </div>
     
      <div class="inputs">
      <form  onSubmit={formik.handleSubmit}>
        <label>EMAIL</label>
        <input {...formik.getFieldProps('email')} type="email" placeholder='email' />
        <label>PASSWORD</label>
        <input {...formik.getFieldProps('password')} type="password" placeholder='password' />
       
        <button type="submit">LOGIN</button>
        <span>Not a Member? <Link  to='/register'>Register Now</Link></span>
        </form>
      </div>
   
    </div>
        
      )
    }

export default Login;

