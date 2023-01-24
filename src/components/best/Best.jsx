import React from 'react';
import { Link } from 'react-router-dom';
import Apt1 from '../../assets/apartment1.jpg';
import Apt2 from '../../assets/apartment2.jpg';
import Apt3 from '../../assets/apartment3.jpg';
import { motion } from 'framer-motion';
import './Best.scss';

function Best() {
    return (
        <motion.div
            initial={{ x: 1000 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="best"
        >
            <h1>Find best Rated properties</h1>
            <div>
                <p>
                    <span className="bold">All</span>
                </p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Agricultural</p>
            </div>
            <div className="container">
                <img src={Apt1} alt="1" />
                <img src={Apt2} alt="2" />
                <img src={Apt3} alt="3" />
            </div>
            <Link to={'/view-all'}>
                <motion.button className="btn" whileHover={{ scale: 1.1 }}>
                    View All
                </motion.button>
            </Link>
        </motion.div>
    );
}

export default Best;
