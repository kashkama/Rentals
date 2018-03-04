import {rental, rentals, sort} from "./../../src/reducers/rental-reducer";
import {addRental, removeRental} from "./../../src/actions/creators";

describe("rental Reducer", () => {

    let testState = [];
    let action;
    const sampleRental = {
        title: "Ryan Properties",
        image: "https://upload/apt.jpg",
        location: "Nairobi",
        rating: 0,
        price:200,
        owner: "Ryan"
    };
    test("Should return default state if not action type is recognized", () => {
        expect(rental({}, {type: null})).toEqual({});
    });

    test("should add rental", () => {
        const {title, image, location, rating, price, owner} = sampleRental;
        action = addRental(title, image, location, rating, price, owner);
        expect(rentals([], action)).toEqual([{
            title,
            image,
            location,
            id: action.id,
            rating,
            price,
            owner,
            timestamp: action.timestamp
        }]);
    });

    test("should remove a rental", () => {
        const {title, image, location, rating, price, owner} = sampleRental;
        const rentalOne = addRental(title, image, location, rating, price, owner);
        const tryState = [...testState, rentalOne];
        action = removeRental(tryState[0].id);
        expect(rentals(testState,action)).toEqual([]);
    });

});