import './IssueSubmit1.css'
const IssueSubmit = () => {
  return (  
    <div className="container">

      <h2>Submit Your Issue</h2>
      <form>
        <div className="field">
          <label>Student ID</label>
          <input type="text" name="studentId" placeholder="Insert your student Number" />
          </div>
          <div className="field">
          <label>Registration Number</label>
          <input type="text" name="registrationNumber" placeholder="Insert your Reg Number" />
          </div>
          <label>Name</label>
          <input type="text" name="name" placeholder="Insert your full names" />
          
          <label>Category</label>
          <select name="category">
              <option>Missing Marks</option>
              <option>Wrong Grade</option>
          </select>
          
          <label>Course</label>
          <select name="course">
              <option>Bachelor Of Science In Computer Science</option>
              <option>Bachelor Of Arts</option>
          </select>
          
          <label>Description</label>
          <textarea name="description" placeholder="Describe the issue"></textarea>
          
          <label>Attachments</label>
          <input type="file" name="attachments" />
          
          <label>Year Of Study</label>
          <input type="date" name="yearOfStudy" />
          
          <label>Semester</label>
          <select name="semester">
              <option>Semester 1</option>
              <option>Semester 2</option>
          </select>
          
          <div className="btn-container">
              <button type="reset" className="btn reset">Reset</button>
              <button type="submit" className="btn submit">Submit</button>
          </div>
      </form>
    </div>
  )
}

export default IssueSubmit

