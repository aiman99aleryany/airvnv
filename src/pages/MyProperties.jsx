import React from 'react';
import NavBar from '../components/navbar/NavBar';
import UserCards from '../components/userCards/UserCards';
import { ScrollRestoration } from 'react-router-dom';
import { getLocalStorage } from '../store/localStorage';
import NoPage from '../components/noPage/NoPage';
function MyProperties() {
    const isUserSignedIn = getLocalStorage('isUserSignedIn');
    return (
        <div>
            <ScrollRestoration />
            <NavBar />
            {isUserSignedIn ? <UserCards /> : <NoPage />}
        </div>
    );
}

export default MyProperties;
