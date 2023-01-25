import React from 'react';
import Card from '../card/Card';
import { motion } from 'framer-motion';
import useStoreProperties from '../../store/store';
import { nanoid } from 'nanoid';
import { getLocalStorage } from '../../store/localStorage';
import { Link } from 'react-router-dom';

import './ListBookings.scss';

function ListBookings() {

    const currentUserIdInLocal = getLocalStorage('currentUserId');
    const properties = useStoreProperties((state) => state.properties);

    return (
        <div>
            <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ type: 'twin', duration: 1, delay: 0.6 }}
                className="booking-header"
            >
                <h1>
                    {' '}
                    <span> My </span> Bookings
                </h1>
            </motion.div>


            <div className="cards">
                <div className="cards-content">
                    {properties
                        .filter((property) => {
                            console.log(property);
                            for (let i = 0; i < property.bookings.length; i++) {
                                if (property.bookings[i].id === currentUserIdInLocal) {
                                    return true;
                                }
                            }
                            return false;
                        })
                        .map((property) => {
                            return (
                                <motion.div
                                    initial={{ y: 1000 }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        type: 'twin',
                                        duration: 1,
                                        delay: 0.1,
                                    }}
                                    key={nanoid()}
                                >
                                    <Card property={property} />
                                    <div className='check-bookingBtn'>
                                        <Link to={`/check-booking/${property.id}`}>
                                            <motion.button whileHover={{scale:1.1}} className="btn">
                                                Check Booking
                                            </motion.button>
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default ListBookings;
