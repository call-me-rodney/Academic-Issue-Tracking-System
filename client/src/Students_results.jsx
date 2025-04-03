const Students_results = () => {
  return (
    <div class="profile-container ">
      <h2>Student Profile</h2>
      <div class="profile-details">
        <p>
          <strong>Name:</strong> John Doe
        </p>
        <p>
          <strong>Student Number:</strong> 123456789
        </p>
        <p>
          <strong>Registration Number:</strong> REG-2024-001
        </p>
        <p>
          <strong>Gender:</strong> Male
        </p>
      </div>

      <h2>Provisional Results</h2>
      <table>
        <tr>
          <th>CODE</th>
          <th>COURSE TITLE</th>
          <th>CATEGORY</th>
          <th>CREDIT UNITS</th>
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
  )
}

export default Students_results

