import React from 'react';
import AddPropertyForm from '../components/addPropertyForm/AddPropertyForm';
import NavBar from '../components/navbar/NavBar';
import { ScrollRestoration } from 'react-router-dom';
import { getLocalStorage } from '../store/localStorage';
import NoPage from '../components/noPage/NoPage';

function AddProperty() {
    const isUserSignIn = getLocalStorage('isUserSignedIn');
    return (
        <div>
            <ScrollRestoration />
            <NavBar />
            {isUserSignIn ? <AddPropertyForm /> : <NoPage />}
        </div>
    );
}

export default AddProperty;
