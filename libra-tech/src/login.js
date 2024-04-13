import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        // Basic validation
        if (!email.trim() || !password.trim()) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:32596/api/Klienti/Login', {
                Email: email,
                Password: password,
            });

            if (response.status === 200) {
                console.log('Login successful');
                // Redirect to dashboard or any other page after successful login
                navigate('/dashboard');
            } else {
                setErrorMessage('Login failed.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('Login failed.');
        }
    };

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <img src="img/book.png" alt="foto" width="400" height="600" />
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                                            </div>
                                            <form className="user" onSubmit={handleLogin}>
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-user"
                                                        id="exampleInputEmail"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..."
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-user"
                                                        id="exampleInputPassword"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                                <button type="submit" onSubmit={()=>handleLogin()} className="btn btn-primary btn-user btn-block">
                                                    Login
                                                </button>
                                                <hr />
                                            </form>
                                            <div className="text-center">
                                                <a className="small" href="forgot-password">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="register">Create an Account!</a>
                                            </div>
                                        </div>
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

export default Login;
