// import React, { Component } from 'react';
// import { variables } from './Variables.js';
// import StafiOrari from './StafiOrari.js';
// import { Gjuha } from './Gjuha.js';
// import Header from './Header';
// import Footer from './Footer';
// import Sidebar from './Sidebar.js';
// import { useHref } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import StafiSchedule from './StafiSchedule.js';
// import { useAuth } from './AuthProvider';
// import axios from 'axios';

// export class Schedule extends Component {
  
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       stafet: [],
//       schedules: [],
//       modalTitle: "",
//       IDStafi: 0,
//       Emri: "",
//       Mbiemri: "",
//       StafiSchedule:"",
//       isFormValid: false,
//     };

//     this.handleModalHidden = this.handleModalHidden.bind(this);
//   }

//   componentDidMount() {
//     this.refreshList();
//     const modal = document.getElementById("exampleModal");
//     modal.addEventListener("hidden.bs.modal", this.handleModalHidden);
//   }

//   componentWillUnmount() {
//     const modal = document.getElementById("exampleModal");
//     modal.removeEventListener("hidden.bs.modal", this.handleModalHidden);
//   }

//   handleModalHidden() {
//     // Reset modal state values
//     this.setState({
//       modalTitle: "",
//       IDStafi: 0,
//       Emri: "",
//       Mbiemri: "",
//       StafiSchedule: "",
//       isFormValid: false,
//     });
//   }

//   validateForm = () => {
//     const { Emri, Mbiemri,StafiSchedule } = this.state;
//     return Emri && Mbiemri &&  StafiSchedule ;
//   };

//   refreshList() {
//     fetch(variables.API_URL + 'stafi')
//     .then(response => response.json())
//     .then(data => {
//       this.setState({ stafet: data });
//     });

   

//       fetch(variables.API_URL + 'StafiSchedule')
//       .then(response => response.json())
//       .then(data => {
//         this.setState({ schedules: data });
//       });
//   }

//   changeEmri = (e) => {
//     this.setState({ Emri: e.target.value });
//   }
//   changeMbiemri = (e) => {
//     this.setState({ Mbiemri: e.target.value });
//   }
 
//   changeStafiSchedule = (e) => {
//     this.setState({ StafiSchedule: e.target.value });
//   }

  

//   addClick() {
//     this.setState({
//       modalTitle: "Shto Stafin",
//       IDStafi: 0,
//       Emri: "",
//       Mbiemri: "",
//       StafiSchedule: "",
//     });
//   }


//   render() {
//     const {
//       stafet,
//       schedules,
//       modalTitle,
//       IDStafi,
//       Emri,
//       Mbiemri,
//       StafiSchedule,
//     } = this.state;


//       return (
//       <div>
//         <body id="page-top">
//           <Header />
//           <div className="container">


//             <Sidebar />
//             <div className="container-fluid" style={{ marginLeft: '110px', }}>
//               <table className="table table-striped">
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Emri</th>
//                     <th>Mbiemri</th>
//                     <th>Schedule</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {stafet.map(emp =>
//                     <tr key={emp.IDStafi}>
//                       <td>{emp.IDStafi}</td>
//                       <td>{emp.Emri}</td>
//                       <td>{emp.Mbiemri}</td>
//                       <td>{emp.StafiSchedule}</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>


//               <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
//                 <div className="modal-dialog modal-lg modal-dialog-centered">
//                   <div className="modal-content" >
                    

                  
//                   </div>
//                 </div>
//               </div>
//               <Footer />
//             </div>
//           </div>

//         </body>
//       </div>

//     );
//   }
// }
// export default Schedule;


import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { variables } from './Variables.js';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useAuth } from './AuthProvider'; // Using the custom hook from your AuthProvider

function Schedule() {
  const [stafet, setStafet] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const { user, isAuthenticated } = useAuth(); // Accessing user and authentication status using useAuth

  useEffect(() => {
    if (isAuthenticated && user.roli === 'Staf') {
      refreshList();
    }
  }, [isAuthenticated, user.roli]); // Adding user.roli as a dependency to react to changes in role

  const refreshList = () => {
    fetch(variables.API_URL + 'stafi')
      .then(response => response.json())
      .then(data => {
        setStafet(data);
      });

    fetch(variables.API_URL + 'StafiSchedule')
      .then(response => response.json())
      .then(data => {
        setSchedules(data);
      });
  };

  if (!isAuthenticated || user.roli !== "Staf") {
    // Redirect to login if not authenticated or not a Staf
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="container-fluid" style={{ marginLeft: '110px' }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Emri</th>
              <th>Mbiemri</th>
              <th>Schedule</th>
            </tr>
          </thead>
          <tbody>
            {stafet.map(staf =>
              <tr key={staf.IDStafi}>
                <td>{staf.IDStafi}</td>
                <td>{staf.Emri}</td>
                <td>{staf.Mbiemri}</td>
                <td>{staf.StafiSchedule}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default Schedule;
