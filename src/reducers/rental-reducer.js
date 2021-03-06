import {contants as C} from "../utils/contants";

export const rental = (state={}, action) => {
    switch(action.type) {
        case C.ADD_RENTAL:
            return {
                title: action.title,
                image: action.image,
                loc: action.location,
                id: action.id,
                rating: action.rating,
                price: action.price,
                owner: action.owner,
                timestamp: action.timestamp
            };
        case C.RATE_RENTAL:
            return (state.id !== action.id) ?
                state :
                Object.assign(
                    {},
                    state,
                    {
                        rating: action.rating
                    }
                );
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
                r => rental(r, action)
            );
        case C.REMOVE_RENTAL:
            return state.filter(
                rental => rental.id !== action.id
            );
        default:
            return state;
    }
};


