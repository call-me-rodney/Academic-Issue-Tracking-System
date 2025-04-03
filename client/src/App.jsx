import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import Students_profile from "./Students_profile"
import Students_results from "./Students_results"
import Students_account from "./Students_account"
import Lecturers_acoount from "./Lecturers_acoount"
import Course_details from "./Course_details"
import IssueSubmit from "./IssueSubmit"
import ProtectedRoute from "./components/ProtectedRoute"
import "./App.css"

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          
            <Dashboard />
          
        }
      />
      <Route
        path="/profile"
        element={
       
            <Students_profile />
         
        }
      />
      <Route
        path="/results"
        element={
          
            <Students_results />
        
        }
      />
      <Route
        path="/student-account"
        element={
          
            <Students_account />
          
        }
      />
      <Route
        path="/lecturer-account"
        element={
         
            <Lecturers_acoount />
         
        }
      />
      <Route
        path="/course-details"
        element={
          
            <Course_details />
        }
      />
      <Route
        path="/submit-issue"
        element={
          
            <IssueSubmit />
        }
      />
    </Routes>
  )
}

export default App

