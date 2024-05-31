import React, { useState, useEffect } from 'react';
import { variables } from './Variables';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Modal, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';

function Home() {
  const [librat, setLibrat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shporta, setShporta] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchLibrat();
  }, []);

  const fetchLibrat = async () => {
    try {
      const response = await fetch(variables.API_URL + 'libri/GetLibratMeTeRinje');
      if (!response.ok) {
        throw new Error('Gabim gjatë marrjes së të dhënave');
      }
      const data = await response.json();
      setLibrat(data);
      setLoading(false);
    } catch (error) {
      console.error('Gabim gjatë marrjes së të dhënave:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  const addToCart = (libri) => {
    setShporta([...shporta, libri]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const [kategorite, setKategorite] = useState([]);


  useEffect(() => {
    fetchKategorite();
  }, []);

  const fetchKategorite = async () => {
    try {
      const response = await fetch(variables.API_URL + 'kategoria');
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const data = await response.json();
      setKategorite(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
      setLoading(false);
    }
  };
  
  if (loading) {
    return <div className="spinner text-center">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }


  return (
    <div>
      <style>
        {`
          .card {
            transition: transform 0.2s, box-shadow 0.2s;
            border: none;
            border-radius: 10px;
            overflow: hidden;
          }

          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }

          .card-body {
            background-color: #f8f9fa;
            padding: 20px;
          }

          .card-footer {
            background-color: #ffffff;
          }

          .card-title {
            font-size: 1.5rem;
            color: #343a40;
          }

          .text-decoration-none {
            text-decoration: none;
          }
        `}
      </style>
      <Header />
      <div>
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="row" style={{ margin: '20px 0' }}>
              <div className="col-12">
                <h1 className="mb-4 text-center">Kategoritë</h1>
                <div className="card-deck">
                  {kategorite.map(kategoria => (
                    <div key={kategoria.ID} className="col-md-4 mb-4">
                      <Link to={`/kategoria/${kategoria.kategoria}/librat`} className="text-decoration-none">
                        <div className="card h-100">
                          <div className="card-body text-center">
                            <h5 className="card-title">{kategoria.kategoria}</h5>
                          </div>
                          <div className="card-footer">
                            <small className="text-muted">Kliko për më shumë</small>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              </div>




              <div className="row" style={{ margin: '20px 0' }}>




                <h1>Librat Me Te Rinje</h1>
                {librat.map(libri => (
                  <div className="col-md-4 mb-4" key={libri.ID}>
                    <div className="card h-100 shadow-sm">
                      <img
                        src={variables.API_URL + 'libri/GetFoto/' + libri.ID}
                        alt={libri.Titulli}
                        className="card-img-top"
                        style={{ width: '100%', height: '200px', objectFit: 'contain' }} // Stilet inline
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{libri.Titulli}</h5>
                        <p className="card-text flex-grow-1">{libri.ShtepiaBotuese}</p>
                        <div className="mt-auto">
                          <Link to={`/libri/${libri.ID}`} className="btn btn-primary mr-2">
                            Shiko Detajet
                          </Link>
                          <button
                            onClick={() => addToCart({
                              ID: libri.ID,
                              Titulli: libri.Titulli,
                              Pershkrimi: libri.Pershkrimi,
                              image: variables.API_URL + 'libri/GetFoto/' + libri.ID
                            })}
                            className="btn btn-success"
                          >
                            Shto në Shportë
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Shtimi në Shportë</Modal.Title>
          </Modal.Header>
          <Modal.Body>Libri është shtuar me sukses në shportë!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Mbylle
            </Button>
          </Modal.Footer>
        </Modal>
      </div >
      );
}

      export default Home;

