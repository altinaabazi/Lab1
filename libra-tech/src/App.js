// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './login';
// import Logout from './Logout';
// import Register from './Register';
// import Dashboard from './Dashboard';
// import Autori from './Autori';
// import Porosia from './Porosia';
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
// import StafiGjinia from './StafiGjinia';
// import StafiOrari from './StafiOrari';
// import StafiSektori from './StafiSektori';
// import Header from './Header';
// import Shporta from './Shporta';
// import NgjyraMSh from './NgjyraMSh';
// import LibratSipasKategorise from './LibratSipasKategorise';
// import Stafi from './Stafi';
// import Home from './Home';
// import ForgotPassword from './ForgotPassword';
// import MjetetSipasTipit from './MjetetSipasTipit';
// import Libri from './Libri';
// import DetajetELibrit from './DetajetELibrit';
// import DetajetEMjetit from './DetajetEMjetit';
// import KlientiGjinia from './KlientiGjinia';
// import KlientiQyteti from './KlientiQyteti';
// import KlientiRoli from './KlientiRoli';
// import Klienti from './Klienti';
// import { PorosiaService } from './PorosiaService';
// import { AuthProvider } from './AuthProvider';
// import ProtectedRoute from './ProtectedRoute';
// import { useAuth } from './AuthProvider';

// function App() {
//   // const { isAuthenticated } = useAuth();
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* ketu kane qasje krejt */}
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/logout" element={<Logout />} />
//           <Route path="/forgotpassword" element={<ForgotPassword />} />

//           {/* ketu kane qasje vetem userat me rolin "Admin" */}
    
//           <Route
//             path="/klientigjinia"
//             element={
//               <ProtectedRoute requiredRoli="Admin">
//                 <KlientiGjinia />
//               </ProtectedRoute>
//             }
//           />  
//           <Route
//             path="/klientiqyteti"
//             element={
//               <ProtectedRoute requiredRoli="Admin">
//                 <KlientiQyteti />
//               </ProtectedRoute>
//             }
//           />  
//           <Route
//             path="/klientiroli"
//             element={
//               <ProtectedRoute requiredRoli="Admin">
//                 <KlientiRoli />
//               </ProtectedRoute>
//             }
//           />                                    
// <Route
//   path="/klienti"
//   element={
//     <ProtectedRoute requiredRoli="Admin">
//       <Klienti />
//     </ProtectedRoute>
//   }
// />
// <Route
//   path="/stafi"
//   element={
//     <ProtectedRoute requiredRoli="Admin">
//       <Stafi />
//     </ProtectedRoute>
//   }
// />
               

//            <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute requiredRoli="Admin">
//                 <Dashboard />
//               </ProtectedRoute>
//             } 
//           />
//           {/* ketu kane qasje userat pas logimit me rolet "Admin" ose "User" */}
//           <Route
//             path="/home"
//             element={
//               <ProtectedRoute requiredRolis={["Admin", "User"]}>
//                 <Home />
//               </ProtectedRoute>
//             }
//           />      

//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;


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
        {/* <Route path='/stafiGjinia' element={<StafiGjinia />} />
        <Route path='/stafiOrari' element={<StafiOrari />} />
        <Route path='/stafiSektori' element={<StafiSektori />} /> */}
        {/* <Route path="/klienti" element={<Klienti />} />
        <Route path='/KlientiGjinia' element={<KlientiGjinia />} />
        <Route path='/KlientiRoli' element={<KlientiRoli />} />
        <Route path='/KlientiQyteti' element={<KlientiQyteti />} /> */}
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

//pe provoj
// App.jsimport React from 'react';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './login';
// import Logout from './Logout';
// import Register from './Register';
// import Home from './Home';
// import Klienti from './Klienti';
// import KlientiGjinia from './KlientiGjinia';
// import KlientiQyteti from './KlientiQyteti';
// import KlientiRoli from './KlientiRoli';
// import Dashboard from './Dashboard';
// import NotAuthorized from './NotAuthorized';
// import { AuthProvider } from './AuthProvider';
// import PrivateRoute from './PrivateRoute';
// import UserProfile from './UserProfile';
// import EditProfile from './EditProfile';
// import StafiSchedule from './StafiSchedule';


// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/logout" element={<Logout />} />
//           <Route path="/klienti" element={<Klienti />} />
//           <Route path="/UserProfile" element={<UserProfile />} />
//           <Route path="/EditProfile" element={<EditProfile />} />
//           <Route path="/StafiSchedule" element={<StafiSchedule />} />
//           <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
//           <Route path="/dashboard" element={<PrivateRoute roles={['Admin']}><Dashboard /></PrivateRoute>} />
//           {/* <Route path="/klienti" element={<PrivateRoute roles={['Admin']} userIds={[1]}><Klienti /></PrivateRoute>} /> */}
//           <Route path="/register" element={<Register />} />
//           <Route path="/notauthorized" element={<NotAuthorized />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
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