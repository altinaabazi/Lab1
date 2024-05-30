import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from './AuthService'; // Adjusted import path

function Register() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();

        // Basic validation
        if (!name.trim() || !lastname.trim() || !gender.trim() || !city.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        try {
            console.log('Registering user with data:', { name, lastname, gender, city, email, password, confirmPassword });
            const response = await register({ name, lastname, gender, city, email, password, confirmPassword });

            if (response === 'Registration successful') {
                console.log('Registration successful');
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
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row no-gutters">
                                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                                        <img src="img/book.png" alt="foto" width="550" height="600" />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                                            </div>
                                            <form className="user" onSubmit={handleRegister}>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-user"
                                                        placeholder="First Name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-user"
                                                        placeholder="Last Name"
                                                        value={lastname}
                                                        onChange={(e) => setLastname(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-user"
                                                        placeholder="Gender"
                                                        value={gender}
                                                        onChange={(e) => setGender(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-user"
                                                        placeholder="City"
                                                        value={city}
                                                        onChange={(e) => setCity(e.target.value)}
                                                    />
                                                </div>
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
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-user"
                                                        id="exampleRepeatPassword"
                                                        placeholder="Confirm Password"
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                    />
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-user btn-block">
                                                    Register
                                                </button>
                                                <hr />
                                            </form>
                                            <div className="text-center">
                                                <a className="small" href="forgot-password">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="login">Already have an account? Login!</a>
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

export default Register;