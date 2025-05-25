import React, { useState } from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import './IssueSubmit.css'

const IssueSubmit = () => {
  const [formData, setFormData] = useState({
    category: '',
    dept: '',
    description: '',
  });
  const [error,setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      // Merge student ID just-in-time, don't store in state
      const submissionData = {
        ...formData,
        student: localStorage.getItem("userid")
      };

      const response = await axios.post("http://localhost:8000/api/issues/", submissionData);
      console.log(response);

      if(response.status === 200 || response.status === 201){
        navigate("/studentdash/:id")
      }else{
        setError(response.data)
      }
    }catch(e){
      console.log(e)
      setError(e)
    }
  };

  return (
    <div className="container">
      <h1>Issue Form</h1>
      <form onSubmit={handleSubmit} className="form">
        {error && <div className="error">{error}</div>}
        <div className="input-box">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" value={formData.category} onChange={(e)=> setFormData({...formData,category:e.target.value})} required>
            <option value="">Select a category</option>
            <option value="Missing Marks">Missing Marks</option>
            <option value="Corrections">Corrections</option>
            <option value="Appeal">Appeal</option>
          </select>
        </div>
        <div className="input-box">
          <label htmlFor="Department">Department Code</label>
          <input className="input-box" type="text" id="dept" value={formData.dept} onChange={(e)=>setFormData({...formData,dept:e.target.value})} required 
          />
            
        </div>
        <div className="input-box">
          <label htmlFor="description">Description</label>
          <textarea
            cols="30"
            rows="5"
            placeholder="Enter issue description"
            name="description"
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            required
          ></textarea>
        </div>
        <div className="button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default IssueSubmit;

