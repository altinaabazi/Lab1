import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer.js';
import Header from './Header';
import Sidebar from './Sidebar.js';

function Shporta() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.ID !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <body id="page-top">
        <Header />
        <div className="container">

          <Sidebar />
          <div className="container-fluid" style={{ marginLeft: '110px', }}>

            <div className="container mt-5">
              <h1 className="text-center mb-4">Shporta</h1>
              {cart.length === 0 ? (
                <p className="text-center">Shporta është bosh</p>
              ) : (
                <div className="row">
                  {cart.map(libri => (
                    <div className="col-md-4 mb-4" key={libri.ID}>
                      <div className="card h-100 shadow-sm">
                        <img src={libri.image} alt={libri.Titulli} className="card-img-top" />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">{libri.Titulli}</h5>
                          <p className="card-text flex-grow-1">{libri.Pershkrimi}</p>
                          <button onClick={() => removeFromCart(libri.ID)} className="btn btn-danger mt-auto">
                            Hiq nga Shporta
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="text-center mt-4">
                <Link to="/home" className="btn btn-primary">Vazhdoni Blerjet</Link>
              </div>


            </div>

          </div >
        </div >
        <Footer />
      </body >
    </div >
  );
}

export default Shporta;
