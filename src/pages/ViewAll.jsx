import React from 'react';
import Cards from '../components/cards/Cards';
import NavBar from '../components/navbar/NavBar';
import Filter from '../components/filter/Filter';

import { ScrollRestoration } from 'react-router-dom';
function ViewAll() {
    return (
        <div>
            <ScrollRestoration />
            <NavBar />
            <Filter />
            <Cards />
        </div>
    );
}

export default ViewAll;
