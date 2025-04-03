import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from '../componets/Login';
import SignUp from '../componets/Signup';
import Admindashboard from '../componets/Admindashboard';
import IssueSubmit from '../componets/IssueSubmit';
import Dashboard from '../componets/Dashboard';

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/admin/:id' element={<Admindashboard />} />
      <Route path='/studentdash/:id' element={<Dashboard/>} />
      <Route path='/submitissue' element={<IssueSubmit/>} />
    </Routes>
  )
}

export default Allroutes;