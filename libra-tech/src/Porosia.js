import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar.js';
import { variables } from './Variables';

const Porosia = () => {
  const [klienti, setKlienti] = useState(null);
  const [porosia, setPorosia] = useState({
    KlientiID: 0,
    Librat: [],
    MjetetShkollore: [],
    CmimiTotal: 0,
    Data: new Date(),
  });

  useEffect(() => {
    // Merr klientin e kyqur nga localStorage
    const currentClient = JSON.parse(localStorage.getItem('currentClient'));
    setKlienti(currentClient);

    // Merr produktet nga shporta në localStorage
    const shporta = JSON.parse(localStorage.getItem('shporta')) || [];
    const libra = shporta.filter(produkt => produkt.hasOwnProperty('Titulli'));
    const mjetetShkollore = shporta.filter(produkt => !produkt.hasOwnProperty('Titulli'));

    // Llogarit cmimin total të porosisë
    let total = 0;
    libra.forEach(libri => (total += libri.Cmimi));
    mjetetShkollore.forEach(mjeti => (total += mjeti.Cmimi));

    // Ruaj të dhënat e porosisë në gjendjen e komponentit
    setPorosia(prevState => ({
      ...prevState,
      KlientiID: currentClient ? currentClient.ID : 0,
      Librat: libra,
      MjetetShkollore: mjetetShkollore,
      CmimiTotal: total,
    }));
  }, []);

  const handleSubmit = async () => {
    try {
      // Dërgo kërkesën për të krijuar porosinë në server
      const response = await axios.post(`${variables.API_URL}Porosia`, porosia, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      });
      if (response.status === 200) {
        // Fshij shportën nga localStorage
        localStorage.removeItem('shporta');
        // Pastro gjendjen e komponentit pasi porosia është krijuar me sukses
        setPorosia({
          KlientiID: 0,
          Librat: [],
          MjetetShkollore: [],
          CmimiTotal: 0,
          Data: new Date(),
        });
        alert('Porosia u krijuar me sukses!');
      }
    } catch (error) {
      console.error('Error creating porosi:', error);
      alert('Diçka shkoi gabim! Provoni përsëri.');
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="container-fluid" style={{ marginLeft: '110px' }}>
        <button
  type="button"
  className="btn btn-primary"
  onClick={handleSubmit}
  disabled={!porosia.KlientiID || porosia.Librat.length === 0}
>
  Krijo Porosi
</button>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Porosia;
