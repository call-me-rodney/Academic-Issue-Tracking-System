import {useState} from 'react'
import Report from "../components/Report"
import "./Admindash.css";

const Admindash = () => {
  const [error,setError] = useState('');
    
    return (
        <div>
            <div className="admintdash">
                <h1>Administrator Dashboard</h1>
                <div className="admindash-content">
                <Report setError={setError} />
                {error && <p className="error-message">{error}</p>}
                </div>
            </div>
        </div>
    )
}

export default Admindash