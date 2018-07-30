import React from "react";
import "./../scss/app.scss";
import {NewRental, Menu, Rentals} from "./containers";
import {PageTemplate} from "./../routes/pages";

const App = () => {
    return  (
        <PageTemplate>
            <section className="app">
                <Menu/>
                <NewRental/>
                <Rentals/>
            </section>
        </PageTemplate>
    );
};

export default App;