import React, { useState } from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from React Router

import Header from './Header';
import Footer from './Footer';

const AddStaffForm = ({ fetchData }) => {
    const navigate = useNavigate();

    const [newStaff, setNewStaff] = useState({
        Emri: '', Mbiemri: '', ZipCode: '', Gjinia: '', Sektori: '', Orari: '', Pervoja: ''
    });

    const handleSave = () => {
        axios.post('http://localhost:5170/api/Stafi', newStaff)
            .then((response) => {
                fetchData();
                toast.success('New staff member added');
                setNewStaff({ Emri: '', Mbiemri: '', ZipCode: '', Gjinia: '', Sektori: '', Orari: '', Pervoja: '' });
                navigate('/stafi');
            })
            .catch((error) => {
                console.error('Error adding staff member:', error);
                toast.error('Error adding staff member');
            });
    };

    return (
        <div>
            <Header />
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <h2>Add New Staff Member</h2>
                        {Object.keys(newStaff).map((key) => (
                            key !== 'IDStafi' && (
                                <Row key={key} className="mb-3">
                                    <Col>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder={key}
                                            value={newStaff[key]}
                                            onChange={(e) => setNewStaff({ ...newStaff, [key]: e.target.value })}
                                        />
                                    </Col>
                                </Row>
                            )
                        ))}
                        <Row className="mb-3">
                            <Col>
                                <Button variant="primary" onClick={handleSave}>Add Staff</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to="/stafi">
                                    <Button variant="secondary">Back</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default AddStaffForm;
