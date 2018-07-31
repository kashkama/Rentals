import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {NewRental, Menu, Rentals} from "./containers";
import "./../scss/app.scss";
import { PageTemplate, Home, About, Events, Contact, Whoops404} from "./../routes/pages";

const App = () => {
    return  (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/rentals"
                component ={ () => 
                    (
                        <PageTemplate>
                            <section className="app">
                                <Menu/>
                                <NewRental/>
                                <Rentals/>
                            </section>
                        </PageTemplate>
                    )
                }
            />
            <Route path="/about" component={About}/>
            <Redirect from ="/team" to="/about/team" />
            <Redirect from="/location" to="/about/location"/>
            <Route path="/events" component={Events}/>
            <Route path="/contact" component={Contact}/>
            <Route component={Whoops404}/>
        </Switch>
    );
};

export default App;