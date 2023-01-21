import React from 'react';
import './styles/Index.scss';
import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import Best from './components/best/Best';
function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Best />
        </div>
    );
}

export default App;
