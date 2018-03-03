import React, { createElement } from "react";
import {createStore} from "redux";
import {rental, rentals, sort} from "./../reducers/rental-reducer";

export const store = createStore({rental, rentals, sort});