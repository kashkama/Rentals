import React from "react";
import PropTypes from "prop-types";
import "./../../scss/components/menu.scss";
import {sortRentals} from "./../../actions/creators";

// choose ways to sort rentals
const options = {
    date: "SORTED_BY_DATE",
    price: "SORTED_BY_PRICE",
    rating: "SORTED_BY_RATING"
};

const SortMenu = (props, {store}) => {
    return (
        <nav className="menu">
            <h2>Sort Rentals</h2>
            {
                Object.keys(options).map((item, i) =>
                    <a key={i} href="#" 
                        className={(store.getState().sort === options[item]) ? "selected" : null}
                        onClick={e => {
                            e.preventDefault();
                            store.dispatch(sortRentals(item));
                        }}
                    >{item}
                    </a>
                )
            }
        </nav>
    );
};

SortMenu.contextTypes = {
    store: PropTypes.object
};

export default SortMenu;