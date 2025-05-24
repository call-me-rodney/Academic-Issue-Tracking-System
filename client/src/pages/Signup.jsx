import {useState} from 'react';
import './SignUp.css';
import { useNavigate, NavLink } from 'react-router-dom';

const SignUp = () => {
  const [user, setUser] = useState({
    fname: "",
    lname:"",
    email: "",
    password: "",
    confirmPassword:"",
    role: "",
    dept:"",
  })
  const [error,setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:8000/api/register", user)
      const { status, data } = response;
      
      if (status === 200) {
        const { access, user: { id, role },user} = data;
        localStorage.setItem('authToken', access);
        localStorage.setItem('userId', id);
        localStorage.setItem('user', user);
        alert("Signup was successful")
        //redirect to respective dashboard based on role
        if (role === "S"){
          navigate(`studentdash/${id}`)
        }else if(role === "A"){
          navigate(`admindash/${id}`)
        }else if(role === "L"){
          navigate(`lecturerdash/${id}`)
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
          <div className="input">
            <label htmlFor="firstName">First name</label>
            <input
              className="input-box"
              required
              type="text"
              placeholder="Enter your first name"
              name="fname"
              id="fname"
              value={user.fname}
              onChange={(e) => setUser({...user, fname: e.target.value})}
            />
          </div>
          <div className="input">
            <label htmlFor="lastName">Last name</label>
            <input
              className="input-box"
              required
              type="text"
              placeholder="Enter your last name"
              name="lname"
              id="lname"
              value={user.lname}
              onChange={(e) => setUser({...user, lname: e.target.value})}
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
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
          />
        </div>
        <div className="input">
          <label htmlFor="Role">Role</label>
          <select value={user.role}onChange={(e) => setUser({...user, role: e.target.value})} required>
            <option value="">Select role</option>
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
            <option value="Lecturer">Lecturer</option>
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
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            className="input-box"
            required
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            id="confirmPassword"
            value={user.confirmPassword}
            onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
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
