import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
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
import { AuthProvider, useAuth } from './AuthProvider';
import KlientiQyteti from './KlientiQyteti';
import { PorosiaService } from './PorosiaService';
// Import other components...

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/klienti" element={<Klienti />} />
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
          <Route path='/stafiGjinia' element={<StafiGjinia />} />
          <Route path='/stafiOrari' element={<StafiOrari />} />
          <Route path='/stafiSektori' element={<StafiSektori />} />
          <Route path='/KlientiGjinia' element={<KlientiGjinia />} />
          <Route path='/KlientiRoli' element={<KlientiRoli />} />
          <Route path='/KlientiQyteti' element={<KlientiQyteti />} />


          
          
          
        
          
          <Route path='/Shporta' element={<Shporta />} />
        
        <Route path='/libri' element={<Libri />} />
        <Route path='/libri/:id' element={<DetajetELibrit />} />
        <Route path='/mjeteShkollore/:id' element={<DetajetEMjetit />} />
        <Route path="/kategoria/:kategoria/librat" element={<LibratSipasKategorise/>}></Route>
       
        <Route path="/tipi/:tipi/MjeteShkollore" element={<MjetetSipasTipit/>}></Route>


        {/* Other public routes */}

        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/stafi" element={isAuthenticated ? <Stafi /> : <Navigate to="/" />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
        <Route path="/klienti" element={isAuthenticated ? <Klienti /> : <Navigate to="/" />} />
        
        {/* Other private routes */}
      </Routes>
    </Router>
  );
}

export default App;






//qeky osht i miri
// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
          {/* 
         
          <Route path='/mjeteShkollore' element={<MjeteShkollore />} />
          <Route path='/tipi' element={<Tipi />} />
         
          
          <Route path='/autori' element={<Autori />} />
          <Route path='/libraria' element={<Libraria />} />  
          <Route path='/lokacioni' element={<Lokacioni />} />
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
          
          <Route path='/Shporta' element={<Shporta />} />
        
          <Route path='/addstaff' element={<AddStaff />} />
          }

          {/* the Private Routes - jo te qasshme pa u bo login*/}
          {/* <Route path='/dashboard' element={<PrivateRoute component={Dashboard} />} />
          <Route path='/klienti' element={<PrivateRoute component={Klienti} />} />
          <Route path='/addklienti' element={<PrivateRoute component={AddKlienti} />} /> */}


          {/* Public Routes */}
          // <Route path='/' element={<Login />} />
          // <Route path='/register' element={<Register />} />
          {/* Other public routes */}
          
          {/* Private Routes - Protected Routes */}
//           <PrivateRoute path='/dashboard' element={<Dashboard />} />
//           <PrivateRoute path='/klienti' element={<Klienti />} />
//           <PrivateRoute path='/addklienti' element={<AddKlienti />} />
//           {/* Add other private routes here */}
          
//           {/* Public Routes */}
//           <Route path='/forgot-password' element={<ForgotPassword />} />
//           <Route path='/libri' element={<Libri />} />
//           {/* Other public routes */}
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// import './App.css';
// import './Dashboard.js';
// import { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Libraria: []
//     }
//   }

//   API_URL = "http://localhost:32596/";

//   componentDidMount() {
//     this.refreshNotes();
//   }

//   async refreshNotes() {
//     fetch(this.API_URL + "api/Book/")
//       .then(response => response.json())
//       .then(data => {
//         this.setState({ Libraria: data });
//       })
//   }

//   render() {
//     const { Libraria } = this.state;
//     return (
//       <div className="App">
//         <h2>LibraTech</h2>
//         {Libraria.map(note =>
//           <p key={note.IDLibrari}>
//             <b>*{note.Emri}</b>
//             <b>*{note.Qyteti}</b>
//             <b>*{note.Rruga}</b>


//           </p>)}
//       </div>
//     );
//   }
// }

// export default App;




// import './App.css';
// import './Dashboard.js';
// import { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Libraria: []
//     }
//   }

//   API_URL = "http://localhost:32596/";

//   componentDidMount() {
//     this.refreshNotes();
//   }

//   async refreshNotes() {
//     fetch(this.API_URL + "api/Book/")
//       .then(response => response.json())
//       .then(data => {
//         this.setState({ Libraria: data });
//       })
//   }

//   render() {
//     const { Libraria } = this.state;
//     return (
//       <div className="App">
//         <h2>LibraTech</h2>
//         {Libraria.map(note =>
//           <p key={note.IDLibrari}>
//             <b>*{note.Emri}</b>
//             <b>*{note.Qyteti}</b>
//             <b>*{note.Rruga}</b>


//           </p>)}
//       </div>
//     );
//   }
// }

// export default App;