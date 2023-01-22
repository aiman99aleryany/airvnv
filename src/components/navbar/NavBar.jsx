import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaRegTimesCircle } from 'react-icons/fa';
import { BsFillHouseFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getLocalStorage, setLocalStorage } from '../../store/localStorage';
import { AiFillHome } from 'react-icons/ai';

import './NavBar.scss';

function NavBar() {
    const isSignedIn = getLocalStorage('isUserSignedIn');
    const [click, setClick] = useState(false);

    const handleClick = () => setClick((state) => !state);

    const signOutBtnHandler = () => {
        window.location.reload();
        setLocalStorage('isUserSignedIn', false);
    };

    const isAddPropertyPage =
        window.location.href === 'http://localhost:3000/add-property'
            ? true
            : false;
    const isSignInPage =
        window.location.href === 'http://localhost:3000/signin' ? true : false;
    const isMyBookingsPage =
        window.location.href === 'http://localhost:3000/my-bookings'
            ? true
            : false;
    const isMyPropertiesPage =
        window.location.href === '/http://localhost:3000/my-properties'
            ? true
            : false;

    console.log(isSignInPage);

    return (
        <motion.div
            initial={{ x: '-100vh' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="navbar"
        >
            <div className="container">
                <h1>
                    <Link to={'/'}>
                        <span>
                            <BsFillHouseFill />
                            Air
                        </span>
                        VnV
                    </Link>
                </h1>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to={'/'}>
                            <AiFillHome /> Home
                        </Link>
                    </li>
                    <li>
                        {isSignedIn && !isAddPropertyPage ? (
                            <Link className="addBtn" to={'/add-property'}>
                                <button className="btn">Add Property</button>
                            </Link>
                        ) : null}
                    </li>
                    <li>
                        {isSignedIn && !isMyPropertiesPage ? (
                            <Link
                                className="myPropertiesBtn"
                                to={'/my-properties'}
                            >
                                <button className="btn">My Properties</button>
                            </Link>
                        ) : null}
                    </li>
                    <li>
                        {isSignedIn && !isMyBookingsPage ? (
                            <Link
                                className="myBookingsBtn"
                                to={'/add-property'}
                            >
                                <button className="btn">My Bookings</button>
                            </Link>
                        ) : null}
                    </li>
                    <li>
                        {isSignInPage ? null : isSignedIn ? (
                            <Link className="signinBtn" to={'/'}>
                                <button
                                    className="btn"
                                    onClick={signOutBtnHandler}
                                >
                                    Sign out
                                </button>
                            </Link>
                        ) : (
                            <Link className="signinBtn" to={'/signin'}>
                                <button className="btn">Sign In</button>
                            </Link>
                        )}
                    </li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (
                        <FaRegTimesCircle className="icon" />
                    ) : (
                        <HiOutlineMenuAlt4 className="icon" />
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default NavBar;
