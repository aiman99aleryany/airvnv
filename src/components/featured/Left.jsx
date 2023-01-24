import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Left(props) {
    const { property } = props;

    return (
        <motion.div
            initial={{ x: -1000 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="container"
        >
            <img
                className="span-3 image-grid-row-2 order-1"
                src={property.images.first}
                alt="first"
            />
            <img
                className="order-2"
                src={property.images.second}
                alt="second"
            />
            <img className="order-3" src={property.images.third} alt="third" />
            <img className="order-4" src={property.images.forth} alt="forth" />
            <img className="order-5" src={property.images.fifth} alt="fifth" />
            <div className="span-3 img-details order-6">
                <span className="top">
                    <h2>{property.title}</h2>
                    <p>for Renting</p>
                    <p className="price">${property.price}/Night</p>
                </span>
                <div className="info-grid">
                    <div>
                        <div className="info">
                            <p className="bold">Guests: </p>
                            <p>{property.details.bedrooms}</p>
                        </div>
                        <div className="info">
                            <p className="bold">Bedrooms: </p>
                            <p>{property.details.baths}</p>
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <p className="bold">Beds: </p>
                            <p>{property.details.beds}</p>
                        </div>
                        <div className="info">
                            <p className="bold">Bathrooms: </p>
                            <p>{property.details.baths}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="span-2 right-img-details order-7">
                <p>{property.description}</p>
                <Link to={`/property/${property.id}`}>
                    <motion.button className="btn" whileHover={{ scale: 1.1 }}>
                        View listing
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
}

export default Left;
