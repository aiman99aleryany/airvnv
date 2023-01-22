import React from 'react';
import NavBar from '../components/navbar/NavBar';
import UserCards from '../components/userCards/UserCards';
import { ScrollRestoration } from 'react-router-dom';
function MyProperties() {
    return (
        <div>
            <ScrollRestoration />
            <NavBar />
            <UserCards />
        </div>
    );
}

export default MyProperties;
