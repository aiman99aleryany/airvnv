import React from 'react';
import Left from './Left';
import Right from './Right';
import useStoreProperties from '../../store/store';

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
    );
}

export default Featured;
