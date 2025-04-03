"use client"

import { createContext, useContext, useState, useEffect } from "react"
import api from "../services/api"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on component mount
    const token = localStorage.getItem("token")
    if (token) {
      checkAuthStatus(token)
    } else {
      setLoading(false)
    }
  }, [])

  const checkAuthStatus = async (token) => {
    try {
      // Set the token in axios headers
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      // Verify token with backend
      const response = await api.get("/auth/verify")
      setUser(response.data.user)
      setIsAuthenticated(true)
    } catch (error) {
      console.error("Authentication error:", error)
      logout()
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", { email, password })
      const { token, user } = response.data

      // Save token to localStorage
      localStorage.setItem("token", token)

      // Set token in axios headers
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setUser(user)
      setIsAuthenticated(true)
      return { success: true }
    } catch (error) {
      console.error("Login error:", error)
      return {
        success: false,
        message: error.response?.data?.message || "Login failed. Please try again.",
      }
    }
  }

  const register = async (userData) => {
    try {
      const response = await api.post("/auth/register", userData)
      return { success: true, data: response.data }
    } catch (error) {
      console.error("Registration error:", error)
      return {
        success: false,
        message: error.response?.data?.message || "Registration failed. Please try again.",
      }
    }
  }

  const logout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token")

    // Remove token from axios headers
    delete api.defaults.headers.common["Authorization"]

    setUser(null)
    setIsAuthenticated(false)
  }

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

