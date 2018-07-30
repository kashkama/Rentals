import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import {storeFactory} from "./store/store-factory";
import {Provider} from "react-redux";
import {Home, About, Events, Contact, Whoops404} from "./routes/pages";
import App from "./js/app";

const store = storeFactory();
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <main className="main">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/rentals" component={App}/>
                    <Redirect from="/team" to="/about/team/" />
                    <Redirect from="/location" to="/about/location"/>
                    <Route path="/events" component={Events}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route component={Whoops404}/>
                </Switch>
            </main>
        </HashRouter>
    </Provider>,
    document.getElementById("root")  
);