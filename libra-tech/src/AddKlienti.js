import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 

import Header from './Header';
import Footer from './Footer';

const AddKlientiForm = ({ fetchData }) => {
    const navigate = useNavigate(); 

    const [newKlient, setNewKlient] = useState({
        Emri: '', Mbiemri: '', Gjinia: '', Qyteti: '',Roli: '', Email: '', Password: ''
    });

    const handleSave = () => {
        axios.post('http://localhost:5164/api/Klienti', newKlient)
            .then((response) => {
                fetchData();
                setNewKlient({ Emri: '', Mbiemri: '', GjiniaId: '', QytetiId: '', RoliId: '',Email: '', Password: '' });
                navigate('/klienti'); 
            })
            .catch((error) => {
                console.error('Error adding client:', error);
            });
    };

    return (
        <div>
            <Header /> 
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <h2>Add New Client</h2>
                        {Object.keys(newKlient).map((key) => (
                            key !== 'ID' && (
                                <Row key={key} className="mb-3">
                                    <Col>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder={key}
                                            value={newKlient[key]}
                                            onChange={(e) => setNewKlient({ ...newKlient, [key]: e.target.value })}
                                        />
                                    </Col>
                                </Row>
                            )
                        ))}
                        <Row className="mb-3">
                            <Col>
                                <Button onClick={handleSave} variant="primary">Add New Client</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to="/klienti">
                                    <Button variant="secondary">Back to Klienti</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer /> 
        </div>
    );
}

export default AddKlientiForm;
