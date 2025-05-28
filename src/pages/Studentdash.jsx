import {useState} from 'react'
import Report from "../components/Report"
import Button from "../components/Button"
import "./Studentdash.css";

const Studentdash = () => {
    const [error,setError] = useState('');
    
    return (
        <>
            <h1>Student Dashboard</h1>
            <div>
                <Report setError={setError} />
                {error && <p className="error-message">{error}</p>}
            </div>
            <Button />
        </>
    )
}

export default Studentdash