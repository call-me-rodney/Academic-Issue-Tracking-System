import React from 'react'
import { LucideAngry, LucideBaby, LucideBook, LucideBookImage, LucideBookUser, LucideCalendar, LucideContact, LucideContactRound, LucideFolderHeart, LucideGraduationCap, LucideLibrary, LucideSearch, LucideSprout, LucideTableProperties } from 'lucide-react'
import { LucideMenu } from 'lucide-react'
import './Dashboard.css'
import {Navlink} from 'react-router-dom' 

const sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <header>Student Dashboard</header>
        <ul>
          <li><LucideGraduationCap className='search-icon'/><i/>Course</li>
          <li><LucideBookUser className='search-icon'/><i/>My Result</li>
          <li><LucideContact className='search-icon'/><i/>My Issues</li>
          <li><LucideCalendar className='search-icon'/><i/>Academic Calender</li>
          <li><LucideFolderHeart className='search-icon'/><i/>My Profile</li>
          <li></li>
        </ul>
      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx-menu"><LucideMenu/></i>
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder='search.....' />
            <i className="bx-search"><LucideSearch/></i>
          </div>
        </nav>
      </section>
      {/* The course table */}
      {/* <div className="table_1">
      <h2>Course List</h2>
    <table>
        <tr>
            <th>CODE</th>
            <th>COURSE TITLE</th>
            <th>CATEGORY</th>
            <th>C. UNITS</th>
        </tr>
        <tr>
            <td>CSC1100</td>
            <td>COMPUTER LITERACY</td>
            <td>AUDITED</td>
            <td>4</td>
        </tr>
        <tr>
            <td>CSC1102</td>
            <td>STRUCTURED & OBJECT-ORIENTED PROGRAMMING</td>
            <td>CORE</td>
            <td>4</td>
        </tr>
        <tr>
            <td>CSC1103</td>
            <td>COMPUTER ARCHITECTURE & ORGANIZATION</td>
            <td>CORE</td>
            <td>4</td>
        </tr>
        <tr>
            <td>CSC1105</td>
            <td>MATHEMATICS FOR COMPUTER SCIENCE</td>
            <td>CORE</td>
            <td>4</td>
        </tr>
        <tr>
            <td>CSC1106</td>
            <td>DIGITAL INNOVATION & COMPUTATIONAL THINKING</td>
            <td>CORE</td>
            <td>3</td>
        </tr>
        <tr>
            <td>CSK1101</td>
            <td>COMMUNICATION SKILLS</td>
            <td>CORE</td>
            <td>3</td>
        </tr>
    </table></div> */}

    {/* Provisional Results */}
    {/* <div class="profile-container">
        <h2>Student Profile</h2>
        <div class="profile-details">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Student Number:</strong> 123456789</p>
            <p><strong>Registration Number:</strong> REG-2024-001</p>
            <p><strong>Gender:</strong> Male</p>
        </div>
        
        <h2>Provisional Results</h2>
        <table>
            <tr>
                <th>CODE</th>
                <th>COURSE TITLE</th>
                <th>CATEGORY</th>
                <th>C. UNITS</th>
                <th>COURSE WORK MARKS</th>
                <th>EXAM MARKS</th>
                <th>TOTAL MARKS</th>
            </tr>
            <tr>
                <td>CSC1100</td>
                <td>COMPUTER LITERACY</td>
                <td>AUDITED</td>
                <td>4</td>
                <td>35</td>
                <td>50</td>
                <td>85</td>
            </tr>
            <tr>
                <td>CSC1102</td>
                <td>STRUCTURED & OBJECT-ORIENTED PROGRAMMING</td>
                <td>CORE</td>
                <td>4</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>CSC1103</td>
                <td>COMPUTER ARCHITECTURE & ORGANIZATION</td>
                <td>CORE</td>
                <td>4</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>CSC1105</td>
                <td>MATHEMATICS FOR COMPUTER SCIENCE</td>
                <td>CORE</td>
                <td>4</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>CSC1106</td>
                <td>DIGITAL INNOVATION & COMPUTATIONAL THINKING</td>
                <td>CORE</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>CSK1101</td>
                <td>COMMUNICATION SKILLS</td>
                <td>CORE</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        </table>
    </div>
     */}
      </div>
  )  
}

export default sidebar