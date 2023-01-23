import { useState, useEffect, useRef } from 'react';
import countriesWithCities from '../../store/countriesWithCities';
import countries from '../../store/countries';
import useStoreProperties from '../../store/store';
import initProperty from '../../store/initProperty';
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import {
    initLocalStorage,
    setLocalStorage,
    getLocalStorage,
} from '../../store/localStorage';
import './AddPropertyForm.scss';

function AddPropertyForm() {
    initLocalStorage('newProperties');
    // -------------------------States--------------------------------
    const [fields, setFields] = useState(initProperty);
    const [location, setLocation] = useState(initProperty.location);
    const [details, setDetails] = useState(initProperty.details);
    const [offers, setOffers] = useState(initProperty.offers);
    const [images, setImages] = useState(initProperty.images);
    const [error, setError] = useState(false);
    //----------------------------------------------------------------
    // rendering states-----------
    const [showAddProperty, setShowAddProperty] = useState(false);
    const [showImages, setShowImages] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showType, setShowType] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [showDates, setShowDates] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showOffers, setShowOffers] = useState(false);

    // ref

    const countryDropdownRef = useRef();
    const cityDropdownRef = useRef();

    useEffect(() => {
        window.addEventListener('click', (e) => {
            console.log('window clicked');
            countryDropdownRef.current.style.display = 'none';
            cityDropdownRef.current.style.display = 'none';
        });
    });

    //-------------------Fade out Functions--------------------------------
    const fadeAddProperty = () => {
        setShowAddProperty(!showAddProperty);
    };
    const fadeImages = () => {
        setShowImages(!showImages);
    };
    const fadeTitle = () => {
        setShowTitle(!showTitle);
    };
    const fadeDescription = () => {
        setShowDescription(!showDescription);
    };
    const fadeType = () => {
        setShowType(!showType);
    };
    const fadePrice = () => {
        setShowPrice(!showPrice);
    };
    const fadeLocation = () => {
        setShowLocation(!showLocation);
    };
    const fadeDates = () => {
        setShowDates(!showDates);
    };
    const fadeDetails = () => {
        setShowDetails(!showDetails);
    };
    const fadeOffers = () => {
        setShowOffers(!showOffers);
    };

    //-----------------------------------------------------------------

    const addProperty = useStoreProperties((state) => state.addProperty);
    const handleFieldsChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (value < 0) return;
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
        if (value < 0) return;
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
    //--------------------Images----------------------------------------------------

    const handleImagesChange = (e) => {
        const name = e.target.name;
        const file = e.target.files[0];
        setImages((state) => ({
            ...state,
            [name]: file,
        }));
    };

    const deleteImage1 = () => {
        setImages((state) => ({
            ...state,
            first: '',
        }));
    };
    const deleteImage2 = () => {
        setImages((state) => ({
            ...state,
            second: '',
        }));
    };
    const deleteImage3 = () => {
        setImages((state) => ({
            ...state,
            third: '',
        }));
    };
    const deleteImage4 = () => {
        setImages((state) => ({
            ...state,
            forth: '',
        }));
    };
    const deleteImage5 = () => {
        setImages((state) => ({
            ...state,
            fifth: '',
        }));
    };

    //------------------------------------------------------------------------------

    // save images in localStorage

    //------------------------------------------------------------------------------------------------
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
            location.city && location.country ? true : false;
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
            console.log(fields);
            const newProperties = getLocalStorage('newProperties');
            setLocalStorage('newProperties', [...newProperties, fields]);
        } else {
            setError(true);
        }

        return;
    };

    const searchInCountries = (c) => {
        return c
            .filter(({ name }) => {
                const searchedCountry = location.country.toLowerCase();
                const country = name.toLowerCase();
                return (
                    searchedCountry &&
                    country.startsWith(searchedCountry) &&
                    country !== searchedCountry
                );
            })
            .slice(0, 5);
    };

    const searchCitiesBasedOnCountry = (c) => {
        return countriesWithCities
            .filter(({ country }) => {
                return country.toLowerCase() === location.country.toLowerCase();
            })
            .map(({ cities }) => {
                return cities;
            })
            .slice(0, 3);
    };

    const showCountryDropdown = (e) => {
        e.stopPropagation();
        countryDropdownRef.current.style.display = 'flex';
    };

    const showCityDropdown = (e) => {
        e.stopPropagation();
        cityDropdownRef.current.style.display = 'flex';
    };

    //-------------------------Renders Component ------------------------------------------------
    return (
        <div className="addpropertyform-wrapper">
            <motion.div
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.1 }}
                className="show-add-property"
            >
                <button className="btn" onClick={fadeAddProperty}>
                    Add Property
                </button>
            </motion.div>

            {showAddProperty && (
                <motion.div
                    initial={{ y: 1000, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                    }}
                    className="addpropertyform"
                >
                    <div className="addpropertyform-content">
                        <div className="addpropertyform-more-images">
                            <button className="btn" onClick={fadeImages}>
                                Upload
                            </button>
                        </div>
                        {showImages && (
                            <div className="images-grid">
                                {images.first === '' ? null : (
                                    <motion.div
                                        initial={{ y: -30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                        }}
                                        className="images-grid-img1"
                                    >
                                        <img src={images.first} alt="first" />
                                        <button
                                            className="btn"
                                            onClick={deleteImage1}
                                        >
                                            X
                                        </button>
                                    </motion.div>
                                )}
                                {images.second === '' ? null : (
                                    <motion.div
                                        initial={{ y: -30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                        }}
                                        className="images-grid-img2"
                                    >
                                        <img src={images.second} alt="second" />
                                        <button
                                            className="btn"
                                            onClick={deleteImage2}
                                        >
                                            X
                                        </button>
                                    </motion.div>
                                )}
                                {images.third === '' ? null : (
                                    <motion.div
                                        initial={{ y: -30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                        }}
                                        className="images-grid-img3"
                                    >
                                        <img src={images.third} alt="third" />
                                        <button
                                            className="btn"
                                            onClick={deleteImage3}
                                        >
                                            X
                                        </button>
                                    </motion.div>
                                )}
                                {images.forth === '' ? null : (
                                    <motion.div
                                        initial={{ y: -30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                        }}
                                        className="images-grid-img4"
                                    >
                                        <img src={images.forth} alt="forth" />
                                        <button
                                            className="btn"
                                            onClick={deleteImage4}
                                        >
                                            X
                                        </button>
                                    </motion.div>
                                )}
                                {images.fifth === '' ? null : (
                                    <motion.div
                                        initial={{ y: -30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                        }}
                                        className="images-grid-img5"
                                    >
                                        <img src={images.fifth} alt="fifth" />
                                        <button
                                            className="btn"
                                            onClick={deleteImage5}
                                        >
                                            X
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        )}

                        {showImages && (
                            <motion.div
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="addpropertyform-add-images"
                            >
                                {images.first === '' && (
                                    <div className="addpropertyform-image1">
                                        <input
                                            type="file"
                                            name="first"
                                            accept="image/*"
                                            onChange={handleImagesChange}
                                            className="addpropertyform-input"
                                        />
                                    </div>
                                )}

                                {images.second === '' && (
                                    <div className="addpropertyform-image2">
                                        <input
                                            type="file"
                                            name="second"
                                            accept="image/*"
                                            onChange={handleImagesChange}
                                            className="addpropertyform-input"
                                        />
                                    </div>
                                )}

                                {images.third === '' && (
                                    <div className="addpropertyform-image3">
                                        <input
                                            type="file"
                                            name="third"
                                            accept="image/*"
                                            onChange={handleImagesChange}
                                            className="addpropertyform-input"
                                        />
                                    </div>
                                )}

                                {images.forth === '' && (
                                    <div className="addpropertyform-image4">
                                        <input
                                            type="file"
                                            name="forth"
                                            accept="image/*"
                                            onChange={handleImagesChange}
                                            className="addpropertyform-input"
                                        />
                                    </div>
                                )}

                                {images.fifth === '' && (
                                    <div className="addpropertyform-image5">
                                        <input
                                            type="file"
                                            name="fifth"
                                            accept="image/*"
                                            onChange={handleImagesChange}
                                            className="addpropertyform-input"
                                        />
                                    </div>
                                )}
                            </motion.div>
                        )}

                        <div className="addpropertyform-more-title">
                            <button className="btn" onClick={fadeTitle}>
                                Add title
                            </button>
                        </div>

                        {showTitle && (
                            <motion.div
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="addpropertyform-add-title"
                            >
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Your property's title"
                                    value={fields.title}
                                    onChange={handleFieldsChange}
                                    className="addpropertyform-input"
                                />
                            </motion.div>
                        )}

                        <div className="addpropertyform-more-description">
                            <button className="btn" onClick={fadeDescription}>
                                Add Description
                            </button>
                        </div>

                        {showDescription && (
                            <motion.div
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="addpropertyform-add-description"
                            >
                                <textarea
                                    name="description"
                                    id=""
                                    cols="30"
                                    rows="10"
                                    placeholder="Tell about your property...."
                                    value={fields.description}
                                    onChange={handleFieldsChange}
                                    className="addpropertyform-input"
                                ></textarea>
                            </motion.div>
                        )}

                        <div className="addpropertyform-more-price">
                            <button className="btn" onClick={fadePrice}>
                                Add price
                            </button>
                        </div>

                        {showPrice && (
                            <motion.div
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="addpropertyform-add-price"
                            >
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="40"
                                    value={fields.price}
                                    onChange={handleFieldsChange}
                                    className="addpropertyform-input"
                                />
                            </motion.div>
                        )}

                        <div className="addpropertyform-more-type">
                            <button className="btn" onClick={fadeType}>
                                Add Type
                            </button>
                        </div>

                        {showType && (
                            <motion.div
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="addpropertyform-add-type"
                            >
                                <select
                                    name="type"
                                    id=""
                                    value={fields.type}
                                    onChange={handleFieldsChange}
                                    className="addpropertyform-input"
                                >
                                    <option value="">Choose one</option>
                                    <option value="house">House</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="cabin">Cabin</option>
                                    <option value="villa">Villa</option>
                                </select>
                            </motion.div>
                        )}

                        <div className="addpropertyform-more-location">
                            <button className="btn" onClick={fadeLocation}>
                                Add Location
                            </button>
                        </div>

                        {showLocation && (
                            <motion.div
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="addpropertyform-add-location"
                            >
                                <div className="addpropertyform-add-country">
                                    <input
                                        type="text"
                                        name="country"
                                        value={location.country}
                                        onChange={handleLocationChange}
                                        placeholder="Country"
                                        className="addpropertyform-input"
                                        autoComplete="off"
                                        onClick={showCountryDropdown}
                                    />
                                    <ul
                                        className="addpropertyform-add-country-dropdown"
                                        ref={countryDropdownRef}
                                    >
                                        {searchInCountries(countries).map(
                                            ({ name }) => {
                                                return (
                                                    <li
                                                        key={nanoid()}
                                                        onClick={() => {
                                                            countryDropdownRef.current.style.display =
                                                                'none';
                                                            setLocation(
                                                                (state) => ({
                                                                    ...state,
                                                                    country:
                                                                        name,
                                                                })
                                                            );
                                                        }}
                                                    >
                                                        {name}
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>

                                <div className="addpropertyform-add-city">
                                    <input
                                        type="text"
                                        name="city"
                                        value={location.city}
                                        onChange={handleLocationChange}
                                        placeholder="City"
                                        className="addpropertyform-input"
                                        autoComplete="off"
                                        onClick={showCityDropdown}
                                    />
                                    <ul
                                        className="addpropertyform-add-city-dropdown"
                                        ref={cityDropdownRef}
                                    >
                                        {location.country
                                            ? searchCitiesBasedOnCountry(
                                                  location.country
                                              ).map((cities) => {
                                                  return cities
                                                      .filter((city) => {
                                                          const searchedCity =
                                                              location.city.toLowerCase();
                                                          const newCity =
                                                              city.toLowerCase();

                                                          return (
                                                              searchedCity &&
                                                              newCity.startsWith(
                                                                  searchedCity
                                                              ) &&
                                                              newCity !==
                                                                  searchedCity
                                                          );
                                                      })
                                                      .map((city) => {
                                                          return (
                                                              <li
                                                                  key={nanoid()}
                                                                  onClick={() => {
                                                                      cityDropdownRef.current.style.display =
                                                                          'none';
                                                                      setLocation(
                                                                          (
                                                                              state
                                                                          ) => ({
                                                                              ...state,
                                                                              city: city,
                                                                          })
                                                                      );
                                                                  }}
                                                              >
                                                                  {city}
                                                              </li>
                                                          );
                                                      })
                                                      .slice(0.5);
                                              })
                                            : null}
                                    </ul>
                                </div>
                            </motion.div>
                        )}

                        <div className="addpropertyform-more-dates">
                            <button className="btn" onClick={fadeDates}>
                                Add Dates
                            </button>
                        </div>

                        {showDates && (
                            <motion.div
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="addpropertyform-add-dates"
                            >
                                <div className="addpropertyform-add-startDate">
                                    <input
                                        type="date"
                                        name="startDate"
                                        value={fields.startDate}
                                        onChange={handleFieldsChange}
                                        className="addpropertyform-input"
                                    />
                                </div>
                                <div className="addpropertyform-add-endDate">
                                    <input
                                        type="date"
                                        name="endDate"
                                        value={fields.endDate}
                                        onChange={handleFieldsChange}
                                        className="addpropertyform-input"
                                    />
                                </div>
                            </motion.div>
                        )}

                        <div className="addpropertyform-more-details">
                            <button className="btn" onClick={fadeDetails}>
                                Add Details
                            </button>
                        </div>

                        {showDetails && (
                            <motion.div
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="addpropertyform-add-details"
                            >
                                <div className="addpropertyform-add-guests">
                                    <label htmlFor="guests">Guests</label>
                                    <input
                                        type="number"
                                        name="guests"
                                        onChange={handleDetailsChange}
                                        value={details.guests}
                                        placeholder="0"
                                        className="addpropertyform-input"
                                    />
                                </div>

                                <div className="addpropertyform-add-bedrooms">
                                    <label htmlFor="bedrooms">Bedrooms</label>
                                    <input
                                        type="number"
                                        name="bedrooms"
                                        onChange={handleDetailsChange}
                                        value={details.bedrooms}
                                        placeholder="0"
                                        className="addpropertyform-input"
                                    />
                                </div>
                                <div className="addpropertyform-add-beds">
                                    <label htmlFor="beds">Beds</label>
                                    <input
                                        type="number"
                                        name="beds"
                                        onChange={handleDetailsChange}
                                        value={details.beds}
                                        placeholder="0"
                                        className="addpropertyform-input"
                                    />
                                </div>
                                <div className="addpropertyform-add-baths">
                                    <label htmlFor="baths">Baths</label>
                                    <input
                                        type="number"
                                        name="baths"
                                        onChange={handleDetailsChange}
                                        value={details.baths}
                                        placeholder="0"
                                        className="addpropertyform-input"
                                    />
                                </div>
                            </motion.div>
                        )}

                        <div className="addpropertyform-more-offers">
                            <button className="btn" onClick={fadeOffers}>
                                Add offers
                            </button>
                        </div>

                        {showOffers && (
                            <motion.div
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="addpropertyform-add-offers"
                            >
                                <div className="addpropertyform-add-wifi">
                                    <label htmlFor="wifi">Wifi</label>
                                    <input
                                        type="checkbox"
                                        name="wifi"
                                        checked={offers.wifi}
                                        onChange={handleOffersChange}
                                        className="checkbox-larger"
                                    />
                                </div>

                                <div className="addpropertyform-add-kitchen">
                                    <label htmlFor="kitchen">Kitchen</label>
                                    <input
                                        type="checkbox"
                                        name="kitchen"
                                        checked={offers.kitchen}
                                        onChange={handleOffersChange}
                                        className="checkbox-larger"
                                    />
                                </div>

                                <div className="addpropertyform-add-parking">
                                    <label htmlFor="parking">Parking</label>
                                    <input
                                        type="checkbox"
                                        name="parking"
                                        checked={offers.parking}
                                        onChange={handleOffersChange}
                                        className="checkbox-larger"
                                    />
                                </div>

                                <div className="addpropertyform-add-pets">
                                    <label htmlFor="parking">Pets</label>
                                    <input
                                        type="checkbox"
                                        name="pets"
                                        checked={offers.pets}
                                        onChange={handleOffersChange}
                                        className="checkbox-larger"
                                    />
                                </div>

                                <div className="addpropertyform-add-tv">
                                    <label htmlFor="tv">TV</label>
                                    <input
                                        type="checkbox"
                                        name="tv"
                                        checked={offers.tv}
                                        onChange={handleOffersChange}
                                        className="checkbox-larger"
                                    />
                                </div>

                                <div className="addpropertyform-add-pool">
                                    <label htmlFor="pool">Pool</label>
                                    <input
                                        type="checkbox"
                                        name="pool"
                                        checked={offers.pool}
                                        onChange={handleOffersChange}
                                        className="checkbox-larger"
                                    />
                                </div>

                                <div className="addpropertyform-add-smoke">
                                    <label htmlFor="smoke">Smoke</label>
                                    <input
                                        type="checkbox"
                                        name="smoke"
                                        checked={offers.smoke}
                                        onChange={handleOffersChange}
                                        className="checkbox-larger"
                                    />
                                </div>
                            </motion.div>
                        )}

                        <button className="btn" onClick={handleSubmit}>
                            Submit
                        </button>
                        {error ? (
                            <p style={{ color: 'red', textAlign: 'center' }}>
                                Please Fill All inputs
                            </p>
                        ) : (
                            ''
                        )}
                    </div>
                </motion.div>
            )}
        </div>

        // --------------------------old jsx-----------------------
        // <div className="form-wrapper">
        //     <div className="form">
        //         <h1>Add Your Property</h1>
        //         <div className="photos-wrapper">
        //             <div className="photos">
        //                 <label htmlFor="first">
        //                     Cover Photo:{' '}
        //                     <input
        //                         type="file"
        //                         name="first"
        //                         accept="image/*"
        //                         onChange={handleImagesChange}
        //                     />
        //                 </label>
        //                 <label htmlFor="second">
        //                     Second Photo:{' '}
        //                     <input
        //                         type="file"
        //                         name="second"
        //                         accept="image/*"
        //                         onChange={handleImagesChange}
        //                     />
        //                 </label>
        //                 <label htmlFor="third">
        //                     Third Photo:{' '}
        //                     <input
        //                         type="file"
        //                         name="third"
        //                         accept="image/*"
        //                         onChange={handleImagesChange}
        //                     />
        //                 </label>
        //             </div>
        //             <div className="photos">
        //                 <label htmlFor="forth">
        //                     Fourth Photo:{' '}
        //                     <input
        //                         type="file"
        //                         name="forth"
        //                         accept="image/*"
        //                         onChange={handleImagesChange}
        //                     />
        //                 </label>
        //                 <label htmlFor="fifth">
        //                     Fifth Photo:{' '}
        //                     <input
        //                         type="file"
        //                         name="fifth"
        //                         accept="image/*"
        //                         onChange={handleImagesChange}
        //                     />
        //                 </label>
        //             </div>
        //         </div>

        //         <div>
        //             <label htmlFor="title">Property Title: </label>
        //             <input
        //                 className="text-input"
        //                 type="text"
        //                 name="title"
        //                 placeholder="Your property's title"
        //                 value={fields.title}
        //                 onChange={handleFieldsChange}
        //             />
        //         </div>
        //         <div className="desc">
        //             <label htmlFor="desc">Description:</label>
        //             <textarea
        //                 name="description"
        //                 cols="20"
        //                 rows="5"
        //                 placeholder="Tell about your property...."
        //                 value={fields.description}
        //                 onChange={handleFieldsChange}
        //             ></textarea>
        //         </div>
        //         <div>
        //             <label htmlFor="price">Price: </label>
        //             <input
        //                 className="text-input"
        //                 type="number"
        //                 name="price"
        //                 placeholder="40"
        //                 value={fields.price}
        //                 onChange={handleFieldsChange}
        //             />
        //             <p>$/night</p>
        //         </div>
        //         <div className="select">
        //             <label htmlFor="type">Property Type:</label>
        //             <select
        //                 name="type"
        //                 value={fields.type}
        //                 onChange={handleFieldsChange}
        //             >
        //                 <option value="">Choose one</option>
        //                 <option value="house">House</option>
        //                 <option value="apartment">Apartment</option>
        //                 <option value="cabin">Cabin</option>
        //                 <option value="villa">Villa</option>
        //             </select>
        //         </div>
        //         <div className="location">
        //             <div>
        //                 <label htmlFor="country">Country:</label>
        //                 <input
        //                     list="countries"
        //                     name="country"
        //                     className="text-input"
        //                     value={location.country}
        //                     onChange={handleLocationChange}
        //                 />
        //                 <datalist id="countries">
        //                     {countriesWithCities.map((country) => {
        //                         return <option value={country.country} />;
        //                     })}
        //                 </datalist>
        //             </div>
        //             <div>
        //                 <label htmlFor="city">City:</label>
        //                 <input
        //                     list="cities"
        //                     name="city"
        //                     className="text-input"
        //                     value={location.city}
        //                     onChange={handleLocationChange}
        //                 />
        //                 <datalist id="cities">
        //                     {countriesWithCities.map((city) => {
        //                         return <option value={city.cities} />;
        //                     })}
        //                 </datalist>
        //             </div>
        //         </div>
        //         <div className="address">
        //             <label htmlFor="address">Address:</label>
        //             <textarea
        //                 name="address"
        //                 cols="20"
        //                 rows="5"
        //                 value={location.address}
        //                 onChange={handleLocationChange}
        //             ></textarea>
        //         </div>
        //         <div className="date">
        //             <div>
        //                 <label htmlFor="fromDate">From:</label>
        //                 <input
        //                     type="date"
        //                     name="startDate"
        //                     value={fields.startDate}
        //                     onChange={handleFieldsChange}
        //                 />
        //             </div>
        //             <div>
        //                 <label htmlFor="toDate">To:</label>
        //                 <input
        //                     type="date"
        //                     name="endDate"
        //                     value={fields.endDate}
        //                     onChange={handleFieldsChange}
        //                 />
        //             </div>
        //         </div>
        //         <div className="details">
        //             <div>
        //                 <label htmlFor="guests">
        //                     Guests:{' '}
        //                     <input
        //                         type="number"
        //                         name="guests"
        //                         placeholder="0"
        //                         value={details.guests}
        //                         onChange={handleDetailsChange}
        //                     />
        //                 </label>
        //                 <label htmlFor="bedrooms">
        //                     Bedrooms:{' '}
        //                     <input
        //                         type="number"
        //                         name="bedrooms"
        //                         placeholder="0"
        //                         value={details.bedrooms}
        //                         onChange={handleDetailsChange}
        //                     />
        //                 </label>
        //             </div>
        //             <div>
        //                 <label htmlFor="beds">
        //                     Beds:{' '}
        //                     <input
        //                         type="number"
        //                         name="beds"
        //                         placeholder="0"
        //                         value={details.beds}
        //                         onChange={handleDetailsChange}
        //                     />
        //                 </label>
        //                 <label htmlFor="baths">
        //                     Baths:{' '}
        //                     <input
        //                         type="number"
        //                         name="baths"
        //                         placeholder="0"
        //                         value={details.baths}
        //                         onChange={handleDetailsChange}
        //                     />
        //                 </label>
        //             </div>
        //         </div>
        //         <div className="offers">
        //             <div>
        //                 <input
        //                     type="checkbox"
        //                     name="wifi"
        //                     checked={offers.wifi}
        //                     onChange={handleOffersChange}
        //                 />
        //                 <label htmlFor="wifi">Wifi</label>
        //                 <input
        //                     type="checkbox"
        //                     name="kitchen"
        //                     checked={offers.kitchen}
        //                     onChange={handleOffersChange}
        //                 />
        //                 <label htmlFor="kitchen">Kitchen</label>
        //                 <input
        //                     type="checkbox"
        //                     name="pets"
        //                     checked={offers.pets}
        //                     onChange={handleOffersChange}
        //                 />
        //                 <label htmlFor="pets">Pets</label>
        //                 <input
        //                     type="checkbox"
        //                     name="tv"
        //                     checked={offers.tv}
        //                     onChange={handleOffersChange}
        //                 />
        //                 <label htmlFor="tv">TV</label>
        //             </div>
        //             <div>
        //                 <input
        //                     type="checkbox"
        //                     name="smoke"
        //                     checked={offers.smoke}
        //                     onChange={handleOffersChange}
        //                 />
        //                 <label htmlFor="smoke">Smoke</label>
        //                 <input
        //                     type="checkbox"
        //                     name="parking"
        //                     checked={offers.parking}
        //                     onChange={handleOffersChange}
        //                 />
        //                 <label htmlFor="parking">Parking</label>
        //                 <input
        //                     type="checkbox"
        //                     name="pool"
        //                     checked={offers.pool}
        //                     onChange={handleOffersChange}
        //                 />
        //                 <label htmlFor="pool">Pool</label>
        //             </div>
        //         </div>

        //         <button className="btn" onClick={handleSubmit}>
        //             Add your property
        //         </button>
        //         {error ? (
        //             <p style={{ color: 'red' }}>Please Fill All inputs</p>
        //         ) : (
        //             ''
        //         )}
        //     </div>
        // </div>
    );
}

export default AddPropertyForm;
