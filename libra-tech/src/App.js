
/* import logo from './logo.svg'; */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './login';
import Register from './Register';
import Dashboard from './Dashboard';
import ForgotPassword from './forgot-password';
import Libri from './Libri';
import Autori from './Autori';
import Porosia from './Porosia';
import Home from './Home';
import MjeteShkollore from './MjeteShkollore';
import NgjyraMSh from './NgjyraMSh';
import Tipi from './Tipi';
import React from 'react';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/mjeteShkollore' element={<MjeteShkollore/>}></Route>
        <Route path='/tipi' element={<Tipi/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
        <Route path='/libri' element={<Libri/>}></Route>
        <Route path='/autori' element={<Autori/>}></Route>
        <Route path='/libraria' element={<Libraria/>}></Route>
        <Route path='/lokacioni' element={<Lokacioni/>}></Route>
        <Route path='/qyteti' element={<Qyteti/>}></Route>
        <Route path='/furnizimi' element={<Furnizimi/>}></Route>
        <Route path='/prodhuesiMSh' element={<ProdhuesiMSh/>}></Route>
        <Route path='/ngjyraMSh' element={<NgjyraMSh/>}></Route>
        <Route path='/shtetiMSh' element={<ShtetiMSh/>}></Route>
        <Route path='/dimensionetMSh' element={<DimensionetMSh/>}></Route>
        <Route path='/kategoria' element={<Kategoria/>}></Route>
        <Route path='/gjuha' element={<Gjuha/>}></Route>
        <Route path='/shtepiaBotuese' element={<ShtepiaBotuese/>}></Route>
        <Route path='/nrfaqeve' element={<NrFaqeve/>}></Route>
        

        














        
      </Routes>
    </Router>
  );
  // return (
  //   <div className="App">
  //     <Porosia />
  //   </div>
  // );
}

export default App;

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

