import { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login/', { email, password });
      const { status, data } = response;

      if (status === 200) {
        // Assuming the response data contains userId and token
        const { access, user: { id, role }, user } = data;
        // Store the token for future requests
        localStorage.setItem('authToken', access);
        localStorage.setItem('userId', id);
        localStorage.setItem("user",user)
        // Redirect to the user's dashboard
        if (role === 'A') {
          navigate(`/admindash/${id}`);
        } else if (role === 'S') {
          navigate(`/studentdash/${id}`);
        } else if (role === 'L') {
          navigate(`/lecturerdash/${id}`);
        }
      } else {
        setError('Authentication failed. Please check your credentials.');
      }
    } catch (error) {
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Sign in to your account</h1>
        {error && <div className="error">{error}</div>}
        <div className="space">
          <label htmlFor="email">Your email</label>
          <input
            className="input-box"
            required
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="submit">
          <button type="submit" onClick={handleSubmit}>Sign in to account</button>
        </div>
        <div>
          Not registered? <NavLink to="/signup">Create an account</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;