import React from 'react';
import NavBar from '../components/navbar/NavBar';
import { ScrollRestoration } from 'react-router-dom';
import SigninForm from '../components/signinForm/SigninForm';
import { getLocalStorage } from '../store/localStorage';
function Signin() {
    const isUserSignedIn = getLocalStorage('isUserSignedIn');

    const goToHome = () => {
        window.location.href = '/';
    };
    return (
        <div>
            <ScrollRestoration />
            <NavBar />
            {isUserSignedIn ? goToHome() : <SigninForm />}
        </div>
    );
}

export default Signin;
