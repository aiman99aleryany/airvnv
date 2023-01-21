import React from 'react';

import House1 from '../../assets/house1.jpg';
import House1Bed1 from '../../assets/house1-bedroom.jpg';
import House1Bed2 from '../../assets/house1-bedroom2.jpg';
import House1Kitchen from '../../assets/house1-kitchen.jpg';
import House1Bathroom from '../../assets/house1-bathroom.jpg';

import House2 from '../../assets/house2.jpg';
import House2Bed1 from '../../assets/house2-bedroom.jpg';
import House2Bed2 from '../../assets/house2-bedroom2.jpg';
import House2Kitchen from '../../assets/house2-kitchen.jpg';
import House2Bathroom from '../../assets/house2-bathroom.jpg';

import './Featured.scss';

function Featured() {
    return (
        <div className="featured">
            <h1 className="featured-text">Top Featured Listings</h1>
            <p>Selected listings based by City, Country, & Zip based on View</p>
            <div className="container">
                <img
                    className="span-3 image-grid-row-2 order-1"
                    src={House1}
                    alt=""
                />
                <img className="order-2" src={House1Bed1} alt="" />
                <img className="order-3" src={House1Bed2} alt="" />
                <img className="order-4" src={House1Kitchen} alt="" />
                <img className="order-5" src={House1Bathroom} alt="" />
                <div className="span-3 img-details order-6">
                    <span className="top">
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>House for Sale</p>
                        <p className="price">$1000</p>
                    </span>
                    <div className="info-grid">
                        <div>
                            <div className="info">
                                <p className="bold">Bedrooms: </p>
                                <p>5</p>
                            </div>
                            <div className="info">
                                <p className="bold">Bathrooms: </p>
                                <p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className="info">
                                <p className="bold">Square Feet: </p>
                                <p>8,138</p>
                            </div>
                            <div className="info">
                                <p className="bold">Est Payment: </p>
                                <p>$14, 797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="span-2 right-img-details order-7">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea, incidunt.
                    </p>
                    <button className="btn">View listing</button>
                </div>
            </div>

            {/* Section section */}

            <div className="container">
                <img src={House2Bed1} alt="" />
                <img src={House2Bed2} alt="" />

                <img className="span-3 image-grid-row-2" src={House2} alt="" />

                <img src={House2Kitchen} alt="" />
                <img src={House2Bathroom} alt="" />

                <div className="span-2 right-img-details">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea, incidunt.
                    </p>
                    <button className="btn">View listing</button>
                </div>
                <div className="span-3 img-details">
                    <span className="top">
                        <h2>123 Acme St. Dallas, TX</h2>
                        <p>House for Sale</p>
                        <p className="price">$1000</p>
                    </span>
                    <div className="info-grid">
                        <div>
                            <div className="info">
                                <p className="bold">Bedrooms: </p>
                                <p>5</p>
                            </div>
                            <div className="info">
                                <p className="bold">Bathrooms: </p>
                                <p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className="info">
                                <p className="bold">Square Feet: </p>
                                <p>8,138</p>
                            </div>
                            <div className="info">
                                <p className="bold">Est Payment: </p>
                                <p>$14, 797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
