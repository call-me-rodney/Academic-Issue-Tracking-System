"use client"

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import "../Login.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const result = await login(email, password)
      if (result.success) {
        navigate("/dashboard")
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
        <h1>Sign in to your account</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="space">
          <label htmlFor="email">Your email</label>
          <input
            className="input-box"
            required
            type="email"
            placeholder="Enter your email"
            name="email"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="back">
          <div>
            <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
            Remember me
          </div>
          <Link className="account" to="/forgot-password">
            Forgot password?
          </Link>
        </div>
        <button type="submit" className="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in to account"}
        </button>
        <div>
          Not registered?{" "}
          <Link className="account" to="/signup">
            Create an account
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login

