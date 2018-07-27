import React from "react";
import Rental from "./rental";
import PropTypes from "prop-types";

const RentalList = ({rentals=[], onRate=f=>f, onRemove=f=>f}) => {
    return(
        <article className="rental-container flex-container">
            {
                //validate presence of rentals
                (rentals.length === 0) ?
                    <p>No Rentals Listed.</p> :
                    rentals.map((rental) =>
                        <Rental
                            key={rental.id}
                            {...rental}
                            onRate={(rating) => onRate(rental.id, rating)}
                            onRemove={() => onRemove(rental.id)}
                        />
                    )   
            }
        </article>
    );
};

RentalList.propTypes = {
    rentals: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
};

export default RentalList;