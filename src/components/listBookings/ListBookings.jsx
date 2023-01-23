import React from 'react';
import Card from '../card/Card';
import { motion } from 'framer-motion';
import useStoreProperties from '../../store/store';
import { nanoid } from 'nanoid';
import { getLocalStorage } from '../../store/localStorage';
import useStoreUsers from '../../store/store-users';

function ListBookings() {
    const currentUserIdInLocal = getLocalStorage('currentUserId');

    const users = useStoreUsers((state) => state.users);
    // getting the current user by filtering from zustand
    const currentUser = users.filter((user) => {
        return currentUserIdInLocal === user.id;
    })[0];

    // to edit the user bookings, by deleting or editing
    const editUser = useStoreUsers((state) => state.editUser);

    // to remove the booking from the property as well
    const properties = useStoreProperties((state) => state.properties);
    const editProperty = useStoreProperties((state) => state.editProperty);

    const cancelBooking = (p) => {
        const newBookings = p.bookings.filter((booking) => {
            return booking.id !== currentUserIdInLocal;
        });

        editProperty(p.id, { bookings: newBookings });
        // editUser();
    };

    const changeDate = (p) => {};

    return (
        <div className="cards">
            <div className="cards-content">
                {properties
                    .filter((property) => {
                        for (let i = 0; i < property.bookings.length; i++) {
                            if (
                                property.bookings[0].id === currentUserIdInLocal
                            ) {
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
                                <motion.button
                                    className="btn"
                                    whileHover={{ scale: 1.1 }}
                                    onClick={() => cancelBooking(property)}
                                >
                                    Cancel Booking
                                </motion.button>
                                <motion.button
                                    className="btn"
                                    whileHover={{ scale: 1.1 }}
                                    onClick={() => changeDate(property)}
                                >
                                    Change Date
                                </motion.button>
                            </motion.div>
                        );
                    })}
            </div>
        </div>
    );
}

export default ListBookings;
