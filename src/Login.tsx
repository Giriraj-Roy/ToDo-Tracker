import React from 'react'
import './Login.css'

const Login : React.FC = () => {
  return (
    <div className='login'>
        <div className='login-main'>
            <div className='login-head'>
                Username
                <input type='text' placeholder='Enter Username'/>
            </div>
            <div className='login-head'>
                Email
                <input type='email' placeholder='Enter Email'/>
            </div>
            <div className='login-head'>
                Password
                <input type='password' placeholder='Enter Password'/>
            </div>
            <span className='login-already'>Already a User ?</span>
        </div>
    </div>
  )
}

export default Login
