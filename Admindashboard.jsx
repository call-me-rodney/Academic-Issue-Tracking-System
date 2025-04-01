import React, { useEffect, useState } from 'react';

function Admindashboard() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/issues/')
      .then((response) => response.json())
      .then((data) => setIssues(data))
      .catch((error) => console.error('Error fetching issues:', error));
  }, []);

  const handleStatusChange = (id, status) => {
    // Handle status update logic here
    fetch(`http://127.0.0.1:8000/api/issues/${id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    })
      .then((response) => response.json())
      .then(() => {
        setIssues(issues.map(issue => (issue.id === id ? { ...issue, status } : issue)));
      })
      .catch((error) => console.error('Error updating status:', error));
  };

  return (
    <div>
      <h2>All Submitted Issues</h2>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <h3>{issue.issue_type}</h3>
            <p>{issue.description}</p>
            <p>Status: {issue.status}</p>
            <button onClick={() => handleStatusChange(issue.id, 'Resolved')}>Mark as Resolved</button>
            <button onClick={() => handleStatusChange(issue.id, 'In Progress')}>Mark as In Progress</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admindashboard;
