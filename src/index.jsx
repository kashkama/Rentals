import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { storeFactory } from "./store/store-factory";
import {Provider} from "react-redux";
import App from "./js/app";

const store = storeFactory();
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById("root")  
);