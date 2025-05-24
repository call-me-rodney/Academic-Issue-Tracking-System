import { useState } from "react";
import axios from "axios";

const Lecturerreportitem = ({ issue, onIssueUpdated }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState(issue.status);

  const handleSave = async () => {
    const token = localStorage.getItem('authToken');
    await axios.patch(
      `http://localhost:8000/api/issues/${issue.issueid}/`,
      {status},
      { headers: { Authorization: `Bearer ${token}`, Contenttype:"application/json"} }
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
      <td>{issue.assigned_to}</td>
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

export default Lecturerreportitem;
