import React from 'react'
import '../stylesheets/Register.css'
import { Link } from 'react-router-dom'


const LoginUser = (props) => {
  return (
    <div className='register animate__animated animate__fadeIn'>
        {/* <div> */}
            <h1>Login</h1>
            <form onSubmit={props.login} className='register-form'>
                {/* <input type='text' id='username' placeholder='Username' className='register-input'/> */}
                <input type='text' id='email' placeholder='Email' className='register-input'/>
                <input type='password' id='password' placeholder='Password' className='register-input'/>
                {/* show user error message if login credentials are wrong */}
                {props.loginSuccess === false ? <p>Oops! Please try again.</p> : null}
                <input type='submit' value='Log In' className='register-submit-btn'/>

                <p>Don't have an account?</p>
                <Link to='/register'>Click here to Register</Link>
            </form>
        {/* </div> */}
    </div>
  )
}

export default LoginUser