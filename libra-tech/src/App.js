// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import React from 'react';
// import Login from './login';
// import Register from './Register';
// import Dashboard from './Dashboard';
// import ForgotPassword from './forgot-password';
// import Libri from './Libri';
// import Autori from './Autori';
// import Porosia from './Porosia';
// import Home from './Home';
// import MjeteShkollore from './MjeteShkollore';
// import Tipi from './Tipi';
// import Libraria from './Libraria';
// import Lokacioni from './Lokacioni';
// import Furnizimi from './Furnizimi';
// import Qyteti from './Qyteti';
// import ProdhuesiMSh from './ProdhuesiMSh';
// import ShtetiMSh from './ShtetiMSh';
// import DimensionetMSh from './DimensionetMSh';
// import Kategoria from './Kategoria';
// import Gjuha from './Gjuha';
// import ShtepiaBotuese from './ShtepiaBotuese';
// import NrFaqeve from './NrFaqeve';
// import Header from './Header';
// import DetajetELibrit from './DetajetELibrit';
// import Shporta from './Shporta';
// import NgjyraMSh from './NgjyraMSh';
// import Klienti from './Klienti';
// import AddKlienti from './AddKlienti';
// import Stafi from './Stafi';
// import AddStaff from './AddStaff';
// import Logout from './Logout';
// import { AuthProvider, useAuth } from './AuthProvider';


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Login from './login';
import Logout from './Logout';
import Register from './Register';
import Dashboard from './Dashboard';
import Klienti from './Klienti';
import Stafi from './Stafi';
import Home from './Home';
import ForgotPassword from './ForgotPassword';
import { AuthProvider, useAuth } from './AuthProvider';
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

        {/* Other public routes */}

        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/stafi" element={isAuthenticated ? <Stafi /> : <Navigate to="/" />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
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
          {/* <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/mjeteShkollore' element={<MjeteShkollore />} />
          <Route path='/tipi' element={<Tipi />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/libri' element={<Libri />} />
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
          <Route path='/libri/:id' element={<DetajetELibrit />} />
          <Route path='/Shporta' element={<Shporta />} />
          <Route path='/stafi' element={<Stafi />} />
          <Route path='/addstaff' element={<AddStaff />} />
          <Route path='/logout' element={<Logout />} /> */}

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