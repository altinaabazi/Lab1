import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic validation
        if (!email.trim()) {
            setErrorMessage('Please enter your email address.');
            return;
        }

        // Simulate sending confirmation email
        sendConfirmationEmail(email);

        // Show confirmation message
        setShowConfirmation(true);

        // Reset email and error message
        setEmail('');
        setErrorMessage('');

        // Redirect to login page after 2 seconds
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    // Function to simulate sending confirmation email
    const sendConfirmationEmail = (email) => {
        console.log(`Confirmation email sent to ${email}`);
    };

    return (
        <body className="bg-gradient-primary">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {showConfirmation && (
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="alert alert-success mt-3">A confirmation email has been sent to your email address.</div>
                                        </div>
                                    </div>
                                )}
                                <div className="row">
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
                                    <div className="col-lg-6">
                                        <img src="img/book.png" alt="foto" width="400" height="600" />
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
