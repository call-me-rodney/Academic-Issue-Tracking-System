import "./SignUp.css"

const SignUp = () => {
  return (
    <div className="container">
      <form action="#" className="form">
        <h1>Create an account</h1>
        <div className="box">
          <div className="input">
            <label for="name">First name</label>
            <input className="input-box" required type="text" placeholder="Enter your name" name="name" />
          </div>
          <div className="input">
            <label for="name">Last name</label>
            <input className="input-box" required type="text" placeholder="Enter your name" name="name" />
          </div>
        </div>
        <div className="input">
          <label for="name">Your email</label>
          <input className="input-box" required type="email" placeholder="Enter your email" name="name" />
        </div>
        <div className="input">
          <label for="name">Your password</label>
          <input className="input-box" required type="password" placeholder="Enter your name" name="name" />
        </div>
        <div className="input">
          <label for="name">Confirm password</label>
          <input className="input-box" repeat type="password" placeholder="Enter your name" name="name" />
        </div>
        <div className="input">
          <label for="name">Select Role</label>
          <select className="dropdown">
            <option>student</option>
            <option>Lecturer</option>
            <option>Administrator</option>
            <option>Academic Register</option>
          </select>
        </div>
        <div className="input">
          <input className="input-box-1" type="submit" value="Create account" />
        </div>
        <div className="input">
          Already have an account?{" "}
          <a className="log" href="Login.jsx">
            Login here
          </a>
        </div>
      </form>
    </div>
  )
}

export default SignUp

