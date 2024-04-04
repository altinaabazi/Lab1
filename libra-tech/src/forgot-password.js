import React, { useState } from 'react';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic validation
        if (!email.trim()) {
            setErrorMessage('Please enter your email address.');
            return;
        }

        // If validation passes, you can proceed with the password reset logic
        // For now, just log the email
        console.log('Email:', email);

        // Reset fields and error message after submission
        setEmail('');
        setErrorMessage('');
    };

    return (
        <body className="bg-gradient-primary">
            <div className="container">
                {/* Outer Row */}
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* Nested Row within Card Body */}
                                <div className="row">
                                    <img src="img/book.png" alt="foto" width="400" height="600" />
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Forgot Your Password?</h1>
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
                                                <button type="submit" className="btn btn-primary btn-user btn-block">
                                                    Reset Password
                                                </button>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="/">Back to Login</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default ForgotPassword;
