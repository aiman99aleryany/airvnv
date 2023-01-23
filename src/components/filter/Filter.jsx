import React, { useState, useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useStorePropertiesFilters from '../../store/store-propertiesFilters';
import countries from '../../store/countries';
import countriesWithCities from '../../store/countriesWithCities';
import { nanoid } from 'nanoid';

import INIT_FILTERS from '../../store/initFilters';
import { motion } from 'framer-motion';

import './Filter.scss';
function Filter() {
    // filters states
    const [filters, setFilters] = useState(INIT_FILTERS);
    const [location, setLocation] = useState(INIT_FILTERS.location);
    const [details, setDetails] = useState(INIT_FILTERS.details);

    // Error states
    const [dateError, setDateError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);

    // rendering states
    const [showFilters, setShowFilters] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [showDates, setShowDates] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    // refs
    const countryDropdownRef = useRef();
    const cityDropdownRef = useRef();

    const addFilterProps = useStorePropertiesFilters(
        (state) => state.addFilterProps
    );

    const filterProps = useStorePropertiesFilters((state) => state.filterProps);

    const clearFilterProps = useStorePropertiesFilters(
        (state) => state.clearFilterProps
    );

    useEffect(() => {
        setFilters((state) => ({
            ...state,
            location: { ...location },
            details: { ...details },
        }));
    }, [location, details]);

    useEffect(() => {
        window.addEventListener('click', (e) => {
            console.log('window clicked');
            countryDropdownRef.current.style.display = 'none';
            cityDropdownRef.current.style.display = 'none';
        });
    });

    const handleFiltersChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFilters((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const handleLocationChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === 'country') {
            countryDropdownRef.current.style.display = 'flex';
        } else if (name === 'city') {
            cityDropdownRef.current.style.display = 'flex';
        }

        setLocation((state) => ({
            ...state,
            [name]: value,
        }));
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

    const handleFilterSubmit = (e) => {
        const isDatesWrong =
            (filters.startDate && !filters.endDate) ||
            (!filters.startDate && filters.endDate)
                ? true
                : false;

        if (isDatesWrong) {
            setDateError(true);
        }

        const isDetailsWrong =
            !details.guests &&
            (details.bedrooms || details.beds || details.baths)
                ? true
                : false;

        if (isDetailsWrong) {
            setDetailsError(true);
        }

        const isFiltersExist =
            location.country ||
            location.city ||
            !isDetailsWrong ||
            !isDatesWrong
                ? true
                : false;
        if (isFiltersExist) {
            console.log('filters', filters);
            filters.isFiltersApplied = true;
            addFilterProps(filters);
            setDateError(false);
            setDetailsError(false);
        }
    };

    const toggleFilterDetails = () => {
        setShowDetails((state) => !state);
    };

    const toggleFilterLocation = () => {
        setShowLocation((state) => !state);
    };

    const toggleFilterDates = () => {
        setShowDates((state) => !state);
    };

    const toggleFilters = () => {
        setShowFilters((state) => !state);
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

    const resetFilters = () => {
        clearFilterProps();
        setLocation(INIT_FILTERS.location);
        setDetails(INIT_FILTERS.details);
        setFilters(INIT_FILTERS);

        setShowLocation(false);
        setShowDates(false);
        setShowDetails(false);
    };

    console.log(filterProps);
    return (
        <div className="filter-wrapper">
            <motion.div
                className="showFilters"
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.1 }}
            >
                <button className="btn" onClick={toggleFilters}>
                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
            </motion.div>
            {showFilters && (
                <motion.div
                    className="filter"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className="filter-content">
                        <div className="filter-more-location">
                            <button
                                className="btn"
                                onClick={toggleFilterLocation}
                            >
                                Filter Location
                            </button>
                        </div>
                        {showLocation && (
                            <motion.div
                                className="filter-location"
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className="filter-country">
                                    <input
                                        name="country"
                                        type="text"
                                        placeholder="Enter Country"
                                        value={location.country}
                                        onChange={handleLocationChange}
                                        autoComplete="off"
                                        className="filter-input"
                                        onClick={showCountryDropdown}
                                    />
                                    <ul
                                        className="filter-country-dropdown"
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

                                <div className="filter-city">
                                    <input
                                        name="city"
                                        type="text"
                                        placeholder="Enter City"
                                        value={location.city}
                                        onChange={handleLocationChange}
                                        autoComplete="off"
                                        className="filter-input"
                                        onClick={showCityDropdown}
                                    />
                                    <ul
                                        className="filter-city-dropdown"
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
                        <div className="filter-more-dates">
                            <button className="btn" onClick={toggleFilterDates}>
                                Filter Dates
                            </button>
                        </div>
                        {showDates && (
                            <motion.div
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="filter-dates"
                            >
                                <div className="filter-startDate">
                                    <label htmlFor="startDate">Check in:</label>
                                    <input
                                        name="startDate"
                                        type="date"
                                        value={filters.startDate}
                                        onChange={handleFiltersChange}
                                        className="filter-input"
                                    />
                                </div>

                                <div className="filter-endDate">
                                    <label htmlFor="endDate"> Check out:</label>
                                    <input
                                        name="endDate"
                                        type="date"
                                        value={filters.endDate}
                                        onChange={handleFiltersChange}
                                        className="filter-input"
                                    />
                                </div>
                                {dateError ? (
                                    <p style={{ color: 'red' }}>
                                        Please Enter a Valid Dates
                                    </p>
                                ) : null}
                            </motion.div>
                        )}
                        <div className="filter-more-details">
                            <button
                                className="btn"
                                onClick={toggleFilterDetails}
                            >
                                Filter more details
                            </button>
                        </div>
                        {showDetails && (
                            <motion.div
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="filter-details"
                            >
                                <div className="filter-guests">
                                    <label htmlFor="guests">Guests:</label>
                                    <input
                                        name="guests"
                                        type="number"
                                        value={details.guests}
                                        onChange={handleDetailsChange}
                                        className="filter-input"
                                    />
                                </div>

                                <div className="filter-bedrooms">
                                    <label htmlFor="bedrooms">Bedrooms:</label>
                                    <input
                                        name="bedrooms"
                                        type="number"
                                        value={details.bedrooms}
                                        onChange={handleDetailsChange}
                                        className="filter-input"
                                    />
                                </div>

                                <div className="filter-beds">
                                    <label htmlFor="beds">Beds:</label>
                                    <input
                                        name="beds"
                                        type="number"
                                        value={details.beds}
                                        onChange={handleDetailsChange}
                                        className="filter-input"
                                    />
                                </div>

                                <div className="filter-baths">
                                    <label htmlFor="">Baths:</label>
                                    <input
                                        name="baths"
                                        type="number"
                                        value={details.baths}
                                        onChange={handleDetailsChange}
                                        className="filter-input"
                                    />
                                </div>
                                {detailsError ? (
                                    <p style={{ color: 'red' }}>
                                        Please specify Guests
                                    </p>
                                ) : null}
                            </motion.div>
                        )}

                        <button
                            type="button"
                            className="filter-submit btn"
                            onClick={handleFilterSubmit}
                        >
                            <BsSearch />
                        </button>
                        <button
                            className="filter-submit btn"
                            onClick={resetFilters}
                        >
                            Clear Filters
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

export default Filter;
