import React, { useState , useEffect} from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Link } from 'react-router-dom'; // Import Link from React Router



const AddStaffForm = ({ fetchData }) => {
    const [newStaff, setNewStaff] = useState({
        Emri: '', Mbiemri: '', ZipCode: null, Gjinia: '', Pervoja: '', IDLibrari: null
    });

    
    const handleSave = () => {
        axios.post('http://localhost:32596/api/Stafi', newStaff)
            .then((response) => {
                fetchData();
                toast.success('New staff member added');
                setNewStaff({ Emri: '', Mbiemri: '', ZipCode: '', Gjinia: '', Pervoja: '', IDLibrari: '' });
            })
            .catch((error) => {
                console.error('Error adding staff member:', error);
                toast.error('Error adding staff member');
            });
    };
            
    return (
        
        <Container>
        <Row className="mb-3">
            {Object.keys(newStaff).map((key) => (
                key !== 'IDStafi' && (
                    <Col key={key}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={key}
                            value={newStaff[key]}
                            onChange={(e) => setNewStaff({ ...newStaff, [key]: e.target.value })}
                        />
                    </Col>
                )
            ))}
            <Col>
              <Button variant="primary" onClick={handleSave} href="/stafi">Add Staff</Button>
            </Col>
          
        </Row>
        <Row>
                <Col>
                    <Link to="/stafi">
                        <Button variant="secondary">Back</Button>
                    </Link>
                </Col>
            </Row>
    </Container>
    );
}

export default AddStaffForm;
