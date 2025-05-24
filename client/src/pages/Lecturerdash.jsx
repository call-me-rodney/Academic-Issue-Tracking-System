import {useState} from 'react'
import Report from "../components/Report"
import "./Lecturerdash.css";

const Lecturerdash = () => {
  const [error,setError] = useState('');
    
  return (
      <div>
          <div className="lecturerdash">
              <h1>Lecturer Dashboard</h1>
              <div className="lecturerdash-content">
              <Report setError={setError} />
              {error && <p className="error-message">{error}</p>}
              </div>
          </div>
      </div>
  )
}

export default Lecturerdash