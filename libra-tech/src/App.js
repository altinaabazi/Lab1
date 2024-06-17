
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import Logout from './Logout';
import Register from './Register';
import Dashboard from './Dashboard';
import Autori from './Autori';
import Porosia from './Porosia';
import MjeteShkollore from './MjeteShkollore';
import Tipi from './Tipi';
import Libraria from './Libraria';
import Lokacioni from './Lokacioni';
import Furnizimi from './Furnizimi';
import Qyteti from './Qyteti';
import ProdhuesiMSh from './ProdhuesiMSh';
import ShtetiMSh from './ShtetiMSh';
import DimensionetMSh from './DimensionetMSh';
import Kategoria from './Kategoria';
import Gjuha from './Gjuha';
import ShtepiaBotuese from './ShtepiaBotuese';
import NrFaqeve from './NrFaqeve';
import StafiGjinia from './StafiGjinia';
import StafiOrari from './StafiOrari';
import StafiSektori from './StafiSektori';
import Header from './Header';
import Shporta from './Shporta';
import NgjyraMSh from './NgjyraMSh';
import LibratSipasKategorise from './LibratSipasKategorise';
import KlientiRoli from './KlientiRoli';
import Klienti from './Klienti';
import Stafi from './Stafi';
import Home from './Home';
import ForgotPassword from './ForgotPassword';
import MjetetSipasTipit from './MjetetSipasTipit';
import KlientiGjinia from './KlientiGjinia';
import Libri from './Libri';
import DetajetELibrit from './DetajetELibrit';

import DetajetEMjetit from './DetajetEMjetit';
import KlientiQyteti from './KlientiQyteti';
import { PorosiaService } from './PorosiaService';
import StafiSchedule from './StafiSchedule';
// import  Profile  from './Profile';

import ProtectedRoute from './ProtectedRoute';  // Import the ProtectedRoute component
import { useAuth } from './AuthProvider';
import { AuthProvider } from './AuthProvider';

function App() {
  const { isAuthenticated } = useAuth();
  
  return (
    <AuthProvider>
    <Router>
      <Routes>
        {
          !isAuthenticated ?  <Route path="/" element={<Login />} />: <Route path="/" element={<Home />} />
        }
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path='/mjeteShkollore' element={<MjeteShkollore />} />
        <Route path='/tipi' element={<Tipi />} />
        <Route path='/autori' element={<Autori />} />
        <Route path='/shporta' element={<Shporta />} />
        <Route path='/libraria' element={<Libraria />} />  
        <Route path='/lokacioni' element={<Lokacioni />} />
        <Route path='/porosia' element={<Porosia />} />
        <Route path='/porosiaService' element={<PorosiaService />} />
        <Route path='/qyteti' element={<Qyteti />} />
        <Route path='/furnizimi' element={<Furnizimi />} />
        <Route path='/prodhuesiMSh' element={<ProdhuesiMSh />} />
        <Route path='/shtetiMSh' element={<ShtetiMSh />} />
        <Route path='/dimensionetMSh' element={<DimensionetMSh />} />
        <Route path='/kategoria' element={<Kategoria />} />
        <Route path='/gjuha' element={<Gjuha />} />
        <Route path='/shtepiaBotuese' element={<ShtepiaBotuese />} />
        <Route path='/nrfaqeve' element={<NrFaqeve />} />
        <Route path='/njesia' element={<NgjyraMSh />} />
        <Route path="/StafiSchedule" element={<StafiSchedule />} />
        <Route path='/stafiGjinia' element={<StafiGjinia />} />
        <Route path='/stafiOrari' element={<StafiOrari />} />
        <Route path='/stafiSektori' element={<StafiSektori />} />
        <Route path="/klienti" element={<Klienti />} />
        <Route path='/KlientiGjinia' element={<KlientiGjinia />} />
        <Route path='/KlientiRoli' element={<KlientiRoli />} />
        <Route path='/KlientiQyteti' element={<KlientiQyteti />} />
        <Route path='/Shporta' element={<Shporta />} />
        {/* <Route path='/Home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} /> */}
        <Route path='/libri' element={<Libri />} />
        <Route path='/libri/:id' element={<DetajetELibrit />} />
        <Route path='/mjeteShkollore/:id' element={<DetajetEMjetit />} />
        <Route path="/kategoria/:kategoria/librat" element={<LibratSipasKategorise />} />
        <Route path="/tipi/:tipi/MjeteShkollore" element={<MjetetSipasTipit />} />
        

        {/* ketu kane qasje krejt */}  
        {/* {
          !isAuthenticated ?  <Route path="/" element={<Login />} />: <Route path="/" element={<Home />} />
        }  */}
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/* ketu kane qasje vetem userat me rolin "Admin" */}
    
        <Route
          path="/klientigjinia"
          element={
           <ProtectedRoute requiredRoli="Admin">
             <KlientiGjinia />
           </ProtectedRoute>
         }
        />  
        <Route
          path="/klientiqyteti"
          element={
            <ProtectedRoute requiredRoli="Admin">
              <KlientiQyteti />
            </ProtectedRoute>
          }
        />  
        <Route
          path="/klientiroli"
          element={
            <ProtectedRoute requiredRoli="Admin">
              <KlientiRoli />
            </ProtectedRoute>
          }
        />                                    
        <Route
          path="/klienti"
          element={
            <ProtectedRoute requiredRoli="Admin">
              <Klienti />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stafi"
          element={
            <ProtectedRoute requiredRoli="Admin">
              <Stafi />
            </ProtectedRoute>
          }
        />               
         <Route
          path="/dashboard"
          element={
            <ProtectedRoute requiredRoli="Admin">
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        {/* ketu kane qasje userat pas logimit me rolet "Admin" ose "User" */}
        <Route
          path="/home"
          element={
            <ProtectedRoute requiredRolis={["Admin", "User"]}>
              <Home />
            </ProtectedRoute>
          }
        />
         
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

