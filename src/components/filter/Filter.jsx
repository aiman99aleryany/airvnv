import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import useStorePropertiesFilters from '../../store/store-propertiesFilters';
import INIT_FILTERS from '../../store/initFilters';

import './Filter.scss';
function Filter() {
    const [filters, setFilters] = useState(INIT_FILTERS);
    const addFilterProps = useStorePropertiesFilters(
        (state) => state.addFilterProps
    );

    const handleFiltersChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFilters((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();

        addFilterProps(filters);
    };

    return (
        <div className="filter">
            <div className="filter-animation"></div>
            <div className="filter-content">
                <form className="filter-form">
                    <div className="filter-country">
                        <input
                            name="country"
                            type="text"
                            placeholder="Enter Country"
                            value={filters.country}
                        />
                    </div>

                    <div className="filter-city">
                        <input
                            name="city"
                            type="text"
                            placeholder="Enter City"
                            value={filters.city}
                        />
                    </div>

                    <div className="filter-startDate">
                        <label htmlFor="startDate">Check in:</label>
                        <input
                            name="startDate"
                            type="date"
                            value={filters.startDate}
                        />
                    </div>

                    <div className="filter-endDate">
                        <label htmlFor="endDate"> Check out:</label>
                        <input name="endDate" type="date" value={filters.end} />
                    </div>

                    <div className="filter-guests">
                        <label htmlFor="guests">Guests:</label>
                        <input name="guests" type="number" />
                    </div>

                    <div className="filter-bedrooms">
                        <label htmlFor="bedrooms">Bedrooms:</label>
                        <input name="bedrooms" type="number" />
                    </div>

                    <div className="filter-beds">
                        <label htmlFor="beds">Beds:</label>
                        <input name="beds" type="number" />
                    </div>

                    <div className="filter-baths">
                        <label htmlFor="">Baths:</label>
                        <input name="baths" type="number" />
                    </div>

                    <button
                        type="submit"
                        className="filter-submit"
                        onClick={handleFilterSubmit}
                    >
                        <BsSearch />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Filter;
