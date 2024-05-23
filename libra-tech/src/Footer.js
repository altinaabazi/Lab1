import React from 'react';

function Footer() {
    return (
        <footer style={footerStyle}>
            <div style={footerInnerStyle}>
                <div style={footerColumnStyle}>
                    <h3>About Us</h3>
                    <p>LibraTech është një platformë inovative e krijuar për lexuesit dhe entuziastët e librave</p>
                </div>
                <div style={footerColumnStyle}>
                    <h3>Contact Information</h3>
                    <ul style={ulStyle}>
                        <li>Email: libratech@gmail.com</li>
                        <li>Phone: +1234567890</li>

                    </ul>
                </div>
                <div style={footerColumnStyle}>
                    <h3>Follow Us</h3>
                    <ul style={ulStyle}>
                        <li><a href="#" style={linkStyle}>Facebook</a></li>
                        <li><a href="#" style={linkStyle}>Twitter</a></li>
                        <li><a href="#" style={linkStyle}>Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div style={footerBottomStyle}>
                <p>&copy; 2024 Website Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

const footerStyle = {
    background: '#75747d',
    color: '#fff',
    padding: '20px 0',
};

const footerInnerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    margin: '0 auto',
};

const footerColumnStyle = {
    flex: '1',
    marginRight: '20px'
};

const ulStyle = {
    listStyleType: 'none',
    padding: 0
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};

const footerBottomStyle = {
    marginTop: '20px',
    borderTop: '1px solid #fff',
    paddingTop: '20px',
    textAlign: 'center'
};

export default Footer;
