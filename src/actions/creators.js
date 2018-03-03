import {contants as C} from "./../utils/contants";
import {v4} from "uuid";

export const addRental = (title, image, location, id, rating, price, owner, timestamp) => ({
    type: C.ADD_RENTAL,
    title,
    image,
    location,
    id,
    rating,
    price,
    owner,
    timestamp
});
