import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importoni Link nëse po përdorni React Router
import Shporta from './Shporta'; // Importoni komponentin e shportës

function Header() {
    const [style, setStyle] = useState("navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow");

    const changeStyle1 = () => {
        if (style === "navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow") {
            setStyle("navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow toggled1");
        } else {
            setStyle("navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow");
        }
    };

    return (
        <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
                {/* Topbar */}
                <nav className={style} style={{ paddingLeft: '500px' }}>
                    {/* Sidebar Toggle (Topbar) */}
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="d-flex justify-content-center">
                        {/* Search Form */}
                        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                    aria-label="Search" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* Cart Button */}
                        <div style={{ marginLeft: '400px', marginRight: 'auto',paddingTop:'23px' }}>
                        {/* Butoni i shportës */}
                        <Link to="/Shporta" className="nav-link">
                            <i className="fas fa-shopping-cart fa-fw" style={{ fontSize: '24px' }}></i>
                        </Link>
                    </div>
                    </div>
                    <div style={{ marginLeft: 'auto', marginRight: '30px' }}>
                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                                <img className="img-profile rounded-circle"
                                    src="img/undraw_profile.svg" />
                            </a>
                            {/*  <!-- Dropdown - User Information --> */}
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>
                    </div>
                </nav>
            </div>
            <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="/">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
