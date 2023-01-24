import React from 'react';
import Left from './Left';
import Right from './Right';
import { Link } from 'react-router-dom';
import useStoreProperties from '../../store/store';
import { motion } from 'framer-motion';
import './Featured.scss';

function Featured() {
    const properties = useStoreProperties((state) => state.properties);

    // item = items[Math.floor(Math.random()*items.length)];

    const randomProperties = [
        properties[Math.floor(Math.random() * properties.length)],
        properties[Math.floor(Math.random() * properties.length)],
        properties[Math.floor(Math.random() * properties.length)],
        properties[Math.floor(Math.random() * properties.length)],
        properties[Math.floor(Math.random() * properties.length)],
    ];

    return (
        <div>
            <div className="featured">
                <h1 className="featured-text">Top Featured Listings</h1>
                {randomProperties.map((property, index) => {
                    if (index % 2 === 0) {
                        return <Left property={property} />;
                    } else {
                        return <Right property={property} />;
                    }
                })}
            </div>

            <div className="featured-view-all">
                <Link to={'/view-all'}>
                    <motion.button className="btn" whileHover={{ scale: 1.1 }}>
                        View All
                    </motion.button>
                </Link>
            </div>
        </div>
    );
}

export default Featured;
