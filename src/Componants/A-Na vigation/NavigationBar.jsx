import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <Link to="/">reduxApp</Link>
            <input type="search" />
            <button>Search</button>
            <Link to="/Cart">Cart:</Link>
        </div>
    );
};

export default NavigationBar;