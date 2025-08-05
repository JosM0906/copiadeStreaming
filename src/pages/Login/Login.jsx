import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='Login'>
      <img src={logo} className='login-logo' alt=""></img>
      <div className="login-form">
        <h1>Iniciar Sesión</h1>
        <form>
          <input type="text" placeholder='Your name'></input>
          <input type="email" placeholder='Email'></input>
          <input type="password" placeholder='Email'></input>
        </form>
      </div>
    </div>
  )
}

export default Login
