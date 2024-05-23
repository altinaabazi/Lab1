import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <div className="logo">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-book fa-2x"></i>
                </div>
                <div className="sidebar-brand-text">
                    <span className="logo-text">Libra</span>
                    <span className="tech-text">Tech</span>
                </div>
            </div>
            <nav style={navStyle}>
                <ul style={ulStyle}>
                    <li style={liStyle}><a href="/about" style={linkStyle}>About</a></li>
                    <li style={liStyle}><a href="/shporta" style={linkStyle}>Shporta</a></li>
                    <li style={liStyle}><a href="/contact" style={linkStyle}>Contact</a></li>
                    <li style={liStyle}><a href="/LogOut" style={linkStyle}>LogOut</a></li>

                </ul>
            </nav>
        </header>
    );
}

const headerStyle = {
    background: '#4e73df',
    color: '#fff',
    padding: '20px 20px',
  
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const logoStyle = {
    display: 'flex',
    alignItems: 'center',
};

const logoTextStyle = {
    fontSize: '1.5rem',
    marginRight: '10px' // Shtuar margin-right për të ndarë logon nga emri
};

const navStyle = {
    display: 'flex',
};

const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex'
};

const liStyle = {
    marginRight: '20px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};

export default Header;
