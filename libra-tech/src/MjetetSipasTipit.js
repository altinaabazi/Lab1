import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { variables } from './Variables';
import Header from './Header';
import Footer from './Footer';
import { Modal, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';

function MjetetSipasTipit() {
    const { tipi } = useParams();
    const [mjetet, setMjetet] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [shporta, setShporta] = useState([]);
    const [showModal, setShowModal] = useState(false); 
    const [wishList, setWishList] = useState([]);
    const [showWishListModal, setShowWishListModal] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        fetchMjetetByTipi(tipi);
    }, [tipi]);

    const fetchMjetetByTipi = async (tipi) => {
        try {
            const response = await fetch(variables.API_URL + `MjeteShkollore/tipi/${tipi}`);
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            const data = await response.json();
            setMjetet(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.message);
            setLoading(false);
        }
    };

    const addToCart = (mjeti) => {
        setShporta([...shporta, mjeti]);
        setShowModal(true);
    };
    const addToWishList = (libri) => {
        const wishList = JSON.parse(localStorage.getItem('WishList')) || [];
        wishList.push(libri);
        localStorage.setItem('WishList', JSON.stringify(wishList));
        setShowWishListModal(true);

      
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleCloseWishListModal = () => {
        setShowWishListModal(false);
    };

    if (loading) {
        return <div className="spinner text-center">Loading...</div>;
    }

    if (error) {
        return <div className="alert alert-danger text-center">{error}</div>;
    }

    return (
        <div>
            <Header />
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="row" style={{ margin: '20px 0' }}>
                            <h1>Mjetet për tipin: {tipi}</h1>
                            <div className="row">
                                {mjetet.map(mjeti => (
                                    <div className="col-md-4 mb-4" key={mjeti.ID}>
                                        <div className="card h-100 shadow-sm">
                                            <img
                                                src={variables.API_URL + 'MjeteShkollore/GetFoto/' + mjeti.ID}
                                                alt={mjeti.Tipi}
                                                className="card-img-top"
                                                style={{ width: '100%', height: '200px', objectFit: 'contain' }}
                                            />
                                            <div className="card-body d-flex flex-column">
                                                <h5 className="card-title">{mjeti.Tipi}</h5>
                                                <p className="card-text flex-grow-1">{mjeti.Pershkrimi}</p>
                                                <div className="mt-auto">
                                                    <Link to={`/MjeteShkollore/${mjeti.ID}`} className="btn btn-primary mr-2">
                                                        Detajet
                                                    </Link>

                                                    {user && user.roli === 'User' && (

                                                    <button onClick={() => addToCart({
                                                        ID: mjeti.ID,
                                                        Tipi: mjeti.Tipi,
                                                        Pershkrimi: mjeti.Pershkrimi,
                                                        image: variables.API_URL + 'MjeteShkollore/GetFoto/' + mjeti.ID
                                                    })} className="btn btn-success">
                                                        Shto në Shportë
                                                    </button>
                                                    )}

                                                    {user && user.roli === 'User' && (
                                                    <Link onClick={() => addToWishList(mjeti)} className="btn btn-outline-danger"  style={{marginLeft:'5px'}}>
                                                            <i className="fa fa-heart" aria-hidden="true"></i>
                                                    </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Shtimi në Shportë</Modal.Title>
                </Modal.Header>
                <Modal.Body>Libri është shtuar me sukses në shportë!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Mbylle
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showWishListModal} onHide={handleCloseWishListModal}>
                <Modal.Header closeButton>
                    <Modal.Title> WishList <i class="fa fa-check" aria-hidden="true"></i></Modal.Title>
                </Modal.Header>
<               Modal.Body>Produkti eshte shtuar me sukses ne listen e deshirave!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseWishListModal}>
                        Mbylle
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MjetetSipasTipit;
