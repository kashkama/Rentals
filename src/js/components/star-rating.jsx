import React from "react";
import Star from "./star";
import PropTypes from "prop-types";

const StartRating = ({starsSelected, totalStars=5, onRate=f=>f}) => {
    return (
        <div className="star-rating">
            {
                [...Array(totalStars)].map((n,i) =>
                    <Star key={i}
                        selected={i<starsSelected}
                        onClick={()=> onRate(i+1)}
                    />
                )
            }
            <p>{starsSelected} of {totalStars} stars</p>
        </div>
    );
};

StartRating.propTypes = {
    starsSelected: PropTypes.number,
    totalStars: PropTypes.number,
    onRate: PropTypes.func
};

export default StartRating;