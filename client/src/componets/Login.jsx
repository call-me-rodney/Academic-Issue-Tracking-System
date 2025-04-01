import React from 'react'
import './login.css';
import { NavLink } from 'react-router-dom'
import SignUp from './Signup'

const Login = () => {
  return (
    <div className="container">
      <form action="#" className="form">
        <h1>Sign in to your account</h1> 
        <div className="space">
          <label htmlFor="email">Your email</label>
          <input
            className="input-box"
            required
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
          />
        </div>
        <div className="space">
          <label htmlFor="password">Your password</label>
          <input
            className="input-box"
            required
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
          />
        </div>
        <div className="back">
          <div>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <NavLink className="account" to="/forgot-password">
            Forgot password?
          </NavLink>
        </div>
        <div className="submit"> 
          <input type="submit" value="Sign in to account" />
        </div>
        <div>
          Not registered? <NavLink to="/signup">Create an account</NavLink>
        </div>
      </form>
    </div>
  )
}

export default Login
