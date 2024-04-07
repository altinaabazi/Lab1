import React, { useState, useEffect, Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const Books = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Titulli, setTitulli] = useState('')
    const [Autori,setAutori] = useState('')
    const [VitiPublikimit,setVitiPubblikimit] = useState('')
    const [Cmimi,setCmimi] = useState('')
    const [Sasia,setSasia] = useState('')

    const [editISBN, setEditISBN] = useState('')
    const [editTitulli, setEditTitulli] = useState('')
    const [editAutori,setEditAutori] = useState('')
    const [editVitiPublikimit,setEditVitiPubblikimit] = useState('')
    const [editCmimi,setEditCmimi] = useState('')
    const [editSasia,setEditSasia] = useState('')



    const empdata = [
        {
            ISBN: 123,
            Titulli: 'a',
            Autori: 'a',
            VitiPublikimit: 2020,
            Cmimi: 2.0,
            Sasia: 2
        }
    ]
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(empdata);
    }, [])

    const handleEdit = (ISBN) => {
        // if (window.confirm('Are you sure to edit this book?') == true) {
        //     alert(ISBN);
        // }
        handleShow();

    }
    const handleDelete = (ISBN) => {
        if (window.confirm('Are you sure to delete this book?') == true) {
            alert(ISBN);
        }
    }
    const handleUpdate = () => {

    }

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col>
                    <input type='text' className='form-control' placeholder='Enter Titulli' value={Titulli}
                      onChange={(e)=> setTitulli(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='Enter Autori' value={Autori}
                      onChange={(e)=> setAutori(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='Enter VitiPublikimit' value={VitiPublikimit}
                      onChange={(e)=> setVitiPubblikimit(e.target.value)}/>

                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='Enter Cmimi' value={Cmimi}
                      onChange={(e)=> setCmimi(e.target.value)}/>

                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='Enter Sasia'value={Sasia}
                      onChange={(e)=> setSasia(e.target.value)}/>
                    </Col>
                    <Col>
                    <button className='btn btn-primary'>Submit</button>
                    </Col>
                     
                </Row>
            </Container>
            <br></br>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ISBN</th>
                        <th>Titulli</th>
                        <th>Autori</th>
                        <th>VitiPublikimit</th>
                        <th>Cmimi</th>
                        <th>Sasia</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 ?
                            data.map((Item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{Item.ISBN}</td>
                                        <td>{Item.Titulli}</td>
                                        <td>{Item.Autori}</td>
                                        <td>{Item.VitiPublikimit}</td>
                                        <td>{Item.Cmimi}</td>
                                        <td>{Item.Sasia}</td>
                                        <td colSpan={2}>
                                            <button className="btn btn-primary" onClick={() => handleEdit(Item.ISBN)}>Edit</button> &nbsp;
                                            <button className="btn btn-danger" onClick={() => handleDelete(Item.ISBN)}>Delete</button>
                                        </td>

                                    </tr>
                                )
                            })
                            :
                            'Loading...'
                    }


                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row>
                <Col>
                    <input type='text' className='form-control' placeholder='Enter Titulli' value={editTitulli}
                      onChange={(e)=> setEditTitulli(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='Enter Autori' value={editAutori}
                      onChange={(e)=> setEditAutori(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='Enter VitiPublikimit' value={editVitiPublikimit}
                      onChange={(e)=> setEditVitiPubblikimit(e.target.value)}/>

                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='Enter Cmimi' value={editCmimi}
                      onChange={(e)=> setEditCmimi(e.target.value)}/>

                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='Enter Sasia'value={editSasia}
                      onChange={(e)=> setEditSasia(e.target.value)}/>
                    </Col>
            
                     
                </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        </Fragment>
    )

}
export default Books;
