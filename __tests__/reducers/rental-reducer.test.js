import {rental, rentals} from "./../../src/reducers/rental-reducer";
import {addRental, removeRental, rateRental} from "./../../src/actions/creators";

describe("rental Reducer", () => {

    let testState = [];
    let action;
    const sampleRental = {
        title: "Ryan Properties",
        image: "https://upload/apt.jpg",
        location: "Nairobi",
        price:200,
        owner: "Ryan"
    };
    test("Should return default state if not action type is recognized", () => {
        expect(rental({}, {type: null})).toEqual({});
    });

    test("should add rental", () => {
        const {title, image, location, price, owner} = sampleRental;
        action = addRental(title, image, location, price, owner);
        expect(rentals([], action)).toEqual([{
            title,
            image,
            location,
            id: action.id,
            rating: action.rating,
            price,
            owner,
            timestamp: action.timestamp
        }]);
    });

    test("should remove a rental", () => {
        const {title, image, location, price, owner} = sampleRental;
        const rentalOne = addRental(title, image, location, price, owner);
        const tryState = [...testState, rentalOne];
        action = removeRental(tryState[0].id);
        expect(rentals(tryState,action)).toEqual([]);
    });

    test("should update rating of a rental", () => {
        const {title, image, location, price, owner} = sampleRental;
        // create another rental state 
        const rentalTwo = rentals([], addRental(title, image, location, price, owner));
        action = rateRental(rentalTwo[0].id, 4);
        expect(rentals(rentalTwo, action)).toEqual([
            {
                title,
                image,
                location,
                id: action.id,
                rating: 4,
                price,
                owner,
                timestamp: rentalTwo[0].timestamp
            }
        ]);
    });
});