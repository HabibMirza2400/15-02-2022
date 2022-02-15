import React from 'react';
import { Link } from 'react-router-dom';

const ProductCards = ({ item }) => {
    return (
        <div>

            <h3>{item.title.slice(0, 20) + "..."}</h3>
            <img src={item.image} width="250px" height="250px"
                alt="" />
            <h3>Price:{item.price}</h3>
            {/* <h5>Details:{item.description}</h5> */}
            <button>Add To Cart</button>
            <Link to="/Details">
                <button>View Details</button>
            </Link>
        </div>
    );
};

export default ProductCards;