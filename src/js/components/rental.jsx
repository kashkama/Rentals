import React from "react";
import StarRating from "./star-rating";
import PropTypes from "prop-types";

class Rental extends React.Component {

    componentWillMount() {
        this.style = {backgroundColor: "#CCC"};
    }

    render() {
        const {title, image, location, rating, price, owner, onRemove, onRate} = this.props;
        return(
            <section className="rental" style={this.style}>
                <header className="title">
                    <h2>{title}</h2>
                </header>
                <div className="image">
                    <h4>{image}</h4>
                </div>
                <div className="information">
                    <h4>location:{location}</h4>
                    <h4>${price}</h4>
                    <h4>owner:{owner}</h4>
                    <button
                        onClick={onRemove}
                    >remove rental</button>
                    <StarRating starsSelected={rating}
                        onRate={onRate}
                    />
                </div>
                <hr/>
            </section>
        );
    }
}

Rental.propTypes = {
    title: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    owner: PropTypes.string,
    onRemove: PropTypes.func,
    onRate: PropTypes.func 
};

Rental.defaultProps = {
    onRemove: f=>f,
    onRate: f=>f
};

export default Rental;