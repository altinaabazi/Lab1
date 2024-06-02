import React, { Component } from 'react';
import { variables } from './Variables.js';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar.js';

export class Porosia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      librat: [],
      klientet: [], // Lista e klienteve për dropdown
      porosia: {
        LibriID: 0,
        KlientiID: 0,
        Sasia: 1,
      },
      currentClient: JSON.parse(localStorage.getItem('currentClient')),
      isFormValid: false,
    };
  }

  componentDidMount() {
    this.refreshList();
    this.fetchKlientet(); // Merrni listën e klienteve në montimin e komponentit
  }

  refreshList() {
    // Kërkesa për të marrë listën e librave vetëm për përdoruesit e autorizuar
    fetch(variables.API_URL + 'libri', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ librat: data });
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  fetchKlientet() {
    // Kërkesa për të marrë listën e klienteve
    fetch(variables.API_URL + 'klientet', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ klientet: data });
      })
      .catch(error => console.error('Error fetching klientet:', error));
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      porosia: {
        ...prevState.porosia,
        [name]: value
      }
    }), () => this.validateForm());
  }

  validateForm() {
    const { LibriID, KlientiID, Sasia } = this.state.porosia;
    const isFormValid = LibriID && KlientiID && Sasia;
    this.setState({ isFormValid });
  }

  handleSubmit = () => {
    const { porosia } = this.state;
    // Kërkesa për të krijuar një porosi të re
    fetch(variables.API_URL + 'krijoPorosi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify(porosia)
    })
      .then(response => response.json())
      .then(data => {
        alert('Porosia u krijuar me sukses!');
        // Pastro formën dhe rifresko listën e porosive në rast suksesi
        this.setState({
          porosia: {
            LibriID: 0,
            KlientiID: 0,
            Sasia: 1,
          },
          isFormValid: false
        });
        this.refreshList();
      })
      .catch(error => {
        console.error('Error creating porosi:', error);
        alert('Diçka shkoi gabim! Provoni përsëri.');
      });
  }

  render() {
    const { librat, klientet, porosia, currentClient, isFormValid } = this.state;

    return (
      <div>
        <Header />
        <div className="container">
          <Sidebar />
          <div className="container-fluid" style={{ marginLeft: '110px' }}>
            <div className="form-group">
              <label htmlFor="LibriID">Zgjidhni librin:</label>
              <select
                id="LibriID"
                name="LibriID"
                className="form-control"
                value={porosia.LibriID}
                onChange={this.handleChange}
              >
                <option value="">Zgjidhni një libër...</option>
                {librat.map(libr => (
                  <option key={libr.ID} value={libr.ID}>{libr.Titulli}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="KlientiID">Zgjidhni klientin:</label>
              <select
                id="KlientiID"
                name="KlientiID"
                className="form-control"
                value={currentClient ? currentClient.ID : ""}
                onChange={this.handleChange}
                disabled={currentClient !== null} // Klienti nuk mund të ndryshohet nëse është zggjedhur automatikisht
>
<option value="">Zgjidhni një klient...</option>
{klientet.map(klient => (
<option key={klient.ID} value={klient.ID}>{klient.Emri}</option>
))}
</select>
</div>
<div className="form-group">
<label htmlFor="Sasia">Sasia:</label>
<input
             type="number"
             id="Sasia"
             name="Sasia"
             className="form-control"
             value={porosia.Sasia}
             onChange={this.handleChange}
           />
</div>
<button
           type="button"
           className="btn btn-primary"
           onClick={this.handleSubmit}
           disabled={!isFormValid}
         >
Krijo Porosi
</button>
</div>
</div>
<Footer />
</div>
);
}
}

export default Porosia;
