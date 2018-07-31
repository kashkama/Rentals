import { connect } from "react-redux";
import AddRentalForm from "./components/add-rental-form";
import RentalList from "./components/rental-list";
import RentalDetails from "./components/rental-details";
import {addRental, rateRental, removeRental} from "./../actions/creators";
import {sortRentals} from "./../lib/sort-helper";
import {findById} from "./../lib/rental-helper";

export const NewRental = connect(
    null,
    dispatch => 
        ({
            onNewRental(title, image, location, price, owner) {
                dispatch(addRental(title, image, location, price, owner));
            }
        })
)(AddRentalForm);

export const Rentals = connect(
    ({rentals}, {match}) => 
        ({
            rentals: sortRentals(rentals, match.params.sort)
        }),
    dispatch => 
        ({
            onRemove(id) {
                dispatch(removeRental(id));
            },
            onRate(id, rating) {
                dispatch(rateRental(id, rating));
            }
        })
)(RentalList);

export const Rental = connect(
    ({rentals}, {match}) => findById(rentals, match.params.id)
)(RentalDetails);