import React from "react";
import AddRentalForm from "./components/add-rental-form";
import SortMenu from "./components/sort-menu";
import RentalList from "./components/rental-list";
import {addRental, sortRentals, rateRental, removeRental} from "./../actions/creators";
import {sortFunction} from "./../lib/sort-helper";
import PropTypes from "prop-types";

export const NewRental = (props, {store}) => {
	return(
		<AddRentalForm onNewRental={
			(title, image, location, price, owner) => store.dispatch(addRental(title, image, location, price, owner))
		}/>
	);
};

NewRental.contextTypes = {
	store: PropTypes.object
};

export const Menu = (props, {store}) => {
	return(
		<SortMenu sort={store.getState().sort}
			onSelect={ sortBy =>
				store.dispatch(sortRentals(sortBy))
			}
		/>
	);
};

Menu.contextTypes = {
	store: PropTypes.object
};

export const Rentals = (props, {store}) => {
	const {rentals, sort} = store.getState();
	const selectedRentals = [...rentals].sort(sortFunction(sort));
	return(
		<RentalList rentals={selectedRentals}
			onRemove={id => store.dispatch(removeRental(id))}
			onRate={(id, rating) => store.dispatch(rateRental(id, rating))}
		/>
	);
};

Rentals.contextTypes = {
	store: PropTypes.object
};