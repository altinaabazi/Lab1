import React, { useState, useEffect } from 'react';
import './Profile.css';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { variables } from './Variables';

const UserProfileDisplay = () => {
  const [user, setUser] = useState({
    ID: localStorage.getItem('ID') || '',
    Emri: localStorage.getItem('Emri') || '',
    Mbiemri: localStorage.getItem('Mbiemri') || '',
    KlientiGjinia: localStorage.getItem('KlientiGjinia') || '',
    KlientiQyteti: localStorage.getItem('KlientiQyteti') || '',
    KlientiRoli: localStorage.getItem('KlientiRoli') || 'User', // Assuming default role is 'User'
    Email: localStorage.getItem('Email') || '',
    Password: localStorage.getItem('Password') || '', // Assuming password is stored as well
  });

  const [gjinite, setGjinite] = useState([]);
  const [qytetet, setQytetet] = useState([]);
  const [modalTitle, setModalTitle] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchGjinite = async () => {
      try {
        const response = await fetch(variables.API_URL + 'KlientiGjinia');
        const data = await response.json();
        setGjinite(data);
      } catch (error) {
        console.error('Error fetching gender data:', error);
      }
    };

    const fetchQytetet = async () => {
      try {
        const response = await fetch(variables.API_URL + 'KlientiQyteti');
        const data = await response.json();
        setQytetet(data);
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    fetchGjinite();
    fetchQytetet();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting user data:', user); // Logging user data before submission
      const response = await fetch(variables.API_URL + 'Klienti', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: user.ID,
          emri: user.Emri,
          mbiemri: user.Mbiemri,
          klientiGjinia: user.KlientiGjinia,
          klientiQyteti: user.KlientiQyteti,
          klientiRoli: user.KlientiRoli,
          email: user.Email,
          password: user.Password,
        }),
      });

      console.log('Response:', response); // Logging response

      if (response.ok) {
        alert('Profile updated successfully');
        setShowModal(false);
        localStorage.setItem('Emri', user.Emri);
        localStorage.setItem('Mbiemri', user.Mbiemri);
        localStorage.setItem('KlientiGjinia', user.KlientiGjinia);
        localStorage.setItem('KlientiQyteti', user.KlientiQyteti);
        localStorage.setItem('Email', user.Email);
        localStorage.setItem('KlientiRoli', user.KlientiRoli);
      } else {
        console.error('Failed to update profile:', response.statusText);
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  const openModal = () => {
    setModalTitle('Edit Profile');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
       
        <div className="container-fluid"  style={{ marginLeft: '110px' }}>
         
          <div>
          <h2>My Profile</h2>
          <br></br>
          
            <p><strong>First Name:</strong> {user.Emri}</p>
            <p><strong>Last Name:</strong> {user.Mbiemri}</p>
            <p><strong>Gender:</strong> {user.KlientiGjinia}</p>
            <p><strong>City:</strong> {user.KlientiQyteti}</p>
            <p><strong>Email:</strong> {user.Email}</p>
            <button onClick={openModal} className="btn btn-primary">Edit Profile</button>
          </div>

          {showModal && (
            <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{modalTitle}</h5>
                    <button type="button" className="btn-close" onClick={closeModal}></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="Emri"
                          value={user.Emri}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="Mbiemri"
                          value={user.Mbiemri}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select
                          className="form-select"
                          name="KlientiGjinia"
                          value={user.KlientiGjinia}
                          onChange={handleChange}
                        >
                          <option value="">Select</option>
                          {gjinite.map((gjinia) => (
                            <option key={gjinia.Id} value={gjinia.Gjinia}>{gjinia.Gjinia}</option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">City</label>
                        <select
                          className="form-select"
                          name="KlientiQyteti"
                          value={user.KlientiQyteti}
                          onChange={handleChange}
                        >
                          <option value="">Select</option>
                          {qytetet.map((qyteti) => (
                            <option key={qyteti.Id} value={qyteti.Qyteti}>{qyteti.Qyteti}</option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="Email"
                          value={user.Email}
                          onChange={handleChange}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">Save changes</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfileDisplay;
