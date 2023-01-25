import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import { fromUnix } from '../../store/unixTime';
import { AiFillStar } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { getLocalStorage, setLocalStorage } from '../../store/localStorage';
import { MdOutlineBedroomParent, MdOutlineMonitor, MdPets, MdLocalParking } from 'react-icons/md';
import { FaBed, FaBath, FaWifi, FaSmoking, FaSwimmingPool } from 'react-icons/fa';
import { TbToolsKitchen2 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { toUnix } from '../../store/unixTime';
import useStoreProperties from '../../store/store';
import useStoreUsers from '../../store/store-users';
import { motion } from 'framer-motion';
import './List.scss';

function List(props) {
    const [imageIndex, setImageIndex] = useState(0);
    const [bookStartDate, setBookStartDate] = useState('');
    const [bookEndDate, setBookEndDate] = useState('');
    const [startDateError, setStartDateError] = useState(false);
    const [endDateError, setEndDateError] = useState(false);
    const [isAbleToBook, setIsAbleToBook] = useState(false);
    const [isBookingRejection, setIsBookingRejection] = useState(false);
    const [isBooked, setIsBooked] = useState(false);

    const property = props.property || getLocalStorage('currentProperty');

    if (property) {
        setLocalStorage('currentProperty', property);
    }

    const isUserSignedIn = getLocalStorage('isUserSignedIn');
    const currentUserId = getLocalStorage('currentUserId');
    const editProperty = useStoreProperties((state) => state.editProperty);
    const users = useStoreUsers((state) => state.users);
    const currentUser = users.filter((user) => {
        return String(user.id) === String(currentUserId);
    })[0];
    const imagesArray = Object.values(property.images);

    useEffect(() => {
        const unixStartDate = toUnix(property.startDate);
        const unixEndDate = toUnix(property.endDate);
        const unixBookStartDate = toUnix(bookStartDate);
        const unixBookEndDate = toUnix(bookEndDate);

        if (
            unixBookStartDate >= unixStartDate &&
            unixBookStartDate < unixEndDate &&
            unixBookEndDate <= unixEndDate &&
            unixBookEndDate > unixStartDate
        ) {
            setIsAbleToBook(true);
        }
    }, [property.startDate, property.endDate, bookStartDate, bookEndDate]);

    useEffect(() => {
        const isBookingMatching = property.bookings.filter((booking) => {
            return booking.id === currentUserId;
        });
        if (isBookingMatching.length >= 1) setIsBooked(true);
    }, [property, currentUserId, setIsBooked]);

    const incrementImageIndex = () => {
        if (imageIndex >= imagesArray.length - 1) return;
        setImageIndex((state) => state + 1);
    };

    const decrementImageIndex = () => {
        if (imageIndex <= 0) return;
        setImageIndex((state) => state - 1);
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
            setIsAbleToBook(false);
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
            setIsAbleToBook(false);
        }
    };

    const showRejection = () => {
        setIsBookingRejection(true);
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
        <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ type: 'twin', duration: 1, delay: 0.1 }}
            className="list"
        >
            <div className="list-content">
                <motion.div
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'twin', duration: 1, delay: 0.6 }}
                    className="list-header"
                >
                    <h1>
                        {' '}
                        <span> Property </span> Details
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'twin', duration: 1, delay: 0.8 }}
                    className="list-factors"
                >
                    <div className="list-rating">
                        <span>{property.rating}</span>
                        <AiFillStar className="icon" />
                    </div>

                    <div className="list-title">
                        <h3>{property.title}</h3>
                    </div>

                    <div className="list-postedOn">
                        <h4>Posted on: {fromUnix(property.createdAt)}</h4>
                    </div>

                    <div className="list-type">
                        <span>Type: </span>
                        <h4>{property.type}</h4>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 2000 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'twin', duration: 1, delay: 1.0 }}
                    className="list-images"
                >
                    <button
                        className="image-slideBtn image-slideBtn1 btn"
                        onClick={decrementImageIndex}
                    >
                        &lt;
                    </button>
                    <img src={imagesArray[imageIndex]} alt="" />
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
                </motion.div>

                <motion.div
                    initial={{ x: 1000 }}
                    animate={{x: 0}}
                    transition={{ type: 'spring', stiffness: 120 }}
                    className="list-price"
                >
                    <span>${property.price}/Night</span>
                </motion.div>

                <motion.div
                    initial={{ x: 2000 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                    className="list-location"
                >
                    <h3>Location</h3>
                    <div>
                        <h4>
                            Country: <span>{property.location.country}</span>{' '}
                        </h4>
                        <h4>
                            City: <span>{property.location.city}</span>{' '}
                        </h4>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 2000 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                    className="list-description"
                >
                    <span>About the Property</span>
                    <p>{property.description}</p>
                </motion.div>
                <motion.div
                    initial={{ x: 2000 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                    className="list-date"
                >
                    <div className="list-startDate">
                        <span>Available From</span>
                        <time>{property.startDate}</time>
                    </div>

                    <div className="list-endDate">
                        <span>To</span>
                        <time>{property.endDate}</time>
                    </div>
                </motion.div>

                <div className="list-details">
                    <h4>Details</h4>
                    <ul>
                        <li>
                            <FiUser className="icon" />
                            Guests:
                            <span>{property.details.guests}</span>
                        </li>
                        <li>
                            <MdOutlineBedroomParent className="icon" />
                            Bedrooms: <span>{property.details.bedrooms}</span>{' '}
                        </li>
                        <li>
                            <FaBed className="icon" />
                            Beds: <span> {property.details.beds}</span>{' '}
                        </li>
                        <li>
                            <FaBath className="icon" />
                            Baths: <span>{property.details.baths}</span>
                        </li>
                    </ul>
                </div>

                <div className="list-offers">
                    <h4>Offers </h4>
                    <ul>
                        <li>
                            <FaWifi className="icon" />
                            Wifi: {property.offers.wifi ? <span>Yes</span> : <span>no</span>}
                        </li>
                        <li>
                            <TbToolsKitchen2 className="icon" />
                            Kitchen: {property.offers.kitchen ? <span>Yes</span> : <span>no</span>}
                        </li>
                        <li>
                            <MdOutlineMonitor className="icon" />
                            TV: {property.offers.tv ? <span>Yes</span> : <span>no</span>}
                        </li>
                        <li>
                            <MdPets className="icon" />
                            Pets: {property.offers.pets ? <span>Yes</span> : <span>no</span>}
                        </li>
                        <li>
                            <FaSmoking className="icon" />
                            Smoking: {property.offers.smoke ? <span>Yes</span> : <span>no</span>}
                        </li>
                        <li>
                            <MdLocalParking className="icon" />
                            Parking: {property.offers.sparking ? <span>Yes</span> : <span>no</span>}
                        </li>
                        <li>
                            <FaSwimmingPool className="icon" />
                            Pool: {property.offers.pool ? <span>Yes</span> : <span>no</span>}
                        </li>
                    </ul>
                </div>

                {isUserSignedIn ? null : (
                    <Link to={'/signin'} className="signin-prompt">
                        <motion.button className="btn" whileHover={{ scale: 1.1 }}>
                            Sign in to book This Property
                        </motion.button>
                    </Link>
                )}
                {isUserSignedIn && currentUserId !== property.ownerId && !isBooked && (
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
                                <p style={{ color: 'red' }}>Please Select a valid check in Date</p>
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
                                <p style={{ color: 'red' }}>Please Select a valid check out Date</p>
                            )}
                        </div>
                    </div>
                )}
                <div className="list-bookBtn">
                    {isUserSignedIn && currentUserId !== property.ownerId && !isBooked ? (
                        isAbleToBook ? (
                            <div>
                                <Link to={'/bookings'}>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        className="btn"
                                        onClick={bookListing}
                                    >
                                        Book
                                    </motion.button>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    className="btn"
                                    onClick={showRejection}
                                >
                                    Book
                                </motion.button>
                            </div>
                        )
                    ) : null}

                    {isBookingRejection ? (
                        <p style={{ color: 'red' }}>Please Enter Valid Dates</p>
                    ) : null}
                </div>
            </div>
        </motion.div>
    );
}

export default List;
