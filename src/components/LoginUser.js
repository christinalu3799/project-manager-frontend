import React from 'react'
import '../stylesheets/Register.css'

const LoginUser = (props) => {
  return (
    <div className='register'>
        <h1>Login</h1>
        <form onSubmit={props.login} className='register-form'>
            <input type='text' id='username' placeholder='Username' className='register-input'/>
            <input type='text' id='email' placeholder='Email' className='register-input'/>
            <input type='password' id='password' placeholder='Password' className='register-input'/>
            {/* show user error message if login credentials are wrong */}
            {props.loginSuccess === false ? <p>Oops! Please try again.</p> : null}
            <input type='submit' value='Log In' className='register-submit-btn'/>
        </form>
    </div>
  )
}

export default LoginUser