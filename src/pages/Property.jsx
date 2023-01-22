import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import List from '../components/list/List';
import { ScrollRestoration } from 'react-router-dom';
import useStoreProperties from '../store/store';

function Property() {
    const [targetedProperty, setTargetedProperty] = useState(null);
    const { id } = useParams();
    const properties = useStoreProperties((state) => state.properties);

    useEffect(() => {
        setTargetedProperty(
            properties.filter((property) => {
                return property.id === id;
            })
        );
    }, [id, properties]);

    return (
        <div>
            <ScrollRestoration />
            <NavBar />
            {targetedProperty && <List property={targetedProperty[0]}></List>}
        </div>
    );
}

export default Property;
