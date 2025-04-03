"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  LucideGraduationCap,
  LucideBookUser,
  LucideContact,
  LucideCalendar,
  LucideFolderHeart,
  LucideMenu,
  LucideSearch,
  LucideLogOut,
} from "lucide-react"
import { useAuth } from "../context/AuthContext"
import "../css/Dashboard.css"

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <div>
      <div className={`sidebar ${!sidebarOpen ? "collapsed" : ""}`}>
        <header>Student Dashboard</header>
        <ul>
          <li onClick={() => navigate("/course-details")}>
            <LucideGraduationCap className="sidebar-icon" />
            <span>Courses</span>
          </li>
          <li onClick={() => navigate("/results")}>
            <LucideBookUser className="sidebar-icon" />
            <span>My Issues (Results)</span>
          </li>
          <li onClick={() => navigate("/submit-issue")}>
            <LucideContact className="sidebar-icon" />
            <span>Submit Issues</span>
          </li>
          <li>
            <LucideCalendar className="sidebar-icon" />
            <span>Academic Calendar</span>
          </li>
          <li onClick={() => navigate("/profile")}>
            <LucideFolderHeart className="sidebar-icon" />
            <span>My Profile</span>
          </li>
          <li onClick={handleLogout} className="logout-item">
            <LucideLogOut className="sidebar-icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <section className={`home-section ${!sidebarOpen ? "expanded" : ""}`}>
        <nav>
          <div className="sidebar-button">
            <LucideMenu onClick={toggleSidebar} className="menu-icon" />
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <LucideSearch className="search-icon" />
          </div>
          <div className="user-info">
            <span>Welcome, {user?.firstName || "User"}</span>
          </div>
        </nav>
        <div className="dashboard-content">
          <h2>Welcome to your Student Portal</h2>
          <p>Access all your academic information and services from this dashboard.</p>

          <div className="quick-links">
            <div className="quick-link-card" onClick={() => navigate("/course-details")}>
              <LucideGraduationCap size={40} />
              <h3>Courses</h3>
              <p>View your enrolled courses</p>
            </div>
            <div className="quick-link-card" onClick={() => navigate("/results")}>
              <LucideBookUser size={40} />
              <h3>Results</h3>
              <p>Check your academic results</p>
            </div>
            <div className="quick-link-card" onClick={() => navigate("/submit-issue")}>
              <LucideContact size={40} />
              <h3>Issues</h3>
              <p>Submit academic issues</p>
            </div>
            <div className="quick-link-card" onClick={() => navigate("/profile")}>
              <LucideFolderHeart size={40} />
              <h3>Profile</h3>
              <p>View and update your profile</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard

