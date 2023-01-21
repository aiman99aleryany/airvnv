import { useState } from 'react';
import './AddPropertyForm.scss';
import countriesWithCities from '../../store/countriesWithCities';

function AddPropertyForm() {
    // -------------------------States--------------------------------
    const [titleValue, setTitleValue] = useState('');
    const [descValue, setDescValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [typeValue, setTypeValue] = useState('');
    const [countryValue, setCountryValue] = useState('');
    const [cityValue, setCityValue] = useState('');
    const [addressValue, setAddressValue] = useState('');
    const [fromDateValue, setFromDateValue] = useState('');
    const [toDateValue, setToDateValue] = useState('');
    const [guestsValue, setGuestsValue] = useState('');
    const [bedroomsValue, setBedroomsValue] = useState('');
    const [bedsValue, setBedsValue] = useState('');
    const [bathsValue, setBathsValue] = useState('');

    //------------------- Change Handlers -----------------------------------------------
    const titleValueChangeHandler = (e) => {
        setTitleValue(e.target.value);
    };

    const descValueChangeHandler = (e) => {
        setDescValue(e.target.value);
    };

    const priceValueChangeHandler = (e) => {
        setPriceValue(e.target.value);
    };

    const typeValueChangeHandler = (e) => {
        setTypeValue(e.target.value);
    };

    const countryValueChangeHandler = (e) => {
        setCountryValue(e.target.value);
    };

    const cityValueChangeHandler = (e) => {
        setCityValue(e.target.value);
    };

    const addressValueChangeHandler = (e) => {
        setAddressValue(e.target.value);
    };

    const fromDateValueChangeHandler = (e) => {
        setFromDateValue(e.target.value);
    };

    const toDateValueChangeHandler = (e) => {
        setToDateValue(e.target.value);
    };

    const guestsValueChangeHandler = (e) => {
        setGuestsValue(e.target.value);
    };

    const bedroomsValueChangeHandler = (e) => {
        setBedroomsValue(e.target.value);
    };

    const bedsValueChangeHandler = (e) => {
        setBedsValue(e.target.value);
    };

    const bathsValueChangeHandler = (e) => {
        setBathsValue(e.target.value);
    };

    //-------------------------Renders Component ------------------------------------------------
    return (
        <div className="form-wrapper">
            <form>
                <h1>Add Your Property</h1>
                <div className="photos-wrapper">
                    <div className="photos">
                        <label htmlFor="photo1">
                            Cover Photo:{' '}
                            <input type="file" name="photo1" accept="image/*" />
                        </label>
                        <label htmlFor="photo2">
                            Second Photo:{' '}
                            <input type="file" name="photo2" accept="image/*" />
                        </label>
                        <label htmlFor="photo3">
                            Third Photo:{' '}
                            <input type="file" name="photo3" accept="image/*" />
                        </label>
                    </div>
                    <div className="photos">
                        <label htmlFor="photo4">
                            Fourth Photo:{' '}
                            <input type="file" name="photo4" accept="image/*" />
                        </label>
                        <label htmlFor="photo5">
                            Fifth Photo:{' '}
                            <input type="file" name="photo5" accept="image/*" />
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
                        value={titleValue}
                        onChange={titleValueChangeHandler}
                    />
                </div>
                <div className="desc">
                    <label htmlFor="desc">Description:</label>
                    <textarea
                        name="desc"
                        cols="20"
                        rows="5"
                        placeholder="Tell about your property...."
                        value={descValue}
                        onChange={descValueChangeHandler}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input
                        className="text-input"
                        type="number"
                        name="price"
                        placeholder="40"
                        value={priceValue}
                        onChange={priceValueChangeHandler}
                    />
                    <p>$/night</p>
                </div>
                <div className="select">
                    <label htmlFor="type">Property Type:</label>
                    <select
                        name="type"
                        value={typeValue}
                        onChange={typeValueChangeHandler}
                    >
                        <option value="">Choose one</option>
                        <option value="House">House</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Cabin">Cabin</option>
                        <option value="Villa">Villa</option>
                    </select>
                </div>
                <div className="location">
                    <div>
                        <label htmlFor="country">Country:</label>
                        <input
                            list="countries"
                            name="country"
                            className="text-input"
                            value={countryValue}
                            onChange={countryValueChangeHandler}
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
                            value={cityValue}
                            onChange={cityValueChangeHandler}
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
                        value={addressValue}
                        onChange={addressValueChangeHandler}
                    ></textarea>
                </div>
                <div className="date">
                    <div>
                        <label htmlFor="fromDate">From:</label>
                        <input
                            type="date"
                            name="fromDate"
                            value={fromDateValue}
                            onChange={fromDateValueChangeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="toDate">To:</label>
                        <input
                            type="date"
                            name="toDate"
                            value={toDateValue}
                            onChange={toDateValueChangeHandler}
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
                                value={guestsValue}
                                onChange={guestsValueChangeHandler}
                            />
                        </label>
                        <label htmlFor="bedrooms">
                            Bedrooms:{' '}
                            <input
                                type="number"
                                name="bedrooms"
                                placeholder="0"
                                value={bedroomsValue}
                                onChange={bedroomsValueChangeHandler}
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
                                value={bedsValue}
                                onChange={bedsValueChangeHandler}
                            />
                        </label>
                        <label htmlFor="baths">
                            Baths:{' '}
                            <input
                                type="number"
                                name="baths"
                                placeholder="0"
                                value={bathsValue}
                                onChange={bathsValueChangeHandler}
                            />
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn">
                    Add your property
                </button>
            </form>
        </div>
    );
}

export default AddPropertyForm;
