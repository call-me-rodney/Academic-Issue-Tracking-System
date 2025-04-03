import React, { useState } from "react";
import "./LecturersAccount.css"; // Ensure the CSS file is imported

const LecturersAccount = () => {
  const [lecturerNumber, setLecturerNumber] = useState("");
  const [subjectTaught, setSubjectTaught] = useState("");
  const [department, setDepartment] = useState("");
  const [college, setCollege] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!lecturerNumber || !subjectTaught || !department || !college) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Handle form submission (send data to server if needed)
    alert("Lecturer Registered Successfully!");
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="slogan">
          <h1>Lecturer's Account</h1>
          <p>Welcome to the Lecturer's account page!</p>
          <p>Fill in the form carefully</p>
        </div>

        <div className="space">
          <label htmlFor="lecturerNumber">Lecturer Number</label>
          <input
            className="input-box"
            type="text"
            placeholder="Enter your Lecturer Number"
            value={lecturerNumber}
            onChange={(e) => setLecturerNumber(e.target.value)}
            required
          />
        </div>

        <div className="space">
          <label htmlFor="subjectTaught">Subject Taught</label>
          <input
            className="input-box"
            type="text"
            placeholder="Enter Subject Taught"
            value={subjectTaught}
            onChange={(e) => setSubjectTaught(e.target.value)}
            required
          />
        </div>

        <label htmlFor="department">Select Department</label>
        <select
          className="dropdown"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        >
          <option value="">Select a department</option>
          <option value="Anatomy">Department of Anatomy</option>
          <option value="CivilEngineering">
            Department of Civil and Environmental Engineering
          </option>
          <option value="Statistics">
            Department of Planning and Applied Statistics
          </option>
          <option value="ComputerScience">Department of Computer Science</option>
          <option value="Networks">Department of Networks</option>
        </select>

        <label htmlFor="college">Select College</label>
        <select
          className="dropdown"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          required
        >
          <option value="">Select a college</option>
          <option value="HealthSciences">College of Health Sciences</option>
          <option value="Engineering">
            College of Engineering, Design, Art and Technology
          </option>
          <option value="Computing">
            College of Computing and Information Sciences
          </option>
          <option value="Education">
            College of Education and External Studies
          </option>
          <option value="Humanities">
            College of Humanities and Social Sciences
          </option>
        </select>

        <div className="group">
          <button type="button" className="submit" onClick={goBack}>
            Back
          </button>
          <button type="submit" className="submit">
            Register
          </button>
        </div>

        <div>
          Not registered?{" "}
          <a className="account" href="/signup">
            Create an account
          </a>
        </div>
      </form>
    </div>
  );
};

export default LecturersAccount;
