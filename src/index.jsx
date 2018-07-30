import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch} from "react-router-dom";
import {storeFactory} from "./store/store-factory";
// import {Provider} from "react-redux";
import {Home, About, Events, Rentals, Contact, Whoops404} from "./routes/pages";
// import App from "./js/app";

const store = storeFactory();
console.log(store.getState());

ReactDOM.render(
    // <Provider store={store}>
    //     <App/>
    // </Provider>
    <HashRouter>
        <main className="main">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/events" component={Events}/>
                <Route path="/rentals" component={Rentals}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Whoops404}/>
            </Switch>
        </main>
    </HashRouter>,
    document.getElementById("root")  
);