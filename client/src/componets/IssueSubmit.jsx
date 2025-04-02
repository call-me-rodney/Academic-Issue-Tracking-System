import React, { useState } from 'react';
import './IssueSubmit.css'; // Link to the CSS file

const IssueSubmit = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    studentId: '',
    regNo: '',
    name: '',
    subject: '',
    category: '',
    course: '',
    description: '',
    attachments: null,
    yearOfStudy: '',
    semester: '',
    lecturer: '',
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Issue Submitted Successfully!');
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      studentId: '',
      regNo: '',
      name: '',
      subject: '',
      category: '',
      course: '',
      description: '',
      attachments: null,
      yearOfStudy: '',
      semester: '',
      lecturer: '',
    });
  };

  return (
    <div className="container">
      <h1>Issue Form</h1>
      <form onSubmit={handleSubmit} className="form">
        {/* Student ID */}
        <div className="input-box">
          <label htmlFor="studentId">Student ID</label>
          <input
            required
            type="text"
            placeholder="Insert your student number"
            name="studentId"
            id="studentId"
            value={formData.studentId}
            onChange={handleChange}
          />
        </div>

        {/* Registration Number */}
        <div className="input-box">
          <label htmlFor="regNo">Registration Number</label>
          <input
            required
            type="text"
            placeholder="Insert your reg number"
            name="regNo"
            id="regNo"
            value={formData.regNo}
            onChange={handleChange}
          />
        </div>

        {/* Full Name */}
        <div className="input-box">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            placeholder="Insert your full name"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Subject */}
        <div className="input-box">
          <label htmlFor="subject">Subject</label>
          <input
            required
            type="text"
            placeholder="Enter Subject"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        {/* Category */}
        <div className="input-box">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" value={formData.category} onChange={handleChange}>
            <option value="">Select a category</option>
            <option value="Missing Marks">Missing Marks</option>
            <option value="Corrections">Corrections</option>
            <option value="Appeal">Appeal</option>
          </select>
        </div>

        {/* Course */}
        <div className="input-box">
          <label htmlFor="course">Course</label>
          <select name="course" id="course" value={formData.course} onChange={handleChange}>
            <option value="">Select a course</option>
            <option value="CS">Bachelor of Science in Computer Science</option>
            <option value="SE">Bachelor of Science in Software Engineering</option>
            <option value="IST">Bachelor of Information Systems and Technology</option>
            <option value="IT">Bachelor of Information Technology</option>
            <option value="IS">Bachelor of Information Systems</option>
            <option value="LIS">Bachelor of Library and Information Sciences</option>
          </select>
        </div>

        {/* Description */}
        <div className="input-box">
          <label htmlFor="description">Description</label>
          <textarea
            cols="30"
            rows="5"
            placeholder="Enter Description"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Attachments */}
        <div className="input-box">
          <label htmlFor="attachments">Attachments</label>
          <input
            type="file"
            name="attachments"
            id="attachments"
            onChange={handleChange}
          />
        </div>

        {/* Year of Study */}
        <div className="input-box">
          <label htmlFor="yearOfStudy">Year Of Study</label>
          <select name="yearOfStudy" id="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange}>
            <option value="">Select a year</option>
            <option value="1">Year 1</option>
            <option value="2">Year 2</option>
            <option value="3">Year 3</option>
            <option value="4">Year 4</option>
          </select>
        </div>

        {/* Semester */}
        <div className="input-box">
          <label htmlFor="semester">Semester</label>
          <select name="semester" id="semester" value={formData.semester} onChange={handleChange}>
            <option value="">Select a semester</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
          </select>
        </div>

        {/* Lecturer */}
        <div className="input-box">
          <label htmlFor="lecturer">Lecturer</label>
          <input
            type="search"
            placeholder="Search"
            name="lecturer"
            id="lecturer"
            value={formData.lecturer}
            onChange={handleChange}
          />
        </div>

        {/* Buttons */}
        <div className="button">
          <button type="button" onClick={handleReset}>Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default IssueSubmit;

