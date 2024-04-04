import React, { useState } from 'react';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
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

        // If validation passes, you can proceed with registration logic
        // For now, just log the form data
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);

        // Reset fields and error message after submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setRepeatPassword('');
        setErrorMessage('');
    };

    return (
        <div className="container" style={{ padding: '3em' }}>
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <img src="img/book.png" alt="foto" width="400" height="600" />
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
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <input
                                                type="text"
                                                className="form-control form-control-user"
                                                placeholder="Last Name"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control form-control-user"
                                            placeholder="Email Address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="password"
                                                className="form-control form-control-user"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <input
                                                type="password"
                                                className="form-control form-control-user"
                                                placeholder="Repeat Password"
                                                value={repeatPassword}
                                                onChange={(e) => setRepeatPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-user btn-block">
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
    );
}

export default Register;
