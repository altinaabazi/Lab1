import React, { useState, useEffect, Fragment } from 'react';
import { Table, Button, Modal, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const KlientiDashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([]);
    const [editData, setEditData] = useState({
        ID: null, Emri: '', Mbiemri: '', GjiniaId: '', QytetiId: '', Email: '', Password: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:32596/api/Klienti')
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.error('Error fetching client data:', error);
            toast.error('Error fetching client data');
        });
    };



    const handleSaveChanges = () => {
        axios.put(`http://localhost:32596/api/Klienti/${editData.ID}`, editData)
        .then((response) => {
            fetchData();
            toast.success('Client information updated');
            handleClose(); // Close the modal after successful update
        })
        .catch((error) => {
            console.error('Error updating client information:', error.response);
            toast.error('Error updating client information');
        });
    };
    const handleEdit = (ID) => {
        handleShow();
        const klient = data.find(k => k.ID === ID);
        setEditData(klient);
    };
    const handleDelete = (ID) => {
        if (window.confirm('Are you sure you want to delete this client?')) {
            axios.delete(`http://localhost:32596/api/Klienti/${ID}`)
            .then((response) => {
                fetchData();
                toast.success('Client deleted');
            })
            .catch((error) => {
                console.error('Error deleting client:', error);
                toast.error('Error deleting client');
            });
        }
    };

    return (
        <Fragment>
            <ToastContainer />
            {/* <Container>
                <Row className="mb-3">                 
                </Row>
            </Container> */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Emri</th>
                        <th>Mbiemri</th>
                        <th>Gjinia</th>
                        <th>Qyteti</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.ID}</td>
                            <td>{item.Emri}</td>
                            <td>{item.Mbiemri}</td>
                            <td>{item.GjiniaId}</td>
                            <td>{item.QytetiId}</td>
                            <td>{item.Email}</td>
                            <td>{item.Password}</td>
                            <td>
                                <Button variant="primary" onClick={() => handleEdit(item.ID)}>Edit</Button> &nbsp;
                                <Button variant="danger" onClick={() => handleDelete(item.ID)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
                <Col>
                    <Button href='/addKlienti' variant="primary">Add Client</Button>
                    </Col>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Client</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {Object.keys(editData).map((key) => (
                        key !== 'ID' && (
                            <Row key={key} className="mb-3">
                                <Col>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={key}
                                        value={editData[key]}
                                        onChange={(e) => setEditData({ ...editData, [key]: e.target.value })}
                                    />
                                </Col>
                            </Row>
                        )
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}

export default KlientiDashboard;
