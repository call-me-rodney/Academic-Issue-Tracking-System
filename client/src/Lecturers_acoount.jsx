const Lecturers_acoount = () => {
  return (
    <div>
      <div className="container">
        <form action="#" className="form">
          <div className="slogan">
            <h1>Lecturer's Account</h1>
            <p>Welcome to the Lecturer's account page!</p>
            <p>Fill in the form carefully</p>
          </div>
          <div className="space">
            <label for="sudent">Lecturer Number</label>
            <input className="input-box" required type="text" placeholder="Enter your student Number" name="student" />
          </div>
          <div className="space">
            <label for="sudent">Subject Taught</label>
            <input className="input-box" required type="text" placeholder="Enter your Course name" name="student" />
          </div>
          <label for="sudent">Select Department</label>
          <select name="student" className="dropdown">
            <option value="College of Health Sciences">Department of Anatomy</option>
            <option value="College of Health Sciences">The Department of Civil and Environmental Engineering</option>
            <option value="College of Health Sciences">Department of Planning and Applied Statistics</option>
            <option value="College of Health Sciences">The Department of Computer Science</option>
            <option value="College of Health Sciences">The Department of Networks</option>
          </select>

          <label for="sudent">Select College</label>
          <select name="student" className="dropdown">
            <option value="College of Health Sciences">College of Health Sciences</option>
            <option value="College of Health Sciences">College of Engineering, Design, Art and Technology</option>
            <option value="College of Health Sciences">College of Computing and Information Sciences</option>
            <option value="College of Health Sciences">College of Education and External Studies</option>
            <option value="College of Health Sciences">College of Humanities and Social Sciences</option>
          </select>

          <div className="group">
            <button type="button" className="submit">
              Back
            </button>
            <button type="submit" className="submit">
              Register
            </button>
          </div>
          <div>
            Not registered?{" "}
            <a className="account" href="SignUp.jsx">
              Create an account
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Lecturers_acoount

