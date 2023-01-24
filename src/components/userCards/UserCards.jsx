import React from 'react';
import { nanoid } from 'nanoid';
import useStoreProperties from '../../store/store';
import { motion } from 'framer-motion';
import Card from '../card/Card';
import { getLocalStorage } from '../../store/localStorage';

import './UserCards.scss';

function UserCards() {
    const currentUserId = getLocalStorage('currentUserId');

    const properties = useStoreProperties((state) => state.properties);

    const filterProperties = () => {
        return properties.filter((property) => {
            return property.ownerId === currentUserId;
        });
    };

    return (
        <div>
            <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ type: 'twin', duration: 1, delay: 0.6 }}
                className="usercards-header"
            >
                <h1>
                    {' '}
                    <span> My</span> Properties
                </h1>
            </motion.div>

            <div className="cards">
                <div className="cards-content">
                    {filterProperties().map((property) => (
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
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserCards;
