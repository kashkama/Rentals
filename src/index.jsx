import React from "react";
import ReactDOM from "react-dom";
import {storeFactory} from "./store/store-factory";
import App from "./js/app";

const store = storeFactory();
console.log(store.getState());

ReactDOM.render(
    <App store={store}/>,
    document.getElementById("root")  
);