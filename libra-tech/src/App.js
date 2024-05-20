import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
// import Login from './login';
// import Register from './Register';
 import Dashboard from './Dashboard';
// import ForgotPassword from './forgot-password';
import Books from './Books';
// import Porosia from './Porosia';
import AddStaffForm from './AddStaff';

import StaffDashboard from './Stafi';

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        
       
        <Route path='/forgot-password' element={<ForgotPassword/>}></Route> */}

<Route path='/dashboard' element={<Dashboard/>}></Route>
< Route path='/stafi' element={<StaffDashboard/>}></Route>
< Route path='/books' element={<Books/>}></Route>
< Route path='/addStaff' element={<AddStaffForm/>}></Route>

        

      </Routes>
    </Router>
  );
}
export default App;