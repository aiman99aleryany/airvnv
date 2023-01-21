import React, { useState } from 'react';
import { fromUnix } from '../../store/unixTime';
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
            <div>
                <h3>Posted on: {fromUnix(createdAt)}</h3>
            </div>
            <div className="list-title">
                <h1>{title}</h1>
            </div>

            <div className="list-type">
                <h2>{type}</h2>
            </div>

            <div className="list-description">
                <p>{description}</p>
            </div>

            <div className="list-rating">
                <span>{rating}</span>
            </div>

            <div className="list-images">
                <button
                    className="image-slideBtn btn"
                    onClick={decrementImageIndex}
                >
                    &lt;
                </button>
                <img src={imagesArray[imageIndex]} alt="property" />
                <button
                    className="image-slideBtn btn"
                    onClick={incrementImageIndex}
                >
                    &gt;
                </button>
            </div>

            <div className="list-location">
                <h3>{country}</h3>
                <h3>{city}</h3>
            </div>

            <div className="list-price">
                <span>${price}</span>
            </div>

            <div className="list-startDate">
                <time>{startDate}</time>
            </div>

            <div className="list-endDate">
                <time>{endDate}</time>
            </div>

            <div className="list-details">
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
                <ul>
                    <li>Wifi: {wifi ? <span>Yes</span> : <span>no</span>}</li>
                    <li>
                        Kitchen: {kitchen ? <span>Yes</span> : <span>no</span>}
                    </li>
                    <li>TV: {tv ? <span>Yes</span> : <span>no</span>}</li>
                    <li>Pets: {pets ? <span>Yes</span> : <span>no</span>}</li>
                    <li>
                        Smoking: {smoke ? <span>Yes</span> : <span>no</span>}
                    </li>
                    <li>
                        Parking: {parking ? <span>Yes</span> : <span>no</span>}
                    </li>
                    <li>Pool: {pool ? <span>Yes</span> : <span>no</span>}</li>
                </ul>
            </div>
        </div>
    );
}

export default List;
