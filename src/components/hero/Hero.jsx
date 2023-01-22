import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { motion } from 'framer-motion';

import './Hero.scss';

function Hero() {
    return (
        <motion.div
            className="hero"
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ type: 'twin', duration: 1, delay: 0.1 }}
        >
            <div className="hero-background"></div>
            <div className="content">
                <h1>Find the Perfect place</h1>
                <p className="search-text">
                    Search and Rent the largest selection of luxury high-rise
                    apartments, houses, and properties
                </p>

                <form className="search">
                    <div>
                        <input type="text" placeholder="Enter Keyword.." />
                    </div>
                    <button type="submit">
                        <AiOutlineSearch className="icon" />
                    </button>
                </form>
            </div>
        </motion.div>
    );
}

export default Hero;
