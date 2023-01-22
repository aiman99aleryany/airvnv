import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaRegTimesCircle } from 'react-icons/fa';
import { BsFillHouseFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getLocalStorage, setLocalStorage } from '../../store/localStorage';

import './NavBar.scss';

function NavBar() {
    const isSignedIn = getLocalStorage('isUserSignedIn');
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const signOutBtnHandler = () => {
        window.location.reload();
        setLocalStorage('isUserSignedIn', false);
    };

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
                {isSignedIn ? (
                    <Link className="addBtn" to={'/add-property'}>
                        <button className="btn">Add Property</button>
                    </Link>
                ) : null}

                {isSignedIn ? (
                    <Link className="signinBtn" to={'/'}>
                        <button className="btn" onClick={signOutBtnHandler}>
                            Sign out
                        </button>
                    </Link>
                ) : (
                    <Link className="signinBtn" to={'/signin'}>
                        <button className="btn">Sign In</button>
                    </Link>
                )}

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to={'/'}>Home</Link>
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
