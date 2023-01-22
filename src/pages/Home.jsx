import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Hero from '../components/hero/Hero';
import Best from '../components/best/Best';
import Featured from '../components/featured/Featured';
import { ScrollRestoration } from 'react-router-dom';
import useStoreCurrentUser from '../store/store-currentUser';
function Home() {
    const currentUser = useStoreCurrentUser((state) => state.currentUser);
    console.log(currentUser);
    return (
        <div>
            <NavBar />
            <Hero />
            <Best />
            <Featured />
            <ScrollRestoration />
        </div>
    );
}

export default Home;
