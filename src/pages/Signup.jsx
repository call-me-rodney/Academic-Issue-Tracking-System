import {useState} from 'react';
import './Signup.css';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from "axios"

const SignUp = () => {
  const [user, setUser] = useState({
    first_name: "",
    unique_number:"",
    last_name:"",
    email: "",
    password: "",
    password2:"",
    role: "",
    dept:"",
  })
  const [error,setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("https://aits-backend-serve-6cfc52717a28.herokuapp.com/api/register/", user)
      const { status, data } = response;
      
      if (status === 200) {
        const { access, user: { unique_number, role },user} = data;
        localStorage.setItem('authToken', access);
        localStorage.setItem('userId', unique_number);
        localStorage.setItem('user', user);
        alert("Signup was successful")
        //redirect to respective dashboard based on role
        if (role === "S"){
          navigate(`studentdash/${unique_number}`)
        }else if(role === "A"){
          navigate(`admindash/${unique_number}`)
        }else if(role === "L"){
          navigate(`lecturerdash/${unique_number}`)
        }

      } else {
        console.log(data)
        setError(data.message)
      }
    } catch (err) {
      setError(err)
      console.log(err)
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Create an account</h1>
        {error && <div className="error">{error}</div>}
        <div className="box">
          <div >
            <label htmlFor="firstName">First name</label>
            <input
              className="input-box"
              required
              type="text"
              placeholder="Enter your first name"
              name="first_name"
              id="first_name"
              value={user.first_name}
              onChange={(e) => setUser({...user, first_name: e.target.value})}
            />
          </div>
          <div >
            <label htmlFor="lastName">Last name</label>
            <input
              className="input-box"
              required
              type="text"
              placeholder="Enter your last name"
              name="last_name"
              id="last_name"
              value={user.last_name}
              onChange={(e) => setUser({...user, last_name: e.target.value})}
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="unique_number">Your unique number</label>
          <input
            className="input-box"
            required
            type="unique_number"
            placeholder="Enter your unique number"
            name="unique_number"
            id="unique_number"
            value={user.unique_number}
            onChange={(e) => setUser({...user, unique_number: e.target.value})}
          />
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
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
          />
        </div>
        <div className="input">
          <label htmlFor="Role">Role</label>
          <select value={user.role}onChange={(e) => setUser({...user, role: e.target.value})} required>
            <option value="">Select role</option>
            <option value="S">Student</option>
            <option value="A">Admin</option>
            <option value="L">Lecturer</option>
          </select>
        </div>
        <div className="input">
          <label htmlFor="Department">Department</label>
          <input
            className="input-box"
            required
            type="text"
            placeholder="Enter your current department"
            name="dept"
            id="dept"
            value={user.dept}
            onChange={(e) => setUser({...user, dept: e.target.value})}
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
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
          />
        </div>
        <div className="input">
          <label htmlFor="password2">Confirm password</label>
          <input
            className="input-box"
            required
            type="password"
            placeholder="Confirm your password"
            name="password2"
            id="password2"
            value={user.password2}
            onChange={(e) => setUser({...user, password2: e.target.value})}
          />
        </div>
        <div className="button">
          <button type="submit" onClick={handleSubmit}>Register</button>
        </div>
        <div className="input">
          Already have an account? <NavLink to="/login">Login here</NavLink>
        </div>
      </form>
    </div>
  )
}

export default SignUp
