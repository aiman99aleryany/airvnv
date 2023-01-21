import React from 'react';
import AddPropertyForm from '../components/addPropertyForm/AddPropertyFrom';
import NavBar from '../components/navbar/NavBar';
import { ScrollRestoration } from 'react-router-dom';

function AddProperty() {
    return (
        <div>
            <NavBar />
            <AddPropertyForm />
            <ScrollRestoration />
        </div>
    );
}

export default AddProperty;
