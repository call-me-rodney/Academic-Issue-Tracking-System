import React, { useState } from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import './IssueSubmit.css'

const IssueSubmit = () => {
  const [formData, setFormData] = useState({
    category: '',
    department: '',
    description: '',
  });
  const [error,setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const token = localStorage.getItem("authToken")

      const response = await axios.post(
        "https://aits-backend-serve-6cfc52717a28.herokuapp.com/api/issues/", 
        formData,
        {
          headers:{
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json',
          }
        });
      const {status,data} = response
      console.log(data);

      if(status === 200 || status === 201){
        navigate(`/studentdash/${localStorage.getItem("userId")}`);
      }else{
        console.log(status)
        setError(data.message || "Unknown error occurred.")      
      }
    }catch(err){
      console.log(err)
      setError("An error occurred while submitting the issue. Please check the console for details.")
    }
  };

  return (
    <>
      <h1>Issue Form</h1>
      <form onSubmit={handleSubmit} className="form">
        {error && <div className="error">{error}</div>}
        <div >
          <label htmlFor="category">Category</label>
          <select name="category" id="category" value={formData.category} onChange={(e)=> setFormData({...formData,category:e.target.value})} required>
            <option value="">Select a category</option>
            <option value="MM">Missing Marks</option>
            <option value="MC">Missing Coursework</option>
            <option value="WM">Wrong Marks</option>
            <option value="Ap">Apeal</option>
          </select>
        </div>
        <div >
          <label htmlFor="Department">Department Code</label>
          <input  type="number" id="dept" value={formData.department} onChange={(e)=>setFormData({...formData,department: parseInt(e.target.value,10)})} required 
          />
            
        </div>
        <div >
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
    </>
  );
};

export default IssueSubmit;

