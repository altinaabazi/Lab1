import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function Shporta({ shporta, removeFromCart, showModal, handleCloseModal, handleBuy }) {
  const total = shporta.reduce((sum, item) => sum + item.price, 0);

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Shporta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {shporta.length === 0 ? (
          <div className="text-center">Shporta është bosh.</div>
        ) : (
          <div>
            <ul className="list-group mb-3">
              {shporta.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <img
                      src={item.image}
                      alt={item.Titulli}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      className="mr-3"
                    />
                    {item.Titulli || item.Tipi}
                  </div>
                  <div>
                    {item.price}€
                    <button className="btn btn-danger btn-sm ml-3" onClick={() => removeFromCart(index)}>Hiqe</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between align-items-center">
              <strong>Total:</strong>
              <strong>{total}€</strong>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Mbylle
        </Button>
        {shporta.length > 0 && (
          <Button variant="primary" onClick={handleBuy}> {/* Këtu shtoni prop-in e re për handleBuy */}
            Blej
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default Shporta;
