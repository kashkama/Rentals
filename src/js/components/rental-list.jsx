import React from "react";
import Rental from "./rental";
import PropTypes from "prop-types";

const RentalList = ({rentals=[]}) => {
    return(
        <div className="rental-list">
            {
                //validate presence of rentals
                (rentals.length === 0) ?
                    <p>No Rentals Listed.</p> :
                    rentals.map((rental) =>
                        <Rental
                            key={rental.id}
                            {...rental}
                        />
                    )   
            }
        </div>
    );
};

RentalList.propTypes = {
    rentals: PropTypes.array
};

export default RentalList;