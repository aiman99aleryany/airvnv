import { useState, useEffect } from 'react';
import './AddPropertyForm.scss';
import countriesWithCities from '../../store/countriesWithCities';
import useStoreProperties from '../../store/store';
import initProperty from '../../store/initProperty';

function AddPropertyForm() {
    // -------------------------States--------------------------------
    const [fields, setFields] = useState(initProperty);
    const [location, setLocation] = useState(initProperty.location);
    const [details, setDetails] = useState(initProperty.details);
    const [offers, setOffers] = useState(initProperty.offers);
    const [images, setImages] = useState(initProperty.images);
    const [error, setError] = useState(false);

    const addProperty = useStoreProperties((state) => state.addProperty);
    const handleFieldsChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFields((state) => ({
            ...state,
            [name]: value,
        }));
    };

    useEffect(() => {
        setFields((state) => ({
            ...state,
            location: location,
            offers: offers,
            images: images,
            details: details,
        }));
    }, [location, offers, details, images]);

    const handleLocationChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setLocation((state) => ({
            ...state,
            [name]: value,
        }));

        return;
    };

    const handleDetailsChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetails((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const handleOffersChange = (e) => {
        const name = e.target.name;
        const checked = e.target.checked;
        setOffers((state) => ({
            ...state,
            [name]: checked,
        }));
    };

    const handleImagesChange = (e) => {
        const name = e.target.name;
        const file = URL.createObjectURL(e.target.files[0]);
        setImages((state) => ({
            ...state,
            [name]: file,
        }));
    };

    const handleSubmit = () => {
        const isImagesExist =
            images.first &&
            images.second &&
            images.third &&
            images.forth &&
            images.fifth
                ? true
                : false;
        const isTitleExist = fields.title ? true : false;
        const isTypeExist = fields.type ? true : false;
        const isPriceExist = fields.price ? true : false;
        const isDescriptionExist = fields.description ? true : false;
        const isLocationExist =
            location.city && location.country && location.address
                ? true
                : false;
        const isDetailsExist = details.guests ? true : false;

        const isFieldsExist =
            isImagesExist &&
            isTitleExist &&
            isTypeExist &&
            isPriceExist &&
            isDescriptionExist &&
            isLocationExist &&
            isDetailsExist
                ? true
                : false;

        if (isFieldsExist) {
            addProperty(fields);
        } else {
            setError(true);
        }

        return;
    };

    //-------------------------Renders Component ------------------------------------------------
    return (
        <div className="form-wrapper">
            <div className="form">
                <h1>Add Your Property</h1>
                <div className="photos-wrapper">
                    <div className="photos">
                        <label htmlFor="first">
                            Cover Photo:{' '}
                            <input
                                type="file"
                                name="first"
                                accept="image/*"
                                onChange={handleImagesChange}
                            />
                        </label>
                        <label htmlFor="second">
                            Second Photo:{' '}
                            <input
                                type="file"
                                name="second"
                                accept="image/*"
                                onChange={handleImagesChange}
                            />
                        </label>
                        <label htmlFor="third">
                            Third Photo:{' '}
                            <input
                                type="file"
                                name="third"
                                accept="image/*"
                                onChange={handleImagesChange}
                            />
                        </label>
                    </div>
                    <div className="photos">
                        <label htmlFor="forth">
                            Fourth Photo:{' '}
                            <input
                                type="file"
                                name="forth"
                                accept="image/*"
                                onChange={handleImagesChange}
                            />
                        </label>
                        <label htmlFor="fifth">
                            Fifth Photo:{' '}
                            <input
                                type="file"
                                name="fifth"
                                accept="image/*"
                                onChange={handleImagesChange}
                            />
                        </label>
                    </div>
                </div>

                <div>
                    <label htmlFor="title">Property Title: </label>
                    <input
                        className="text-input"
                        type="text"
                        name="title"
                        placeholder="Your property's title"
                        value={fields.title}
                        onChange={handleFieldsChange}
                    />
                </div>
                <div className="desc">
                    <label htmlFor="desc">Description:</label>
                    <textarea
                        name="description"
                        cols="20"
                        rows="5"
                        placeholder="Tell about your property...."
                        value={fields.description}
                        onChange={handleFieldsChange}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input
                        className="text-input"
                        type="number"
                        name="price"
                        placeholder="40"
                        value={fields.price}
                        onChange={handleFieldsChange}
                    />
                    <p>$/night</p>
                </div>
                <div className="select">
                    <label htmlFor="type">Property Type:</label>
                    <select
                        name="type"
                        value={fields.type}
                        onChange={handleFieldsChange}
                    >
                        <option value="">Choose one</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="cabin">Cabin</option>
                        <option value="villa">Villa</option>
                    </select>
                </div>
                <div className="location">
                    <div>
                        <label htmlFor="country">Country:</label>
                        <input
                            list="countries"
                            name="country"
                            className="text-input"
                            value={location.country}
                            onChange={handleLocationChange}
                        />
                        <datalist id="countries">
                            {countriesWithCities.map((country) => {
                                return <option value={country.country} />;
                            })}
                        </datalist>
                    </div>
                    <div>
                        <label htmlFor="city">City:</label>
                        <input
                            list="cities"
                            name="city"
                            className="text-input"
                            value={location.city}
                            onChange={handleLocationChange}
                        />
                        <datalist id="cities">
                            {countriesWithCities.map((city) => {
                                return <option value={city.cities} />;
                            })}
                        </datalist>
                    </div>
                </div>
                <div className="address">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        name="address"
                        cols="20"
                        rows="5"
                        value={location.address}
                        onChange={handleLocationChange}
                    ></textarea>
                </div>
                <div className="date">
                    <div>
                        <label htmlFor="fromDate">From:</label>
                        <input
                            type="date"
                            name="startDate"
                            value={fields.startDate}
                            onChange={handleFieldsChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="toDate">To:</label>
                        <input
                            type="date"
                            name="endDate"
                            value={fields.endDate}
                            onChange={handleFieldsChange}
                        />
                    </div>
                </div>
                <div className="details">
                    <div>
                        <label htmlFor="guests">
                            Guests:{' '}
                            <input
                                type="number"
                                name="guests"
                                placeholder="0"
                                value={details.guests}
                                onChange={handleDetailsChange}
                            />
                        </label>
                        <label htmlFor="bedrooms">
                            Bedrooms:{' '}
                            <input
                                type="number"
                                name="bedrooms"
                                placeholder="0"
                                value={details.bedrooms}
                                onChange={handleDetailsChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="beds">
                            Beds:{' '}
                            <input
                                type="number"
                                name="beds"
                                placeholder="0"
                                value={details.beds}
                                onChange={handleDetailsChange}
                            />
                        </label>
                        <label htmlFor="baths">
                            Baths:{' '}
                            <input
                                type="number"
                                name="baths"
                                placeholder="0"
                                value={details.baths}
                                onChange={handleDetailsChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="offers">
                    <div>
                        <input
                            type="checkbox"
                            name="wifi"
                            checked={offers.wifi}
                            onChange={handleOffersChange}
                        />
                        <label htmlFor="wifi">Wifi</label>
                        <input
                            type="checkbox"
                            name="kitchen"
                            checked={offers.kitchen}
                            onChange={handleOffersChange}
                        />
                        <label htmlFor="kitchen">Kitchen</label>
                        <input
                            type="checkbox"
                            name="pets"
                            checked={offers.pets}
                            onChange={handleOffersChange}
                        />
                        <label htmlFor="pets">Pets</label>
                        <input
                            type="checkbox"
                            name="tv"
                            checked={offers.tv}
                            onChange={handleOffersChange}
                        />
                        <label htmlFor="tv">TV</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="smoke"
                            checked={offers.smoke}
                            onChange={handleOffersChange}
                        />
                        <label htmlFor="smoke">Smoke</label>
                        <input
                            type="checkbox"
                            name="parking"
                            checked={offers.parking}
                            onChange={handleOffersChange}
                        />
                        <label htmlFor="parking">Parking</label>
                        <input
                            type="checkbox"
                            name="pool"
                            checked={offers.pool}
                            onChange={handleOffersChange}
                        />
                        <label htmlFor="pool">Pool</label>
                    </div>
                </div>

                <button className="btn" onClick={handleSubmit}>
                    Add your property
                </button>
                {error ? (
                    <p style={{ color: 'red' }}>Please Fill All inputs</p>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

export default AddPropertyForm;
