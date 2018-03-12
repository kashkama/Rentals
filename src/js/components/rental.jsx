import React from "react";
import StarRating from "./star-rating";
import PropTypes from "prop-types";
import { removeRental } from "../../actions/creators";

class Rental extends React.Component {

    componentWillMount() {
        this.style = {backgroundColor: "#CCC"};
    }

    render() {
        const {title, image, location, id, rating, price, owner} = this.props;
        const {store} = this.context;
        return(
            <section className="rental" style={this.style}>
                <h2>{title}</h2>
                <h4>{image}</h4>
                <h4>location,{location}</h4>
                <h4>{rating}</h4>
                <h4>USD{price}</h4>
                <h4>owner, {owner}</h4>
                <button
                    onClick={() =>
                        store.dispatch(removeRental(id))
                    }
                >remove rental</button>
            </section>
        )
    }
}

Rental.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    owner: PropTypes.string,
    onRemove: PropTypes.func,
    onRate: PropTypes.func 
};

Rental.contextTypes = {
    store: PropTypes.object
};

export default Rental;