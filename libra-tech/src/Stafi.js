import React, { useState, useEffect, Fragment } from 'react';
import { Table, Button, Modal, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Header from './Header';
import Footer from './Footer';

const StaffDashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([]);
    const [editData, setEditData] = useState({
        IDStafi: null, Emri: '', Mbiemri: '', ZipCode: null, GjiniaId: '', SektoriId: '', OrariId: '', Pervoja: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:5164/api/Stafi')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching staff data:', error);
                toast.error('Error fetching staff data');
            });
    };

    const handleEdit = (IDStafi) => {
        handleShow();
        const staff = data.find(s => s.IDStafi === IDStafi);
        setEditData(staff);
    };

    const handleSaveChanges = () => {
        axios.put(`http://localhost:5164/api/Stafi/${editData.IDStafi}`, editData)
            .then((response) => {
                fetchData();
                toast.success('Staff member updated');
                handleClose();
            })
            .catch((error) => {
                console.error('Error updating staff member:', error);
                toast.error('Error updating staff member');
            });
    };

    const handleDelete = (IDStafi) => {
        if (window.confirm('Are you sure you want to delete this staff member?')) {
            axios.delete(`http://localhost:5164/api/Stafi/${IDStafi}`)
                .then((response) => {
                    fetchData();
                    toast.success('Staff member deleted');
                })
                .catch((error) => {
                    console.error('Error deleting staff member:', error);
                    toast.error('Error deleting staff member');
                });
        }
    };

    return (
        <Fragment>
            <Header />
            <ToastContainer />
            <Container>
                <Row className="mb-3">
                    {/* Additional content or actions can be placed here */}
                </Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>IDStafi</th>
                            <th>Emri</th>
                            <th>Mbiemri</th>
                            <th>ZipCode</th>
                            <th>Gjinia</th>
                            <th>Sektori</th>
                            <th>Orari</th>
                            <th>Pervoja</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.IDStafi}</td>
                                <td>{item.Emri}</td>
                                <td>{item.Mbiemri}</td>
                                <td>{item.ZipCode}</td>
                                <td>{item.GjiniaId}</td>
                                <td>{item.SektoriId}</td>
                                <td>{item.OrariId}</td>
                                <td>{item.Pervoja}</td>
                                <td>
                                    <Button variant="primary" onClick={() => handleEdit(item.IDStafi)}>Edit</Button> &nbsp;
                                    <Button variant="danger" onClick={() => handleDelete(item.IDStafi)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Row className="mb-3">
                    <Col>
                        <Button variant="primary" href="/addStaff">Add New Staff Member</Button>
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Staff</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {Object.keys(editData).map((key) => (
                            key !== 'IDStafi' && (
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
            </Container>
            <Footer />
        </Fragment>
    );
}

export default StaffDashboard;
