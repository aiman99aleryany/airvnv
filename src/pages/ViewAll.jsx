import React from 'react';
import Cards from '../components/cards/Cards';
import NavBar from '../components/navbar/NavBar';
import { ScrollRestoration } from 'react-router-dom';
function ViewAll() {
    return (
        <div>
            <NavBar />
            <Cards />
            <ScrollRestoration />
        </div>
    );
}

export default ViewAll;
