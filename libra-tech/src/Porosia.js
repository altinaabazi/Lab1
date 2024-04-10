import React, { useState, useEffect, Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Porosia = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [KlientiID, setKlientiID] = useState('')
    const [CmimiTotal,setCmimiTotal] = useState('')
    const [Data,setdata] = useState('')
   

    // const empdata = [
    //     {
    //         ID: 1,
    //         KlientiID: 'a',
    //         Autori: 'a',
    //         VitiPublikimit: 2020,
    //         Cmimi: 2.0,
    //         Sasia: 2
    //     }
    // ]
    const [data, setData] = useState([]);

    useEffect(() => {
       getData();
    }, [])

    const getData = () =>{
        axios.get('http://localhost:32596/api/Porosia')
        .then((result)=>{
            setData(result.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const handleSave =()=>{
        const url ='http://localhost:32596/api/Book';
        const data={

            "KlientiID": KlientiID,
            "CmimiTotal": CmimiTotal,
            "Data": Data
           
          }
          axios.post(url, data)
          .then((result)=>{
            getData();
            clear();
            toast.success('Order has been added');
          }).catch((error)=>{
            toast.error(error);
          })
    }
    const clear = ()=>{
        setKlientiID('');
        setCmimiTotal('');
        setdata('');
    }
    const handleDelete = (id) => {
        if (window.confirm('Are you sure to delete this order?') == true) {
            axios.delete(`http://localhost:32596/api/Porosia/${id}`)
            .then((result)=>{
                if(result.status === 200 )
                {
                    toast.success('Order has been deleted');
                    getData();
                }
            }).catch((error)=>{
                toast.error(error);
              })
        }
    }


    return (
        <Fragment>
            <ToastContainer/>
            <Container>
                <Row>
                    <Col>
                    <input type='text' className='form-control' placeholder='KlientiID' value={KlientiID}
                      onChange={(e)=> setKlientiID(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='CmimiTotal' value={CmimiTotal}
                      onChange={(e)=> setCmimiTotal(e.target.value)}/>
                    </Col>
                    <Col>
                    <input type='text' className='form-control' placeholder='Data' value={Data}
                      onChange={(e)=> setdata(e.target.value)}/>
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
                        <th>KlientiID</th>
                        <th>CmimiTotal</th>
                        <th>Data</th>
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
                                        <td>{Item.KlientiID}</td>
                                        <td>{Item.CmimiTotal}</td>
                                        <td>{Item.Data}</td>
                                        <td colSpan={1}>
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

            {/* <Modal show={show} onHide={handleClose}>
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
            </Modal> */}


        </Fragment>
    )

}
export default Porosia;
