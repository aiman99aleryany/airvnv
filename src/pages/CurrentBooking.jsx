import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStoreProperties from '../store/store';
import BookingDetails from '../components/bookingDetails/BookingDetails';
import NavBar from '../components/navbar/NavBar';
import { getLocalStorage } from '../store/localStorage';
import NoPage from '../components/noPage/NoPage';
function CurrentBooking() {
    const [targetedProperty, setTargetedProperty] = useState(null);
    const { id } = useParams();
    const properties = useStoreProperties((state) => state.properties);
    const isUserSignedIn = getLocalStorage('isUserSignedIn');

    useEffect(() => {
        setTargetedProperty(
            properties.filter((property) => {
                return property.id === id;
            })
        );
    }, [id, properties]);

    return (
        <div>
            <NavBar />
            {isUserSignedIn ? (
                targetedProperty && (
                    <BookingDetails property={targetedProperty[0]} />
                )
            ) : (
                <NoPage />
            )}
        </div>
    );
}

export default CurrentBooking;
