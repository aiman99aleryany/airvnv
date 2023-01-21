import React from 'react';
import { Link } from 'react-router-dom';
import Apt1 from '../../assets/apartment1.jpg';
import Apt2 from '../../assets/apartment2.jpg';
import Apt3 from '../../assets/apartment3.jpg';

import './Best.scss';

function Best() {
    return (
        <div className="best">
            <h1>Find best Rated properties</h1>
            <div>
                <p>
                    <span className="bold">All</span>
                </p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Agricultural</p>
            </div>
            <div className="container">
                <img src={Apt1} alt="1" />
                <img src={Apt2} alt="2" />
                <img src={Apt3} alt="3" />
            </div>
            <Link to={'/view-all'}>
                <button className="btn">View All</button>
            </Link>
        </div>
    );
}

export default Best;
