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
        case C.RATE_RENTAL:
            return 
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
        case C.RATE_RENTAL:
            return state.map(
                rental => rental(rental, action)
            );
        case C.REMOVE_RENTAL:
            return state.filter(
                rental => rental.id !== action.id
            );
        default:
            return state;
    }
};

export const sort = (state="SORT_BY_DATE", action) => {
    
};