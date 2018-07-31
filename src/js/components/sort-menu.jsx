import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./../../scss/components/menu.scss";

const selectedStyle = { 
    color : "red" 
};

const SortMenu = ({ match }) => 
    <nav className="menu">
        <NavLink to="/rentals" style={match.isExact && selectedStyle}>date</NavLink>
        <NavLink to="/rentals/sort/price" activeStyle={selectedStyle}>price</NavLink>
        <NavLink to="/rentals/sort/rating" activeStyle={selectedStyle}>rating</NavLink>
    </nav>;

SortMenu.propTypes = {
    match: PropTypes.object
};

export default SortMenu;