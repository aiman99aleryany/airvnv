import React from 'react';
import { FiUser } from 'react-icons/fi';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { FaBed, FaBath } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';

import './Card.scss';

function Card(props) {
    const { property } = props;
    const { id, title, price, rating, details, images, description, location } =
        property;
    const { first } = images;
    const { guests, bedrooms, beds, baths } = details;
    const {  city } = location;

    return (
        <div className="card">
            <div className="content">
                <div className="card-img">
                    <div className="hover">
                        <Link to={`/property/${id}`}>
                            <motion.button
                                className="btn"
                                whileHover={{ scale: 1.1 }}
                            >
                                View Listing
                            </motion.button>
                        </Link>
                    </div>
                    <div className="rating">
                        <span>{rating}</span>
                        <AiFillStar className="icon" />
                    </div>

                    <img src={first} alt="house1" />
                </div>
                <div className="card-title">
                    <h3>{title}</h3>
                    <dir className="city">{city}</dir>
                </div>
                <div className="card-description">
                    <p>{description}</p>
                </div>
                <div className="card-details">
                    <div>
                        <FiUser className="icon" />
                        <span className="bold">{guests}</span>
                    </div>
                    <div>
                        <MdOutlineBedroomParent className="icon" />
                        <span className="bold">{bedrooms}</span>
                    </div>
                    <div>
                        <FaBed className="icon" />
                        <span className="bold">{beds}</span>
                    </div>
                    <div>
                        <FaBath className="icon" />
                        <span className="bold">{baths}</span>
                    </div>
                    <div className="price">
                        <span>${price}/Night</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
