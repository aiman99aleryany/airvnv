import React, { useState } from 'react';
import { toUnix } from '../../store/unixTime';
import { getLocalStorage, setLocalStorage } from '../../store/localStorage';
import { nanoid } from 'nanoid';
import useStoreProperties from '../../store/store';
import { motion } from 'framer-motion';
import useStoreUsers from '../../store/store-users';
import { Link } from 'react-router-dom';
import './BookingDetails.scss';

function BookingDetails(props) {
    const property = props.property || getLocalStorage('currentBooking');
    const currentUserId = getLocalStorage('currentUserId');

    const imagesArray = Object.values(property.images);
    const editProperty = useStoreProperties((state) => state.editProperty);
    const currentBooking = property.bookings.filter((booking) => {
        return booking.id === currentUserId;
    })[0];

    const users = useStoreUsers((state) => state.users);

    const currentUser = users.filter((user) => {
        return String(user.id) === String(currentUserId);
    })[0];

    console.log(currentBooking);

    if (property) {
        setLocalStorage('currentBooking', property);
    }

    const [imageIndex, setImageIndex] = useState(0);
    const [isBookingExist, setIsBookingExist] = useState(true);
    const [isEditBooking, setIsEditBooking] = useState(false);
    const [bookStartDate, setBookStartDate] = useState('');
    const [bookEndDate, setBookEndDate] = useState('');
    const [startDateError, setStartDateError] = useState(false);
    const [endDateError, setEndDateError] = useState(false);

    const incrementImageIndex = () => {
        if (imageIndex >= imagesArray.length - 1) return;
        setImageIndex((state) => state + 1);
    };

    const decrementImageIndex = () => {
        if (imageIndex <= 0) return;
        setImageIndex((state) => state - 1);
    };

    const cancelBooking = () => {
        const newBookings = property.bookings.filter((booking) => {
            return booking.id !== currentUserId;
        });

        editProperty(property.id, { bookings: newBookings });
        setIsBookingExist(false);
        setLocalStorage('currentBooking', null);
    };

    const editBooking = () => {
        setIsEditBooking((state) => !state);
    };

    const handleBookStartDateChange = (e) => {
        const unixInputDate = toUnix(e.target.value);
        const unixPropertyStartDate = toUnix(property.startDate);
        const unixPropertyEndDate = toUnix(property.endDate);

        if (unixInputDate >= unixPropertyStartDate && unixInputDate < unixPropertyEndDate) {
            setBookStartDate(e.target.value);
            setStartDateError(false);
        } else {
            setStartDateError(true);
        }
    };

    const handleBookEndDateChange = (e) => {
        const unixInputDate = toUnix(e.target.value);
        const unixPropertyStartDate = toUnix(property.startDate);
        const unixPropertyEndDate = toUnix(property.endDate);

        if (unixInputDate <= unixPropertyEndDate && unixInputDate > unixPropertyStartDate) {
            setBookEndDate(e.target.value);
            setEndDateError(false);
        } else {
            setEndDateError(true);
        }
    };

    const bookListing = () => {
        const propertyNewBooking = {
            bookings: [
                {
                    id: currentUser.id,
                    username: currentUser.username,
                    name: currentUser.name,
                    checkIn: bookStartDate,
                    checkOut: bookEndDate,
                },
            ],
        };

        editProperty(property.id, propertyNewBooking);
    };

    return (
        <div className="booking-details">
            <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ type: 'twin', duration: 1, delay: 0.6 }}
                className="booking-header"
            >
                <h1>
                    {' '}
                    <span> Your </span> Booking
                </h1>
            </motion.div>

            {isBookingExist ? (
                <div className="booking-content">
                    <div className="booking-images">
                        <button
                            className="image-slideBtn image-slideBtn1 btn"
                            onClick={decrementImageIndex}
                        >
                            &lt;
                        </button>
                        <img src={imagesArray[imageIndex]} alt="booking" />
                        <button
                            className="image-slideBtn image-slideBtn2 btn"
                            onClick={incrementImageIndex}
                        >
                            &gt;
                        </button>

                        <div className="image-index">
                            {imagesArray.map((image, index) => {
                                return (
                                    <div
                                        className={
                                            imageIndex === index ? 'index index-active' : 'index'
                                        }
                                        key={nanoid}
                                        onClick={() => setImageIndex(index)}
                                    ></div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="booking-info">
                        <div className="booking-info-title">
                            <h1>{property.title}</h1>
                        </div>
                        <div className="property-real-dates">
                            <div>
                                <h2>Available From</h2>
                                <span>{property.startDate}</span>
                            </div>
                            <div>
                                <h2>To</h2>
                                <span>{property.endDate}</span>
                            </div>
                        </div>
                        <div className="booking-info-checkin">
                            <h2>Check-in:</h2>
                            <span>
                                {
                                    property.bookings.filter((booking) => {
                                        return booking.id === currentUserId;
                                    })[0]?.checkIn
                                }
                            </span>
                        </div>
                        <div className="booking-info-checkout">
                            <h2>Check-out:</h2>
                            <span>
                                {
                                    property.bookings.filter((booking) => {
                                        return booking.id === currentUserId;
                                    })[0]?.checkOut
                                }
                            </span>
                        </div>

                        <div className="booking-info-price">
                            <h2>${property.price}/Night</h2>
                        </div>
                        <div className="booking-info-location">
                            <div className="booking-info-country">
                                <h2>{property.location.country}</h2>
                            </div>

                            <div className="booking-info-city">
                                <h2>{property.location.city}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            {isBookingExist ? (
                <div className="modify-section">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="btn"
                        onClick={cancelBooking}
                    >
                        Cancel Booking
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="btn"
                        onClick={editBooking}
                    >
                        Edit Booking
                    </motion.button>
                    {isEditBooking && (
                        <div className="choose-date">
                            <div className="choose-date-start">
                                <label htmlFor="startDate">check in: </label>
                                <input
                                    name="startDate"
                                    type="date"
                                    value={bookStartDate}
                                    onChange={handleBookStartDateChange}
                                    className="list-input"
                                />
                                {startDateError && (
                                    <p style={{ color: 'red' }}>
                                        Please Select a valid check in Date
                                    </p>
                                )}
                            </div>
                            <div className="choose-date-end">
                                <label htmlFor="endDate">check out:</label>
                                <input
                                    name="endDate"
                                    type="date"
                                    value={bookEndDate}
                                    onChange={handleBookEndDateChange}
                                    className="list-input"
                                />
                                {endDateError && (
                                    <p style={{ color: 'red' }}>
                                        Please Select a valid check out Date
                                    </p>
                                )}
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="btn"
                                onClick={bookListing}
                            >
                                Edit
                            </motion.button>
                        </div>
                    )}
                </div>
            ) : (
                <motion.div
                    initial={{ x: -1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                >
                    <Link to={'/bookings'}>
                        <motion.button whileHover={{ scale: 1.1 }} className="btn">
                            Go to My Bookings
                        </motion.button>
                    </Link>
                </motion.div>
            )}
        </div>
    );
}

export default BookingDetails;
