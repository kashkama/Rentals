import {rental, rentals, sort} from "./../../src/reducers/rental-reducer";
import {contants as C} from "./../../src/utils/contants";
import {addRental} from "./../../src/actions/creators";

describe("rental Reducer", () => {

    let action;
    const sampleRental = {
        title: "Ryan Properties",
        image: "https://upload/apt.jpg",
        location: "Nairobi",
        id: "832ffgf798",
        rating: 4,
        price: 200,
        owner: "Ryan",
        timestamp: "Sat Mar 12 2017 16:12:09 GMT-0800 (PST)"
    };
    test("Should return default state if not action type is recognized", () => {
        expect(rental({}, {type: null})).toEqual({});
    });

    test("should add rental", () => {
        const {title, image, location, id, rating, price, owner, timestamp} = sampleRental;
        action = addRental(title, image, location, id, rating, price, owner, timestamp);
        expect(rentals([], action)).toEqual([{
            title,
            image,
            location,
            id,
            rating,
            price,
            owner,
            timestamp
        }]);
    });

    test("should remove a rental", () => {
        
        expect(rentals([sampleRental],))
    })

});