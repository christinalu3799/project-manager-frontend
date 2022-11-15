import React from 'react'
import '../stylesheets/Register.css'
import { Link } from 'react-router-dom'

const RegisterUser = (props) => {
  return (
    <div className='register'>
        <h1>Register</h1>
        <form onSubmit={props.register} className='register-form'>
            <input type='text' id='username' placeholder='Username' className='register-input'/>
            <input type='text' id='email' placeholder='Email' className='register-input'/>
            <input type='password' id='password' placeholder='Password' className='register-input'/>
            {props.registerSuccess === false ? <p>Oops! A user with that email already exists.</p> : console.log('registered successfully!')}
            <input type='submit' value='Sign Up' className='register-submit-btn'/>

            <p>Already have an account?</p>
            <Link to='/login'>Click here to Login</Link>
        </form>
    </div>
  )
}

export default RegisterUser