import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from React Router

const AddKlientiForm = ({ fetchData }) => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const [newKlient, setNewKlient] = useState({
        Emri: '', Mbiemri: '', GjiniaId: '', QytetiId: '', Email: '', Password: ''
    });

    const handleSave = () => {
        axios.post('http://localhost:32596/api/Klienti', newKlient)
            .then((response) => {
                fetchData();
                setNewKlient({ Emri: '', Mbiemri: '', GjiniaId: '', QytetiId: '', Email: '', Password: '' });
                navigate('/klienti'); // Redirect to '/klienti' after adding client
            })
            .catch((error) => {
                console.error('Error adding client:', error);
            });
    };

    return (
        <Container>
            <Row className="mb-3">
                {Object.keys(newKlient).map((key) => (
                    key !== 'ID' && (
                        <Col key={key}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder={key}
                                value={newKlient[key]}
                                onChange={(e) => setNewKlient({ ...newKlient, [key]: e.target.value })}
                            />
                        </Col>
                    )
                ))}
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
        </Container>
    );
}

export default AddKlientiForm;
