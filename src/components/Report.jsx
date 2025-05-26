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
                    {user:user},
                    { headers: { 
                        Authorization: `Bearer ${token}`,
                        ContentType: 'application/json',
                     },
                    }
                )
                const {status,data} = response

                if (status !== 200) {
                    setError("Failed to fetch issues")
                }else{
                    setIssues(data)
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
