import React from "react";
import StarRating from "./star-rating";
import PropTypes from "prop-types";
import { removeRental, rateRental } from "../../actions/creators";

class Rental extends React.Component {

    componentWillMount() {
        this.style = {backgroundColor: "#CCC"};
    }

    render() {
        const {title, image, location, id, rating, price, owner} = this.props;
        const {store} = this.context;
        return(
            <section className="rental" style={this.style}>
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <div className="image">
                    <h4>{image}</h4>
                </div>
                <div className="information">
                    <h4>location:{location}</h4>
                    <h4>${price}</h4>
                    <h4>owner:{owner}</h4>
                    <button
                        onClick={() =>
                            store.dispatch(removeRental(id))
                        }
                    >remove rental</button>
                    <StarRating starsSelected={rating}
                        onRate={rating => store.dispatch(rateRental(id, rating))}
                    />
                </div>
                <hr/>
            </section>
        );
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