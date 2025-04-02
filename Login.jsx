import React from 'react'
import "./Login.css"
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className="container">
      <form action="#" className="form">
      <h1>Sign in to your account</h1> 
        <div className="space">
        <label for="email">Your email</label>
        <input className="input-box" required type="email" placeholder="Enter your email" name="email"/>
        </div>
        <div className="space">
        <label for="password">Your password</label>
        <input className="input-box" required type="password" placeholder="Enter your password" name="password"/>
        </div>
        <div  className="back">
          <div>
        <input type="checkbox"/>Remember me
        </div>
        <a className="account" href="Forgot Password.jsx">Forgot password?</a>
        </div>
        <div className="submit">
        <input  type="submit" value="Sign in to account"/><NavLink to='/dashboard'></NavLink>
        </div>
        <div >
        Not registered? <NavLink to='/signup'>Create an account</NavLink>
      </div>
      </form>
    </div>
  )
}

export default Login