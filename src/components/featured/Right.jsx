import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Right(props) {
    const { property } = props;
    return (
        <motion.div
            initial={{ x: 1000 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="container"
        >
            <img src={property.images.second} alt="first" />
            <img src={property.images.third} alt="second" />

            <img
                className="span-3 image-grid-row-2"
                src={property.images.first}
                alt="third"
            />

            <img src={property.images.forth} alt="forth" />
            <img src={property.images.fifth} alt="fifth" />

            <div className="span-2 right-img-details">
                <p>{property.description}</p>
                <Link to={`/property/${property.id}`}>
                    <motion.button className="btn" whileHover={{ scale: 1.1 }}>
                        View listing
                    </motion.button>
                </Link>
            </div>
            <div className="span-3 img-details">
                <span className="top">
                    <h2>{property.title}</h2>
                    <p>For Renting</p>
                    <p className="price">${property.price}/Night</p>
                </span>
                <div className="info-grid">
                    <div>
                        <div className="info">
                            <p className="bold">Guests: </p>
                            <p>{property.details.guests}</p>
                        </div>
                        <div className="info">
                            <p className="bold">Bedrooms: </p>
                            <p>{property.details.bedrooms}</p>
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <p className="bold">Beds: </p>
                            <p>{property.details.beds}</p>
                        </div>
                        <div className="info">
                            <p className="bold">Baths: </p>
                            <p>{property.details.bats}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Right;
