import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <Header />
            <h1>LibraTech!</h1>
            <p>This is the main content of the website.</p>
            <Footer />
        </div>
    );
}

export default Home;
