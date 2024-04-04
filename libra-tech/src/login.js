import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Basic validation
        if (!email.trim() || !password.trim()) {
            setErrorMessage('Please enter both email and password.');
            return;
        }

        // If validation passes, you can proceed with login logic
        // For now, just log the email and password
        console.log('Email:', email);
        console.log('Password:', password);
        
        // Reset fields and error message after submission
        setEmail('');
        setPassword('');
        setErrorMessage('');
    };

    return (
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
                                        <form className="user" onSubmit={handleSubmit}>
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
                                            <button type="submit" className="btn btn-primary btn-user btn-block">
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
    );
}

export default Login;
