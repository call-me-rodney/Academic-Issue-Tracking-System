"use client"

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import "../Signup.css"

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const { register } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setLoading(true)

    try {
      const result = await register(formData)
      if (result.success) {
        navigate("/")
      } else {
        setError(result.message)
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Create an account</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="box">
          <div className="input">
            <label htmlFor="firstName">First name</label>
            <input
              className="input-box"
              required
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
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
              value={formData.lastName}
              onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
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
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="role">Select Role</label>
          <select className="dropdown" name="role" value={formData.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="lecturer">Lecturer</option>
            <option value="administrator">Administrator</option>
            <option value="academic_register">Academic Register</option>
          </select>
        </div>
        <div className="input">
          <button className="input-box-1" type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </button>
        </div>
        <div className="input">
          Already have an account?{" "}
          <Link className="log" to="/">
            Login here
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Signup

