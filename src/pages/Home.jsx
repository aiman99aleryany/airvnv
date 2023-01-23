import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Hero from '../components/hero/Hero';
import Best from '../components/best/Best';
import Featured from '../components/featured/Featured';
import { ScrollRestoration } from 'react-router-dom';
import Footer from '../components/footer/Footer';
function Home() {
    return (
        <div>
            <ScrollRestoration />
            <NavBar />
            <Hero />
            <Best />
            <Featured />
            <Footer />
        </div>
    );
}

export default Home;
