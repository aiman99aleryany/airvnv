import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import ListBookings from '../components/listBookings/ListBookings';
import NavBar from '../components/navbar/NavBar';
function Bookings() {
    return (
        <div>
            <ScrollRestoration />
            <NavBar />
            <ListBookings />
        </div>
    );
}

export default Bookings;
