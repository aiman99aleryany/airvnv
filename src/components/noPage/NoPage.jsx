import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NoPage.scss';
function NoPage() {
    return (
        <div className="nopage">
            <motion.div
                className="nopage-header"
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <h1>
                    You are Not <span>Signed In</span>{' '}
                </h1>
            </motion.div>
            <motion.div
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
            >
                <Link to={'/'}>
                    <motion.button className="btn" whileHover={{ scale: 1.1 }}>
                        Go To Home Page
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
}

export default NoPage;
