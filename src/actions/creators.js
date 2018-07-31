import {contants as C} from "./../utils/contants";
import {v4} from "uuid";

export const addRental = (title, image, location, price, owner) => ({
    type: C.ADD_RENTAL,
    title,
    image,
    location,
    id: v4(),
    rating: 0,
    price,
    owner,
    timestamp: new Date().toString()
});

export const removeRental = (id) => (
    {
        type: C.REMOVE_RENTAL,
        id
    }
);

export const rateRental = (id, rating) => (
    {
        type: C.RATE_RENTAL,
        id,
        rating
    }
);
