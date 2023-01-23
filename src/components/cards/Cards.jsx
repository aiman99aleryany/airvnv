import React from 'react';
import Card from '../card/Card';
import useStoreProperties from '../../store/store';
import useStorePropertiesFilters from '../../store/store-propertiesFilters';
import { toUnix } from '../../store/unixTime';
import { nanoid } from 'nanoid';
import { motion } from 'framer-motion';

import './Cards.scss';
function Cards() {
    const properties = useStoreProperties((state) => state.properties);
    const filterProps = useStorePropertiesFilters((state) => state.filterProps);

    const filterPropertiesLocation = (props, filters) => {
        const isCountryExist = filters.location.country !== '' ? true : false;
        const isCityExist = filters.location.city !== '' ? true : false;

        const isLocationExist = isCountryExist && isCityExist ? true : false;
        if (isLocationExist) {
            return props.filter((property) => {
                const country = property.location.country.toLowerCase();
                const city = property.location.city.toLowerCase();

                const searchedCountry = filters.location.country.toLowerCase();
                const searchedCity = filters.location.city.toLowerCase();
                return city === searchedCity && country === searchedCountry;
            });
        } else if (isCountryExist && !isCityExist) {
            return props.filter((property) => {
                const country = property.location.country.toLowerCase();

                const searchedCountry = filters.location.country.toLowerCase();
                return country === searchedCountry;
            });
        }
        return props;
    };

    const filterPropertiesDate = (props, filters) => {
        const isStartDateExist = filters.startDate !== '' ? true : false;
        const isEndDateExist = filters.endDate !== '' ? true : false;
        const isDateExist = isStartDateExist && isEndDateExist ? true : false;

        if (isDateExist) {
            return props.filter((property) => {
                return (
                    toUnix(property.startDate) <= toUnix(filters.startDate) &&
                    toUnix(property.endDate) >= toUnix(filters.endDate)
                );
            });
        }

        return props;
    };

    const filterPropertiesDetails = (props, filters) => {
        const isGuestsExist = filters.details.guests !== 0 ? true : false;

        if (isGuestsExist) {
            return props.filter((property) => {
                return (
                    Number(property.details.guests) >=
                        Number(filters.details.guests) &&
                    Number(property.details.beds) >=
                        Number(filters.details.guests) &&
                    Number(property.details.bedrooms) >=
                        Number(filters.details.bedrooms) &&
                    Number(property.details.baths) >=
                        Number(filters.details.baths)
                );
            });
        }

        return props;
    };

    const filterProperties = (props, filters) => {
        if (filters.isFiltersApplied) {
            const filteredOnLocation = filterPropertiesLocation(props, filters);
            const filteredOnDate = filterPropertiesDate(
                filteredOnLocation,
                filters
            );
            const filteredOnDetails = filterPropertiesDetails(
                filteredOnDate,
                filters
            );
            return filteredOnDetails;
        }
        return props;
    };

    return (
        <div className="cards">
            <div className="cards-content">
                {filterProperties(properties, filterProps).map((property) => (
                    <motion.div
                        initial={{ y: 1000 }}
                        animate={{ y: 0 }}
                        transition={{ type: 'twin', duration: 1, delay: 0.1 }}
                        key={nanoid()}
                    >
                        <Card property={property} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
