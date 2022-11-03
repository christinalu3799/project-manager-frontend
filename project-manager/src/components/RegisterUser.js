import React from 'react'
import '../stylesheets/Register.css'

const RegisterUser = (props) => {
  return (
    <div className='register'>
        <h1>Register New User</h1>
        <form onSubmit={props.register} className='register-form'>
            <input type='text' id='username' placeholder='Username' className='register-input'/>
            <input type='text' id='email' placeholder='Email' className='register-input'/>
            <input type='text' id='password' placeholder='Password' className='register-input'/>
            <input type='submit' value='Sign Up' className='register-submit-btn'/>
        </form>
    </div>
  )
}

export default RegisterUser