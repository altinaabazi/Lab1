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
  const [showModal, setShowModal] = useState(false); // Shtoni gjendjen për modalin

  useEffect(() => {
    fetchLibrat();
  }, []);

  const fetchLibrat = async () => {
    try {
      const response = await fetch(variables.API_URL + 'libri/GetAllLibri');
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const data = await response.json();
      setLibrat(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  const addToCart = (libri) => {
    setShporta([...shporta, libri]);
    setShowModal(true); // Tregoni modalin pasi një libër është shtuar në shportë
  };

  const handleCloseModal = () => {
    setShowModal(false); // Mbyllni modalin
  };

  if (loading) {
    return <div className="spinner text-center">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (
    <div>
      <Header />
      <div >
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="row"  style={{ margin: '30px 0' }}>
                <h1>Librat</h1>
              {librat.map(libri => (
                <div className="col-md-4 mb-4" key={libri.ID}>
                  <div className="card h-100 shadow-sm">
                    <img src={variables.API_URL + 'libri/GetFoto/' + libri.ID} alt={libri.Titulli} className="card-img-top" />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{libri.Titulli}</h5>
                      <p className="card-text flex-grow-1">{libri.Pershkrimi}</p>
                      <div className="mt-auto">
                        <Link to={`/libri/${libri.ID}`} className="btn btn-primary mr-2">
                          Shiko Detajet
                        </Link>
                        <button onClick={() => addToCart({
                          ID: libri.ID,
                          Titulli: libri.Titulli,
                          Pershkrimi: libri.Pershkrimi,
                          image: variables.API_URL + 'libri/GetFoto/' + libri.ID
                        })} className="btn btn-success">
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
      
      {/* Modal */}
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
    </div>
  );
}

export default Home;
