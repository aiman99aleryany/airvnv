import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaRegTimesCircle } from 'react-icons/fa';
import { BsFillHouseFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './NavBar.scss';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <motion.div
            className="navbar"
            initial={{ x: '-100vh' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            <div className="container">
                <h1>
                    <span>
                        <BsFillHouseFill />
                        Air
                    </span>
                    VnV
                </h1>
                <Link className="signinBtn" to={'/signin'}>
                    <button className="btn">Sign In</button>
                </Link>

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
