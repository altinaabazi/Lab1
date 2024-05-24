import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { variables } from './Variables';
import Header from './Header';
import Footer from './Footer';

function DetajetELibrit() {
  const [libri, setLibri] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchLibriDetails();
  }, []);

  const fetchLibriDetails = async () => {
    try {
      const response = await fetch(variables.API_URL + `libri/${id}`);
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const data = await response.json();
      setLibri(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!libri) {
    return <div className="error">Libri nuk u gjet.</div>;
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h1>{libri.Titulli}</h1>
        <div className="row">
          <div className="col-md-4">
            <img src={variables.API_URL + 'libri/GetFoto/' + libri.ID} alt={libri.Titulli} className="img-fluid" />
          </div>
          <div className="col-md-8">
            <p><strong>Autori:</strong> {libri.Autori}</p>
            <p><strong>Pershkrimi:</strong> {libri.Pershkrimi}</p>
            <p><strong>Kategoria:</strong> {libri.Kategoria}</p>
            <p><strong>Viti i Publikimit:</strong> {libri.VitiPublikimit}</p>
            <p><strong>Gjuha:</strong> {libri.Gjuha}</p>
            <p><strong>Cmimi:</strong> ${libri.Cmimi}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetajetELibrit;