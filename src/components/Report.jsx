import Reportitem from "./Reportitem"
import Adminreportitem from "./Adminreportitem"
import Lecturerreportitem from "./Lecturerreportitem"
import axios from "axios"
import { useEffect, useState } from "react"

const Report = () => {
    const [issues, setIssues] = useState([])
    const userRole = localStorage.getItem('role')
    const [error,setError] = useState(null)

    useEffect(() => {
        const getIssues = async () => {
            try {
                const token = localStorage.getItem('authToken')
                const user = localStorage.getItem('user')
                
                const response = await axios.get(
                    "https://aits-backend-serve-6cfc52717a28.herokuapp.com/api/issues",
                    { headers: { 
                        Authorization: `Bearer ${token}`,
                        "Content-Type": 'application/json',
                     },
                    }
                )
                const {status,data} = response
                console.log("Response data:", data)
                
                if (status === 200) {
                    if (data.length === 0){
                        alert("No issues currently available.")
                    }else{
                        setIssues(data)
                    }
                }else {
                    console.log("Response status:", status)
                    console.log("Error encountered:", data)
                    setError(`Error fetching issues: ${data.detail}`)
                }
                
            } catch (error) {
                console.error("Error fetching issues:", error)
            }
        }

        getIssues()
    }, [])

    return(
        <div>
            {error && <p className="error-message">{error}</p>}
            {issues.map((issue) =>{
                if (userRole === "A") {
                    return <Adminreportitem key={issue.issueid} issue={issue} />;
                } else if (userRole === "L") {
                    return <Lecturerreportitem key={issue.issueid} issue={issue} />;
                } else {
                    return <Reportitem key={issue.issueid} issue={issue} />;
                }
            })}
        </div>
    )
}

export default Report
