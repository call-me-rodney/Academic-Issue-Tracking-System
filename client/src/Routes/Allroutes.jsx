import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from '../componets/Login';
import SignUp from '../componets/Signup';

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
  )
}

export default Allroutes;