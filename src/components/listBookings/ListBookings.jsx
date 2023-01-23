import React from 'react';
import Card from '../card/Card';
import { motion } from 'framer-motion';
import useStoreProperties from '../../store/store';
import { nanoid } from 'nanoid';
import { getLocalStorage } from '../../store/localStorage';
import useStoreUsers from '../../store/store-users';

function ListBookings() {
    const currentUserId = getLocalStorage('currentUserId');
    const properties = useStoreProperties((state) => state.properties);
    const users = useStoreUsers((state) => state.users);

    return (
        <div className="cards">
            <div className="cards-content">
                {properties
                    .filter((property) => {
                        for (let i = 0; i < property.bookings.length; i++) {
                            if (property.bookings[0].id === currentUserId) {
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
                            </motion.div>
                        );
                    })}
            </div>
        </div>
    );
}

export default ListBookings;
