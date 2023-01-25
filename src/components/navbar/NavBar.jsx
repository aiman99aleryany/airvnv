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
    const [click, setClick] = useState(false);
    const isSignedIn = getLocalStorage('isUserSignedIn');

    const handleClick = () => setClick((state) => !state);

    const signOutBtnHandler = () => {
        window.location.reload();
        setLocalStorage('isUserSignedIn', false);
        setLocalStorage('currentUserId', null);
    };

    const isAddPropertyPage =
        window.location.href === 'http://localhost:3000/add-property'
            ? true
            : false;
    const isSignInPage =
        window.location.href === 'http://localhost:3000/signin' ? true : false;
    const isMyBookingsPage =
        window.location.href === 'http://localhost:3000/bookings'
            ? true
            : false;
    const isMyPropertiesPage =
        window.location.href === 'http://localhost:3000/my-properties'
            ? true
            : false;

    return (
        <motion.div
            initial={{ x: '-100vh' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="navbar"
        >
            <div className="container">
                <motion.h1 whileHover={{ scale: 1.1 }}>
                    <Link to={'/'}>
                        <span>
                            <BsFillHouseFill />
                            Air
                        </span>
                        VnV
                    </Link>
                </motion.h1>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to={'/'}>
                            <AiFillHome /> Home
                        </Link>
                    </li>
                    <li>
                        {isSignedIn && !isAddPropertyPage ? (
                            <Link className="addBtn" to={'/add-property'}>
                                <motion.button
                                    className="btn"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Add Property
                                </motion.button>
                            </Link>
                        ) : null}
                    </li>
                    <li>
                        {isSignedIn && !isMyPropertiesPage ? (
                            <Link
                                className="myPropertiesBtn"
                                to={'/my-properties'}
                            >
                                <motion.button
                                    className="btn"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    My Properties
                                </motion.button>
                            </Link>
                        ) : null}
                    </li>
                    <li>
                        {isSignedIn && !isMyBookingsPage ? (
                            <Link className="myBookingsBtn" to={`/bookings`}>
                                <motion.button
                                    className="btn"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    My Bookings
                                </motion.button>
                            </Link>
                        ) : null}
                    </li>
                    <li>
                        {isSignInPage ? null : isSignedIn ? (
                            <Link className="signinBtn" to={'/'}>
                                <motion.button
                                    className="btn"
                                    onClick={signOutBtnHandler}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Sign out
                                </motion.button>
                            </Link>
                        ) : (
                            <Link className="signinBtn" to={'/signin'}>
                                <motion.button
                                    className="btn"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Sign In
                                </motion.button>
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
