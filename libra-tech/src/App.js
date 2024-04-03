
/* import logo from './logo.svg'; */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  );
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
