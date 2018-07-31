import React from "react";
import {Whoops404} from "./../../routes/pages";
import PropTypes from "prop-types";

const RentalDetails = ({title, image, location, price, owner, history}) => {
    return (
        (!title) ?
            <Whoops404 location={location}/> :
            <div className="rental-details"
                style={{backgroundColor:"white"}}
                onClick={() => history.goBack()}
            >
                <h2>{title}</h2>
                <h3>{location}</h3>
                <h3>{price}</h3>
                <h3>{owner}</h3>
            </div>
    );
};

RentalDetails.propTypes = {
    title: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.number,
    owner: PropTypes.string,
    history: PropTypes.object
};

export default RentalDetails;