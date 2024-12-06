import React from 'react';
import '../styles/register-page.scss';

const RegisterPage: React.FC = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">BMS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container registration-container">
                <div className="row justify-content-center w-100">
                    <div className="col-md-8 col-lg-6">
                        <div className="card">
                            <div className="card-header text-center">
                                <h2>Create Account</h2>
                                <p className="card-subtitle">Join our broker management platform</p>
                            </div>
                            <div className="card-body">
                                {/* Replace with a conditional rendering based on success state */}
                                {false && (
                                    <div className="alert alert-info">
                                        Registration successful! You can now login to your account.
                                    </div>
                                )}
                                <form method="post" role="form" action="/register/save">
                                    <div className="input-group">
                                        <div className="form-group">
                                            <label className="form-label">First Name</label>
                                            <input className="form-control" id="firstName" name="firstName" placeholder="John" type="text" />
                                            <p className="text-danger"></p>
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Last Name</label>
                                            <input className="form-control" id="lastName" name="lastName" placeholder="Doe" type="text" />
                                            <p className="text-danger"></p>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Email Address</label>
                                        <input className="form-control" id="email" name="email" placeholder="john@example.com" type="email" />
                                        <p className="text-danger"></p>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Password</label>
                                        <input className="form-control" id="password" name="password" placeholder="••••••••" type="password" />
                                        <p className="text-danger"></p>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Phone Number</label>
                                        <input className="form-control" id="phoneNumber" name="phoneNumber" placeholder="+1 (555) 000-0000" type="text" />
                                        <p className="text-danger"></p>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Date of Birth</label>
                                        <input className="form-control" id="dateOfBirth" name="dateOfBirth" type="date" />
                                        <p className="text-danger"></p>
                                    </div>

                                    <div className="form-group mb-4">
                                        <button className="btn btn-primary" type="submit">Create Account</button>
                                    </div>

                                    <div className="text-center">
                                        Already have an account? <a className="login-link" href="/login">Login here</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;