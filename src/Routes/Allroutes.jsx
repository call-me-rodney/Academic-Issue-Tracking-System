import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';
import Admindash from '../pages/Admindash';
import IssueSubmit from '../pages/IssueSubmit';
import Studentdash from '../pages/Studentdash';
import Lecturerdash from '../pages/Lecturerdash';

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/admindash/:id' element={<Admindash />} />
      <Route path='/studentdash/:id' element={<Studentdash/>} />
      <Route path='/lecturerdash/:id' element={<Lecturerdash/>} />
      <Route path='/submitissue' element={<IssueSubmit/>} />
    </Routes>
  )
}

export default Allroutes;