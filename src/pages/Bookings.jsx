import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import ListBookings from '../components/listBookings/ListBookings';
import NavBar from '../components/navbar/NavBar';
import { getLocalStorage } from '../store/localStorage';
import NoPage from '../components/noPage/NoPage';
function Bookings() {
    const isUserSignedIn = getLocalStorage('isUserSignedIn');
    return (
        <div>
            <ScrollRestoration />
            <NavBar />
            {isUserSignedIn ? <ListBookings /> : <NoPage />}
        </div>
    );
}

export default Bookings;
