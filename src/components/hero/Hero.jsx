import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { motion } from 'framer-motion';
import useStoreProperties from '../../store/store';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import './Hero.scss';

function Hero() {
    const [keyword, setKeyword] = useState('');
    const [result, setResult] = useState(null);
    const [isAbleToSearch, setIsAbleToSearch] = useState(false);
    const properties = useStoreProperties((state) => state.properties);
    const keywordDropdownRef = useRef();

    useEffect(() => {
        window.addEventListener('click', () => {
            keywordDropdownRef.current.style.display = 'none';
        });
    }, []);

    useEffect(() => {
        const temp = properties.filter((property) => {
            return property.title === keyword;
        });

        if (temp.length > 0) {
            setIsAbleToSearch(true);
            setResult((state) => ({ ...state, ...temp[0] }));
        }
    }, [keyword, result, properties]);

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value);
        keywordDropdownRef.current.style.display = 'flex';
    };

    const searchInProperties = (ps) => {
        const titleResults = ps.filter((property) => {
            const smallKeyword = keyword.toLowerCase();
            const smallProperty = property.title.toLowerCase();
            return smallKeyword && smallProperty.includes(smallKeyword);
        });

        const typeResults = ps.filter((property) => {
            const smallKeyword = keyword.toLowerCase();
            const smallProperty = property.type.toLowerCase();

            return smallKeyword && smallProperty.includes(smallKeyword);
        });

        const locationResults = ps.filter((property) => {
            const smallKeyword = keyword.toLowerCase();
            const smallPropertyCountry =
                property.location.country.toLowerCase();
            const smallPropertyCity = property.location.city.toLowerCase();

            return (
                smallKeyword &&
                (smallPropertyCountry.startsWith(smallKeyword) ||
                    smallPropertyCity.startsWith(smallKeyword))
            );
        });

        const totalResults = [
            ...titleResults,
            ...typeResults,
            ...locationResults,
        ];

        return totalResults;
    };

    return (
        <motion.div
            className="hero"
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ type: 'twin', duration: 1, delay: 0.1 }}
        >
            <div className="hero-background"></div>
            <div className="content">
                <h1>Find the Perfect place</h1>
                <p className="search-text">
                    Search and Rent the largest selection of luxury high-rise
                    apartments, houses, and properties
                </p>

                <form className="search">
                    <div>
                        <input
                            type="text"
                            placeholder="Enter Keyword.."
                            value={keyword}
                            onChange={handleKeywordChange}
                            onClick={() =>
                                (keywordDropdownRef.current.style.display =
                                    'flex')
                            }
                        />
                        <ul
                            className="keyword-dropdown"
                            ref={keywordDropdownRef}
                        >
                            {searchInProperties(properties).map((result) => {
                                return (
                                    <li
                                        key={nanoid()}
                                        onClick={() => setKeyword(result.title)}
                                    >
                                        {result.title}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {isAbleToSearch ? (
                        <Link to={`/property/${result.id}`}>
                            <motion.button
                                type="button"
                                whileHover={{ scale: 1.1 }}
                            >
                                <AiOutlineSearch className="icon" />
                            </motion.button>
                        </Link>
                    ) : (
                        <motion.button
                            type="button"
                            whileHover={{ scale: 1.1 }}
                        >
                            <AiOutlineSearch className="icon" />
                        </motion.button>
                    )}
                </form>
            </div>
        </motion.div>
    );
}

export default Hero;
