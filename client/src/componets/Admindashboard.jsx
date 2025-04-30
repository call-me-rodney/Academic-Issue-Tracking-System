import React, { useState,useEffect } from 'react';
import './Admindashboard.css'; 
import axios from 'axios';

function Admindashboard() {
  const [currentContent, setCurrentContent] = useState('issues');
  const [issues, setIssues] = useState([]);
  const [lecturers, setLecturers] = useState([]);
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    if (currentContent === 'issues') {
      axios.get('http://localhost:5000/api/issues')
        .then(res => setIssues(res.data))
        .catch(err => console.error(err));
    } else if (currentContent === 'lecturers') {
      axios.get('http://localhost:5000/api/lecturers')
        .then(res => setLecturers(res.data))
        .catch(err => console.error(err));
    } else if (currentContent === 'students') {
      axios.get('http://localhost:5000/api/students')
        .then(res => setStudents(res.data))
        .catch(err => console.error(err));
    }
  }, [currentContent]);
  

const issuesData = [
  { id: 1, description: "", status: "Pending" },
  { id: 2, description: "", status: "Resolved" },
  { id: 3, description: "", status: "In Progress" }
];

const lecturersData = [
  { id: 1, name: "", subject: "" },
  { id: 2, name: "", subject: "" },
  { id: 3, name: "", subject: "" }
];

const studentsData = [
  { id: 1, name: "", course: "" },
  { id: 2, name: "", course: "" },
  { id: 3, name: "", course: "" }
];

  const renderIssues = () => (
    <div className="content">
      <h2>Issues List</h2>
      <table>
        <thead>
          <tr>
            <th>Issue ID</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {issuesData.map(issue => (
            <tr key={issue.id}>
              <td>{issue.id}</td>
              <td>{issue.description}</td>
              <td>{issue.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderLecturers = () => (
    <div className="content">
      <h2>Lecturers List</h2>
      <table>
        <thead>
          <tr>
            <th>Lecturer ID</th>
            <th>Name</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {lecturersData.map(lecturer => (
            <tr key={lecturer.id}>
              <td>{lecturer.id}</td>
              <td>{lecturer.name}</td>
              <td>{lecturer.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderStudents = () => (
    <div className="content">
      <h2>Students List</h2>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderContent = () => {
    switch (currentContent) {
      case 'lecturers':
        return renderLecturers();
      case 'students':
        return renderStudents();
      default:
        return renderIssues();
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li>
            <button onClick={() => setCurrentContent('issues')}>Issues</button>
          </li>
          <li>
            <button onClick={() => setCurrentContent('lecturers')}>Lecturers</button>
          </li>
          <li>
            <button onClick={() => setCurrentContent('students')}>Students</button>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          <h1>{currentContent.charAt(0).toUpperCase() + currentContent.slice(1)}</h1>
        </div>
        {renderContent()}
      </div>
    </div>
  );
}

export default Admindashboard;
