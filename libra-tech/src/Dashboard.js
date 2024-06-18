import { Link } from 'react-router-dom';
import './Dashboard.css';
import React, { useState, useEffect } from 'react';
import { variables } from './Variables';
import { useAuth } from './AuthProvider';
import axios from 'axios';

function Dashboard() {
    const { isAuthenticated, user, logout } = useAuth();
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
    const [porositeCount, setPorositeCount] = useState(null);
    const currentDate = new Date().toISOString().split('T')[0]; // Merr datën e sotme në formatin 'yyyy-MM-dd'

    useEffect(() => {
        // Kur komponenti ngarkohet, thirr funksionin për të numëruar porositët për datën aktuale
        countPorosite(currentDate);
    }, []); // [] siguron që useEffect thirret vetëm një herë në fillim

    const countPorosite = async (date) => {
        try {
            const response = await axios.get(`http://localhost:5170/api/Porosia/CountOnDate/${date}`);
            setPorositeCount(response.data);
        } catch (error) {
            console.error('Gabim gjatë kërkesës në backend:', error);
        }
    };
    const [totalLibrat, setTotalLibrat] = useState(0);

    useEffect(() => {
        fetchTotalLibrat();
    }, []);

    const fetchTotalLibrat = async () => {
        try {
            const response = await fetch(variables.API_URL + 'libri/TotalLibrat');
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            const data = await response.json();
            setTotalLibrat(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const [totalKlienti, setTotalKlienti] = useState(0);

    useEffect(() => {
        fetchtotalKlienti();
    }, []);

    const fetchtotalKlienti = async () => {
        try {
            const response = await fetch(variables.API_URL + 'klienti/TotalKlienti');
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            const data = await response.json();
            setTotalKlienti(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const [totalStafi, setTotalStafi] = useState(0);

    useEffect(() => {
        fetchtotalStafi();
    }, []);

    const fetchtotalStafi = async () => {
        try {
            const response = await fetch(variables.API_URL + 'stafi/TotalStafi');
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            const data = await response.json();
            setTotalStafi(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch(variables.API_URL + 'Kategoria');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Gabim gjatë marrjes së kategorive: ', error);
        }
    };
    const [totalMjetet, setTotalMjetet] = useState(0);

    useEffect(() => {
        fetchTotalMjetet();
    }, []);

    const fetchTotalMjetet = async () => {
        try {
            const response = await fetch(variables.API_URL + 'MjeteShkollore/TotalMjetet');
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            const data = await response.json();
            setTotalMjetet(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const [tipet, setTipi] = useState([]);

    useEffect(() => {
        fetchTipi();
    }, []);

    const fetchTipi = async () => {
        try {
            const response = await fetch(variables.API_URL + 'Tipi');
            const data = await response.json();
            setTipi(data);
        } catch (error) {
            console.error('Gabim gjatë marrjes së tipeve: ', error);
        }
    };


    return (
        <div>
            <body id="page-top">

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/*  <!-- Sidebar --> */}
                    <ul className={style} id="accordionSidebar">

                        {/*  <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-book"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">LibraTech</div>
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
                            <Link className="nav-link" to="/stafi">
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

                                    <div className="list-group">
                                        {categories.map(kategoria => (
                                            <Link key={kategoria.ID} to={`/kategoria/${kategoria.kategoria}/librat`} style={{ color: 'black' }} className="collapse-item">
                                                {kategoria.kategoria}
                                            </Link>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLibra"
                                aria-expanded="true" aria-controls="collapseLibra">
                                <i className="fa fa-list"></i>
                                <span>Mjete Shkollore</span>
                            </a>
                            <div id="collapseLibra" className="collapse" aria-labelledby="headingLibra"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">

                                    <div className="list-group">
                                        {tipet.map(tipi => (
                                            <Link key={tipi.TipiID} to={`/tipi/${tipi.TipiEmri}/mjeteshkollore`} style={{ color: 'black' }} className="collapse-item">
                                                {tipi.TipiEmri}
                                            </Link>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </li>


                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/* <!-- Heading --> */}
                       
                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        

                        {/* <!-- Nav Item - Charts --> */}
                        
                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider d-none d-md-block" />

                                             
                    </ul>
                    {/*  <!-- End of Sidebar --> */}

                    {/*  <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/*  <!-- Main Content --> */}
                        <div id="content">

                            {/*  <!-- Topbar --> */}
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                                    <i className="fa fa-bars"></i>
                                </button>

                                {/*  <!-- Topbar Search --> */}
                                <form
                                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
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

                                {/*  <!-- Topbar Navbar --> */}
                                <ul className="navbar-nav ml-auto">

                                    {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                                    {/* <li className="nav-item dropdown no-arrow d-sm-none">
                                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-search fa-fw"></i>
                                        </a> */}
                                    {/*   <!-- Dropdown - Messages --> */}
                                    {/* <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                            aria-labelledby="searchDropdown">
                                            <form className="form-inline mr-auto w-100 navbar-search">
                                                <div className="input-group">
                                                    <input type="text" className="form-control bg-light border-0 small"
                                                        placeholder="Search for..." aria-label="Search"
                                                        aria-describedby="basic-addon2" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary" type="button">
                                                            <i className="fas fa-search fa-sm"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </li> */}


                                    {/* <!-- Nav Item - User Information --> */}
                                    {isAuthenticated ? (
                                        <li className="nav-item dropdown no-arrow">
                                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="mr-2 d-none d-lg-inline text-dark font-weight-bold text-uppercase">{user.emri}</span>


                                            </a>
                                            {/*  <!-- Dropdown - User Information --> */}
                                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                                aria-labelledby="userDropdown">
                                                <a className="dropdown-item" href="#">
                                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                                    Profile
                                                </a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                    Logout
                                                </a>
                                            </div>
                                        </li>
                                    ) : (
                                        <Link className="btn btn-primary" to="/login">Login</Link>
                                    )}
                                </ul>

                            </nav>
                            {/*  <!-- End of Topbar --> */}

                            {/* <!-- Begin Page Content --> */}
                            <div className="container-fluid">

                                {/*  <!-- Page Heading --> */}
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                                </div>

                                {/*  <!-- Content Row --> */}

                                <div className="row">

                                    {/*  <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-primary shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-m font-weight-bold text-success text-uppercase mb-1">
                                                            Librat: </div>
                                                        <div className="h3 mb-0 font-weight-bold text-gray-800"> {totalLibrat}</div>
                                                    </div>
                                                    <div className="col-auto">
                                                    <a href='Libri' className="h5 mb-0 text-gray-800"> <i className="fas fa-book large-icon"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Earnings (Monthly) Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-primary shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-m font-weight-bold text-success text-uppercase mb-1">
                                                            MjetetShkollore: </div>
                                                        <div className="h3 mb-0 font-weight-bold text-gray-800"> {totalMjetet}</div>
                                                    </div>
                                                    <div className="col-auto">
                                                        
                                                    <a href='MjeteShkollore' className="h5 mb-0 text-gray-800"> <i className="fas fa-book large-icon"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-primary shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-m font-weight-bold text-success text-uppercase mb-1">
                                                            Klientat: </div>
                                                        <div className="h3 mb-0 font-weight-bold text-gray-800"> {totalKlienti}</div>
                                                    </div>
                                                    <div className="col-auto">
                                                    <a href='klienti' className="h5 mb-0 text-gray-800"><i class="fa fa-user" aria-hidden="true"></i></a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 mb-4">
                                        <div className="card border-left-primary shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div className="text-m font-weight-bold text-success text-uppercase mb-1">
                                                            Stafi: </div>
                                                        <div className="h3 mb-0 font-weight-bold text-gray-800"> {totalStafi}</div>
                                                    </div>
                                                    <div className="col-auto">
                                                    <a href='stafi' className="h5 mb-0 text-gray-800"><i class="fa fa-user" aria-hidden="true"></i></a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="d-sm-flex align-items-center justify-content-between mb-4" >

                                   
                                    <a href='Porosia' className="h5 mb-0 text-gray-800">Porosite</a>
                                    
                                </div>
                                   

                                    {/*  <!-- Pending Requests Card Example --> */}
                                    <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-info shadow h-100 py-2">
                                            <div className="card-body">
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col mr-2">
                                                        <div>
                                                            <p>Numri i porosive për datën {currentDate}:</p>
                                                        </div>
                                                        <div className="h3 mb-0 font-weight-bold text-gray-800"> {porositeCount !== null ? porositeCount : 'Loading...'}</div>
                                                    </div>
                                                    <div className="col-auto">
                                                    <a href='Porosia' className="h5 mb-0 text-gray-800"> <i class="fa fa-shopping-bag" aria-hidden="true"></i></a>
                                                   
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!-- Content Row --> */}

                                <div className="row">

                                    {/*   <!-- Area Chart --> */}
                                    <div className="col-xl-8 col-lg-7">
                                        <div className="card shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                                <div className="dropdown no-arrow">
                                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                        aria-labelledby="dropdownMenuLink">
                                                        <div className="dropdown-header">Dropdown Header:</div>
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body">
                                                <div className="chart-area">
                                                    <canvas id="myAreaChart"></canvas>
                                                </div>
                                          
                                            </div>
                                        </div>
                                    </div>

                                    {/*  <!-- Pie Chart --> */}
                                    <div className="col-xl-4 col-lg-5">
                                        <div className="card shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                                <div className="dropdown no-arrow">
                                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                        aria-labelledby="dropdownMenuLink">
                                                        <div className="dropdown-header">Dropdown Header:</div>
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body">
                                                <div className="chart-pie pt-4 pb-2">
                                                    <canvas id="myPieChart"></canvas>
                                                </div>
                                                <div className="mt-4 text-center small">
                                                    <span className="mr-2">
                                                        <i className="fas fa-circle text-primary"></i> Direct
                                                    </span>
                                                    <span className="mr-2">
                                                        <i className="fas fa-circle text-success"></i> Social
                                                    </span>
                                                    <span className="mr-2">
                                                        <i className="fas fa-circle text-info"></i> Referral
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*   <!-- Content Row --> */}
                                <div className="row">

                                    {/*   <!-- Content Column --> */}
                                    <div className="col-lg-6 mb-4">

                                        {/* <!-- Project Card Example --> */}
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                                            </div>
                                            <div className="card-body">
                                                <h4 className="small font-weight-bold">Server Migration <span
                                                    className="float-right">20%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-danger a2" role="progressbar" ></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Sales Tracking <span
                                                    className="float-right">40%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-warning a3" role="progressbar" ></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Customer Database <span
                                                    className="float-right">60%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar a7" role="progressbar"></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Payout Details <span
                                                    className="float-right">80%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-info a4" role="progressbar" ></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Account Setup <span
                                                    className="float-right">Complete!</span></h4>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success a5" role="progressbar" ></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Color System --> */}
                                        <div className="row">
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-primary text-white shadow">
                                                    <div className="card-body">
                                                        Primary
                                                        <div className="text-white-50 small">#4e73df</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-success text-white shadow">
                                                    <div className="card-body">
                                                        Success
                                                        <div className="text-white-50 small">#1cc88a</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-info text-white shadow">
                                                    <div className="card-body">
                                                        Info
                                                        <div className="text-white-50 small">#36b9cc</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-warning text-white shadow">
                                                    <div className="card-body">
                                                        Warning
                                                        <div className="text-white-50 small">#f6c23e</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-danger text-white shadow">
                                                    <div className="card-body">
                                                        Danger
                                                        <div className="text-white-50 small">#e74a3b</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-secondary text-white shadow">
                                                    <div className="card-body">
                                                        Secondary
                                                        <div className="text-white-50 small">#858796</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-light text-black shadow">
                                                    <div className="card-body">
                                                        Light
                                                        <div className="text-black-50 small">#f8f9fc</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-dark text-white shadow">
                                                    <div className="card-body">
                                                        Dark
                                                        <div className="text-white-50 small">#5a5c69</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-6 mb-4">

                                        {/* <!-- Illustrations --> */}
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 a6"
                                                        src="img/undraw_posting_photo.svg" alt="..." />
                                                </div>
                                                <p>Add some quality, svg illustrations to your project courtesy of <a
                                                    target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                                    constantly updated collection of beautiful svg images that you can use
                                                    completely free and without attribution!</p>
                                                <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                                    unDraw &rarr;</a>
                                            </div>
                                        </div>

                                        {/* <!-- Approach --> */}
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                                            </div>
                                            <div className="card-body">
                                                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce
                                                    CSS bloat and poor page performance. Custom CSS classNamees are used to create
                                                    custom components and custom utility classNamees.</p>
                                                <p className="mb-0">Before working with this theme, you should become familiar with the
                                                    Bootstrap framework, especially the utility classNamees.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {/*   <!-- /.container-fluid --> */}

                        </div>
                        {/*   <!-- End of Main Content -->

                                        <!-- Footer --> */}
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2021</span>
                                </div>
                            </div>
                        </footer>
                        {/* <!-- End of Footer --> */}

                    </div>
                    {/*  <!-- End of Content Wrapper --> */}

                </div>
                {/*  <!-- End of Page Wrapper -->

                                <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                {/*  <!-- Logout Modal--> */}
                <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                                <a className="btn btn-primary" href="/logout">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>

            </body>
        </div>
    )
}

export default Dashboard;

