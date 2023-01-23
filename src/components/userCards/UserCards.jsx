import React from 'react';
import { nanoid } from 'nanoid';
import useStoreProperties from '../../store/store';
import { motion } from 'framer-motion';
import Card from '../card/Card';
import { getLocalStorage } from '../../store/localStorage';

function UserCards() {
    const properties = useStoreProperties((state) => state.properties);
    const currentUserId = getLocalStorage('currentUserId');

    const filterProperties = () => {
        return properties.filter((property) => {
            return property.ownerId === currentUserId;
        });
    };

    return (
        <div className="cards">
            <div className="cards-content">
                {filterProperties().map((property) => (
                    <motion.div
                        initial={{ y: 1000 }}
                        animate={{ y: 0 }}
                        transition={{ type: 'twin', duration: 1, delay: 0.1 }}
                        key={nanoid()}
                    >
                        <Card property={property} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default UserCards;
