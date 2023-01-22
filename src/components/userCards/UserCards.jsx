import React from 'react';
import { nanoid } from 'nanoid';
import useStoreProperties from '../../store/store';
import useStoreCurrentUser from '../../store/store-currentUser';
import { motion } from 'framer-motion';
import Card from '../card/Card';

function UserCards() {
    const properties = useStoreProperties((state) => state.properties);
    const currentUser = useStoreCurrentUser((state) => state.currentUser);

    const filterProperties = () => {
      return properties.filter((property) => {
        return property.id === currentUser.id
      })
    }

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
