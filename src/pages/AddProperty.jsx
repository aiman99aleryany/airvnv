import React from 'react';
import AddPropertyForm from '../components/addPropertyForm/AddPropertyFrom';
import NavBar from '../components/navbar/NavBar';
import { Link, ScrollRestoration } from 'react-router-dom';
import { getLocalStorage } from '../store/localStorage';

function AddProperty() {
    const isUserSignIn = getLocalStorage('isUserSignedIn');
    return (
        <div>
            <NavBar />
            {isUserSignIn ? (
                <AddPropertyForm />
            ) : (
                <Link to={'/signin'}>
                    <button className="btn">Sign in to add property</button>
                </Link>
            )}

            <ScrollRestoration />
        </div>
    );
}

export default AddProperty;
