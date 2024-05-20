import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Basic validation
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim() || !repeatPassword.trim()) {
            setErrorMessage('Please fill in all fields.');
            return;
        }
    
        if (password !== repeatPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:32596/api/Klienti/PostKlienti', {
                Emri: firstName,
                Mbiemri: lastName,
                Email: email,
                Password: password,
            });
    
            if (response.status === 200) {
                console.log('Registration successful');
                // Redirect to login page
                navigate('/');
            } else {
                setErrorMessage('Registration failed.'); 
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setErrorMessage('Registration failed.');
        }
    };
    
    return (
        <Fragment>
            <div className="container" style={{ padding: '3em' }}>
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <img src="img/book.png" alt="foto" className="img-fluid" />
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                                </div>
                                <form className="user" onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="text"
                                                className="form-control form-control-user"
                                                placeholder="First Name"
                                                value={firstName}
                                                onChange={(e) => setFirstName (e.target.value)}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <input
                                                type="text"
                                                className="form-control form-control-user"
                                                placeholder="Last Name"
                                                value={lastName}
                                                onChange={(e) => setLastName (e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control form-control-user"
                                            placeholder="Email Address"
                                            value={email}
                                            onChange={(e) => setEmail (e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="password"
                                                className="form-control form-control-user"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword (e.target.value)}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <input
                                                type="password"
                                                className="form-control form-control-user"
                                                placeholder="Repeat Password"
                                                value={repeatPassword}
                                                onChange={(e) => setRepeatPassword (e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" onSubmit={()=>handleSubmit()} className="btn btn-primary btn-user btn-block">
                                        Register Account
                                    </button>
                                    <hr />
                                </form>
                                <div className="text-center">
                                    <a className="small" href="/">Already have an account? Login!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    );
}

export default Register;
