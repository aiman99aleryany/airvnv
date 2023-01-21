import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function Hero() {
    return (
        <div className="hero">
            <div className="content">
                <h1>Find the Perfect place</h1>
                <p className="search-text">
                    Search and Rent the largest selection of luxury high-rise
                    apartments, houses, and properties
                </p>

                <form className="search">
                    <div>
                        <input type="text" placeholder="Enter Keyword.." />
                    </div>
                    <div className="radio">
                        <input type="radio" checked />
                        <label htmlFor="">Buy</label>
                        <input type="radio" />
                        <label htmlFor="">Rent</label>
                        <button type="submit">
                            <AiOutlineSearch className="icon" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Hero;
