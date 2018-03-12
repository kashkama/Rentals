import React from "react";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {rentals, sort} from "./../reducers/rental-reducer";
import {data} from "./../data/rentals";

const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log("prev state", store.getState());
    console.log("action", action);
    result = next(action);
    console.log("next state", store.getState());
    console.groupEnd();
};

const saver = store => next => action => {
    let result = next(action);
    localStorage["redux-store-rentals"] = JSON.stringify(store.getState());
    return result;
};

export const storeFactory = (stateData = data) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({rentals, sort}),
        (localStorage["redux-store-rentals"]) ?
            JSON.parse(localStorage["redux-store-rentals"]):
            stateData
    );
