import React, { useState, useEffect, Fragment } from 'react';
import { Table, Button, Modal, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

// Rest of your code...

const Books = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Titulli, setTitulli] = useState('')
    const [Autori,setAutori] = useState('')
    const [VitiPublikimit,setVitiPublikimit] = useState('')
    const [Cmimi,setCmimi] = useState('')
    const [Sasia,setSasia] = useState('')

    const [editID, setEditID] = useState('')
    const [editTitulli, setEditTitulli] = useState('')
    const [editAutori,setEditAutori] = useState('')
    const [editVitiPublikimit,setEditVitiPublikimit] = useState('')
    const [editCmimi,setEditCmimi] = useState('')
    const [editSasia,setEditSasia] = useState('')



    const empdata = [
        {
            ID: 1,
            Titulli: 'a',
            Autori: 'a',
            VitiPublikimit: 2020,
            Cmimi: 2.0,
            Sasia: 2
        }
    ]
    const [data, setData] = useState([]);

    useEffect(() => {
       getData();
    }, [])

    const getData = () =>{
        axios.get('http://localhost:32596/api/Book')
        .then((result)=>{
            setData(result.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const handleEdit = (ID) => {
        handleShow();
        axios.get(`http://localhost:32596/api/Book/${ID}`)
        .then((result)=>{
            setEditTitulli(result.data.Titulli);
            setEditAutori(result.data.Autori);
            setEditVitiPublikimit(result.data.VitiPublikimit);
            setEditCmimi(result.data.Cmimi);
            setEditSasia(result.data.Sasia);
            setEditID(ID);

        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    const handleSave =()=>{
        const url ='http://localhost:32596/api/Book';
        const data={

            "Titulli": Titulli,
            "Autori": Autori,
            "VitiPublikimit": VitiPublikimit,
            "Cmimi": Cmimi,
            "Sasia": Sasia
          }
          axios.post(url, data)
          .then((result)=>{
            getData();
            clear();
            toast.success('Book has been added');
          }).catch((error)=>{
            toast.error(error);
          })
    }
    const clear = ()=>{
        setTitulli('');
        setAutori('');
        setVitiPublikimit('');
        setCmimi('');
        setSasia('')
        setEditTitulli('');
        setEditAutori('');
        setEditVitiPublikimit('');
        setEditCmimi('');
        setEditSasia('');
        setEditID('');

    }
    const handleDelete = (id) => {
        if (window.confirm('Are you sure to delete this book?') == true) {
            axios.delete(`http://localhost:32596/api/Book/${id}`)
            .then((result)=>{
                if(result.status === 200 )
                {
                    toast.success('Book has been deleted');
                    getData();
                }
            }).catch((error)=>{
                toast.error(error);
              })
        }
    }

    const handleUpdate = () => {
        const url = `http://localhost:32596/api/Book/${editID}`
        const data={
            "ID": editID,
            "Titulli": editTitulli,
            "Autori": editAutori,
            "VitiPublikimit": editVitiPublikimit,
            "Cmimi": editCmimi,
            "Sasia": editSasia
          }
          axios.put(url, data)
          .then((result)=>{
            handleClose();
            getData();
            clear();
            toast.success('Book has been updated');
          }).catch((error)=>{
            toast.error(error);
          })
    }

    return (
        <Fragment>
            <ToastContainer/>
            <Container>
                <Row>
                    <Col>
                    <input type='text' className='form-control' placeholder='Titulli' value={Titulli}
                      onChange={(e)=> setTitulli(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='Autori' value={Autori}
                      onChange={(e)=> setAutori(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='VitiPublikimit' value={VitiPublikimit}
                      onChange={(e)=> setVitiPublikimit(e.target.value)}/>

                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='Cmimi' value={Cmimi}
                      onChange={(e)=> setCmimi(e.target.value)}/>

                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='Sasia'value={Sasia}
                      onChange={(e)=> setSasia(e.target.value)}/>
                    </Col>
                    <Col>
                    <button className='btn btn-primary' onClick={()=>handleSave() }>Submit</button>
                    </Col>
                     
                </Row>
            </Container>
            <br></br>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
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
                                        <td>{Item.ID}</td>
                                        <td>{Item.Titulli}</td>
                                        <td>{Item.Autori}</td>
                                        <td>{Item.VitiPublikimit}</td>
                                        <td>{Item.Cmimi}</td>
                                        <td>{Item.Sasia}</td>
                                        <td colSpan={2}>
                                            <button className="btn btn-primary" onClick={() => handleEdit(Item.ID)}>Edit</button> &nbsp;
                                            <button className="btn btn-danger" onClick={() => handleDelete(Item.ID)}>Delete</button>
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
                    <input type='text' className='form-control' placeholder='Titulli' value={editTitulli}
                      onChange={(e)=> setEditTitulli(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='Autori' value={editAutori}
                      onChange={(e)=> setEditAutori(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='VitiPublikimit' value={editVitiPublikimit}
                      onChange={(e)=> setEditVitiPublikimit(e.target.value)}/>

                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='Cmimi' value={editCmimi}
                      onChange={(e)=> setEditCmimi(e.target.value)}/>

                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='Sasia'value={editSasia}
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
