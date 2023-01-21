import React from 'react';
import './styles/Index.scss';
import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import Best from './components/best/Best';
import Featured from './components/featured/Featured';
function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Best />
            <Featured />
        </div>
    );
}

export default App;
