import React from 'react';
import NavBar from '../components/navbar/NavBar';
import { ScrollRestoration } from 'react-router-dom';

function Signin() {
    return (
        <div>
            <NavBar />
            <ScrollRestoration />
        </div>
    );
}

export default Signin;
