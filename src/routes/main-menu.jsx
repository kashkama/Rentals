import React from "react";
import HomeIcon from "react-icons/lib/fa/home";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

const selectedStyle = {
    backgroundColor : "white",
    color : "slategray"
};

export const MainMenu = () => 
    <nav className="main-menu">
        <NavLink to="/"><HomeIcon/></NavLink>
        <NavLink to="/about" activeStyle={selectedStyle}>[About]</NavLink>
        <NavLink to="/events" activeStyle={selectedStyle}>[Events]</NavLink>
        <NavLink to="/rentals" activeStyle={selectedStyle}>[Rentals]</NavLink>
        <NavLink to="/contact" activeStyle={selectedStyle}>[Contact Us]</NavLink>
    </nav>;

export const AboutMenu = ({match}) => {
    return (
        <div className="about-menu">
            <ul>
                <li>
                    <NavLink to="/about"
                        style={match.isExact && selectedStyle}
                    >
                    [Company]
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about/team"
                        activeStyle={selectedStyle}
                    >
                    [Team]
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about/location"
                        activeStyle={selectedStyle}
                    >
                    [Location]
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

AboutMenu.propTypes = {
    match : PropTypes.array
};