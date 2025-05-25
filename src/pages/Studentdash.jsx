import {useState} from 'react'
import Report from "../components/Report"
import "./Studentdash.css";

const Studentdash = () => {
    const [error,setError] = useState('');
    
    return (
        <div>
            <div className="studentdash">
                <h1>Student Dashboard</h1>
                <div className="studentdash-content">
                <Report setError={setError} />
                {error && <p className="error-message">{error}</p>}
                </div>
            </div>
        </div>
    )
}

export default Studentdash