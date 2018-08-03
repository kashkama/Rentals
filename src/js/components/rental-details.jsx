import React from "react";
import {Whoops404} from "./../../routes/pages";
import PropTypes from "prop-types";

const RentalDetails = ({title, image, loc, price, owner, location, history}) => {
    return (
        (!title) ?
            <Whoops404 location={location}/> :
            <div className="rental-details"
                style={{backgroundColor:"white"}}
                onClick={() => history.goBack()}
            >
                <h2>{title}</h2>
                <h3>{loc}</h3>
                <h3>{price}</h3>
                <h3>{owner}</h3>
            </div>
    );
};

RentalDetails.propTypes = {
    title: PropTypes.string,
    loc : PropTypes.loc,
    location: PropTypes.object,
    price: PropTypes.number,
    owner: PropTypes.string,
    history: PropTypes.object
};

export default RentalDetails;