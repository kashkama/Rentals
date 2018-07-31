import { compose } from "redux";

const sortByDate = field => 
    (a,b) => new Date(b[field]) - new Date(a[field]);

const sortByPrice = field =>
    (a,b) => b[field] - a[field];

const sortByRating = field => 
    (a,b) => b[field] - a[field];

const whichSort = (type, field) =>
    (type === "date") ?
        sortByDate(field) :
        (type === "number") ?
            sortByRating(field):
            sortByPrice(field);

export const sortFunction = sort =>
    (sort === "SORTED_BY_DATE") ?
        whichSort("date", "timestamp") :
        (sort === "SORTED_BY_RATING") ?
            whichSort("number", "rating") :
            whichSort("number-price", "price");

const getSortState = (sortBy = "date",
    stateHash ={
        date: "SORTED_BY_DATE",
        price: "SORTED_By_PRICE",
        rating: "SORTED_BY_RATING"
    }) => stateHash[sortBy];

const locateSortFunction = compose(
    sortFunction,
    getSortState
);

export const sortRentals = (rentals, sortBy) => compose(
    fn => [...rentals].sort(fn),  
    locateSortFunction
)(sortBy);