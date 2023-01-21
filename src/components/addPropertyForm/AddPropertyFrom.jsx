import React from 'react';
import './AddPropertyForm.scss';

function addPropertyForm() {
    return (
        <div className="form-wrapper">
            <form>
                <h1>Add Your Property</h1>
                <div>
                    <label htmlFor="title">Property Title: </label>
                    <input
                        className="text-input"
                        type="text"
                        name="title"
                        placeholder="Your property's title"
                    />
                </div>
                <div>
                    <label htmlFor="price">Property Title: </label>
                    <input
                        className="text-input"
                        type="number"
                        name="price"
                        placeholder="500"
                    />
                    <p>$</p>
                </div>
                <div className="select">
                    <label htmlFor="type">Property Type:</label>
                    <select name="type">
                        <option value="">Choose one</option>
                        <option value="House">House</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Cabin">Cabin</option>
                        <option value="Villa">Villa</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default addPropertyForm;
