import {contants as C} from "../utils/contants";

export const rental = (state={}, action) => {
    switch(action.type) {
        case C.ADD_RENTAL:
            return {
                title: action.title,
                image: action.image,
                location: action.location,
                id: action.id,
                rating: action.rating,
                price: action.price,
                owner: action.owner,
                timestamp: action.timestamp
            };
        default:
            return state;
    }
};

export const rentals = (state=[], action) => {
    switch(action.type) {
        case C.ADD_RENTAL:
            return [
                ...state,
                rental({}, action)
            ];
        default:
            return state;
    }
};

export const sort = (state="SORT_BY_DATE", action) => {
    
};