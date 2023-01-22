import React from 'react';
import NavBar from '../components/navbar/NavBar';
import { ScrollRestoration } from 'react-router-dom';
import SigninForm from '../components/signinForm/SigninForm';

function Signin() {
    return (
        <div>
            <NavBar />
            <ScrollRestoration />
            <SigninForm />
        </div>
    );
}

export default Signin;
