import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { fromUnix } from '../../store/unixTime';
import { AiFillStar } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { FaBed, FaBath } from 'react-icons/fa';

import './List.scss';
function List(props) {
    const [imageIndex, setImageIndex] = useState(0);

    const { property } = props;
    const { title, type, description, location, rating, images } = property;
    const { price, startDate, endDate, details, offers, createdAt } = property;
    const { country, city } = location;
    const { guests, bedrooms, beds, baths } = details;
    const { wifi, kitchen, parking, pets, tv, pool, smoke } = offers;
    const imagesArray = Object.values(images);

    const incrementImageIndex = () => {
        if (imageIndex >= imagesArray.length - 1) return;
        setImageIndex((state) => state + 1);
    };

    const decrementImageIndex = () => {
        if (imageIndex <= 0) return;
        setImageIndex((state) => state - 1);
    };

    return (
        <div className="list">
            <div className="list-content">
                <div className="list-header">
                    <h1>
                        {' '}
                        <span> Property </span> Details
                    </h1>
                </div>

                <div className="list-factors">
                    <div className="list-rating">
                        <span>{rating}</span>
                        <AiFillStar className="icon" />
                    </div>

                    <div className="list-title">
                        <h3>{title}</h3>
                    </div>

                    <div className="list-postedOn">
                        <h4>Posted on: {fromUnix(createdAt)}</h4>
                    </div>

                    <div className="list-type">
                        <span>Type: </span>
                        <h4>{type}</h4>
                    </div>
                </div>

                <div className="list-images">
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
                                        imageIndex === index
                                            ? 'index index-active'
                                            : 'index'
                                    }
                                    key={nanoid}
                                    onClick={() => setImageIndex(index)}
                                ></div>
                            );
                        })}
                    </div>
                </div>

                <div className="list-price">
                    <span>${price}/Night</span>
                </div>

                <div className="list-location">
                    <h3>Location</h3>
                    <div>
                        <h4>
                            Country: <span>{country}</span>{' '}
                        </h4>
                        <h4>
                            City: <span>{city}</span>{' '}
                        </h4>
                    </div>
                </div>

                <div className="list-description">
                    <span>About the Property</span>
                    <p>{description}</p>
                </div>
                <div className="list-date">
                    <div className="list-startDate">
                        <span>Available From</span>
                        <time>{startDate}</time>
                    </div>

                    <div className="list-endDate">
                        <span>To</span>
                        <time>{endDate}</time>
                    </div>
                </div>

                <div className="list-details">
                    <h4>Details</h4>
                    <ul>
                        <li>
                            Guests:
                            <span>{guests}</span>
                        </li>
                        <li>
                            Bedrooms: <span>{bedrooms}</span>{' '}
                        </li>
                        <li>
                            Beds: <span> {beds}</span>{' '}
                        </li>
                        <li>
                            Baths: <span>{baths}</span>
                        </li>
                    </ul>
                </div>

                <div className="list-offers">
                    <h4>Offers </h4>
                    <ul>
                        <li>
                            Wifi: {wifi ? <span>Yes</span> : <span>no</span>}
                        </li>
                        <li>
                            Kitchen:{' '}
                            {kitchen ? <span>Yes</span> : <span>no</span>}
                        </li>
                        <li>TV: {tv ? <span>Yes</span> : <span>no</span>}</li>
                        <li>
                            Pets: {pets ? <span>Yes</span> : <span>no</span>}
                        </li>
                        <li>
                            Smoking:{' '}
                            {smoke ? <span>Yes</span> : <span>no</span>}
                        </li>
                        <li>
                            Parking:{' '}
                            {parking ? <span>Yes</span> : <span>no</span>}
                        </li>
                        <li>
                            Pool: {pool ? <span>Yes</span> : <span>no</span>}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default List;
