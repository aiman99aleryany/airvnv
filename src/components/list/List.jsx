import React, { useState } from 'react';
import NavBar from '../navbar/NavBar';

function List(props) {
    const { property } = props;

    return (
        <div>
            <NavBar />
        </div>
    );
}

export default List;
