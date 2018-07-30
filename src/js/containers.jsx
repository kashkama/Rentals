import React from "react";
import { connect } from "react-redux";
import AddRentalForm from "./components/add-rental-form";
import SortMenu from "./components/sort-menu";
import RentalList from "./components/rental-list";
import {addRental, sortRentals, rateRental, removeRental} from "./../actions/creators";
import {sortFunction} from "./../lib/sort-helper";

export const NewRental = connect(
    null,
    dispatch => 
        ({
            onNewRental(title, image, location, price, owner) {
                dispatch(addRental(title, image, location, price, owner))
            }
        })
)(AddRentalForm);


export const Menu = connect(
    state => 
        ({
            sort: state.sort
        }),
    dispatch => 
        ({
            onSelect(sortBy) {
                dispatch(sortRentals(sortBy))
            }
        })	
)(SortMenu);


export const Rentals = connect(
    state => 
        ({
            rentals: [...state.rentals].sort(sortFunction(state.sort))
        }),
    dispatch => 
        ({
            onRemove(id) {
                dispatch(removeRental(id))
            },
            onRate(id, rating) {
                dispatch(rateRental(id, rating))
            }
        })
)(RentalList);