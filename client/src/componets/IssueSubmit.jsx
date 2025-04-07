import React, { useState } from 'react';
import './IssueSubmit.css'; // Link to the CSS file

const IssueSubmit = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    category: '',
    course: '',
    description: '',
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
      category: '',
      course: '',
      description: '',
    });
  };

  return (
    <div className="container">
      <h1>Issue Form</h1>
      <form onSubmit={handleSubmit} className="form">
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

