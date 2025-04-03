import React from 'react';
import './SignUp.css';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="container">
      <form action="#" className="form">
        <h1>Create an account</h1>
        <div className="box">
          <div className="input">
            <label htmlFor="firstName">First name</label>
            <input
              className="input-box"
              required
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              id="firstName"
            />
          </div>
          <div className="input">
            <label htmlFor="lastName">Last name</label>
            <input
              className="input-box"
              required
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              id="lastName"
            />
          </div>
        </div>
        <div className="input">
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
        <div className="input">
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
        <div className="input">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            className="input-box"
            required
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            id="confirmPassword"
          />
        </div>
        <div className="input">
          <input className="input-box-1" type="submit" value="Create account" />
        </div>
        <div className="input">
          Already have an account? <NavLink to="/login">Login here</NavLink>
        </div>
      </form>
    </div>
  )
}

export default SignUp
