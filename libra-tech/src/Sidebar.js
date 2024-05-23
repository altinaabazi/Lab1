import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
function Sidebar() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };

    return (
        <div>
            <body id="page-top">

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper" >

                    {/*  <!-- Sidebar --> */}
                    <ul className={style} id="accordionSidebar">

                        {/*  <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                            <div className="text-center d-none d-md-inline">
                                <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                            </div>
                        </a>


                        {/*   <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />

                        {/*  <!-- Nav Item - Dashboard --> */}

                        <li className="nav-item active">
                            <a className="nav-link" href="./home">
                                <i className="fa fa-home" aria-hidden="true"></ i>
                                <span>Home</span></a>
                            <Link className="nav-link" to="/dashboard">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span></Link>

                        </li>

                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/*   <!-- Heading --> */}


                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}

                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <span>User Profile</span>
                            </a>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <a className="collapse-item" href="buttons.html">My Profile</a>
                                    <a className="collapse-item" href="cards.html">Edit Profile</a>
                                </div>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Utilities Collapse Menu --> */}

                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLibra"
                                aria-expanded="true" aria-controls="collapseLibra">
                                <i className="fa fa-list"></i>
                                <span>Libra</span>
                            </a>
                            <div id="collapseLibra" className="collapse" aria-labelledby="headingLibra"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Category:</h6>
                                    <a className="collapse-item" href="#">Art</a>
                                    <a className="collapse-item" href="#">Biography</a>
                                    <a className="collapse-item" href="#">Dictionary</a>
                                    <a className="collapse-item" href="#">Fashion</a>
                                    <a className="collapse-item" href="#">History</a>
                                    <a className="collapse-item" href="#">Science</a>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseMjeteShkollore"
                                aria-expanded="true" aria-controls="collapseMjeteShkollore">
                                <i className="fa fa-list"></i>
                                <span>Mjete Shkollore</span>
                            </a>
                            <div id="collapseMjeteShkollore" className="collapse" aria-labelledby="headingMjeteShkollore"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Tipi:</h6>
                                    <a className="collapse-item" href="#">Fletore</a>
                                    <a className="collapse-item" href="#">Qante</a>
                                    <a className="collapse-item" href="#">Aksesore te ndryshem</a>
                                </div>
                            </div>
                        </li>


                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/* <!-- Heading --> */}
                        <div className="sidebar-heading">
                            ...
                        </div>

                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Pages</span>
                            </a>
                            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Login Screens:</h6>
                                    <a className="collapse-item" href="/">Login</a>
                                    <a className="collapse-item" href="register">Register</a>
                                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                                    <a className="collapse-item" href="/stafi">Staff Dashboard</a>
                                    <div className="collapse-divider"></div>

                                </div>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Charts --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="charts.html">
                                <i className="fas fa-fw fa-chart-area"></i>
                                <span>Charts</span></a>
                        </li>

                        {/*  <!-- Nav Item - Tables --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="tables.html">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Tables</span></a>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider d-none d-md-block" />

                        {/*   <!-- Sidebar Toggler (Sidebar) --> */}
                        {/*   <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div> */}

                        {/*  <!-- Sidebar Message --> */}
                        {/* <div className="sidebar-card d-none d-lg-flex">
                            <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
                            <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                        </div> */}

                    </ul>
                    {/*  <!-- End of Sidebar --> */}

                    {/*  <!-- Content Wrapper --> */}
                   

                    </div>      
            </body>
        </div>
    )
}

export default Sidebar;