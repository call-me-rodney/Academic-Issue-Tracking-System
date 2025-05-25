import React, { useEffect, useState } from "react";
import axios from "axios";

const Adminreportitem = ({ issue, onIssueUpdated }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState(issue.status);
  const [assignedTo, setAssignedTo] = useState(issue.assigned_to);
  const [lecturers, setLecturers] = useState([]);

  // Fetch lecturers for the issue's department
  useEffect(() => {
    if (isEditing) {
      const fetchLecturers = async () => {
        const token = localStorage.getItem('authToken');
        const response = await axios.get(
          `http://localhost:8000/api/lecturers/?department=${issue.dept}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setLecturers(response.data);
      };
      fetchLecturers();
    }
  }, [isEditing, issue.dept]);

  const handleSave = async () => {
    const token = localStorage.getItem('authToken');
    await axios.patch(
      `http://localhost:8000/api/issues/${issue.issueid}/`,
      { status, assigned_to: assignedTo },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setIsEditing(false);
    if (onIssueUpdated) onIssueUpdated();
  };

  return (
    <tr>
      <td>{issue.category}</td>
      <td>{issue.description}</td>
      <td>
        {isEditing ? (
          <select value={status} onChange={e => setStatus(e.target.value)}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        ) : (
          status
        )}
      </td>
      <td>
        {isEditing ? (
          <select value={assignedTo} onChange={e => setAssignedTo(e.target.value)}>
            {lecturers.map(lec => (
              <option key={lec.id} value={lec.id}>
                {lec.name}
              </option>
            ))}
          </select>
        ) : (
          assignedTo
        )}
      </td>
      <td>{issue.dept}</td>
      <td>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </td>
    </tr>
  );
};

export default Adminreportitem;
