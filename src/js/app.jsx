import React from "react";
import "./../scss/app.scss";
import {sortFunction} from "./../lib/sort-helper";
import PropTypes from "prop-types";

class App extends React.Component{
    getChildContext() {
        return {
            store: this.props.store
        };
    }

    componentWillMount() {
        const {store} = this.props;
        this.unsubscribe = store.subscribe(
            () => this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render(){
        const {store} = this.props;
        // get the keys from state object
        const {rentals, sort} = store.getState();
        // sort rentals in state according to sort value(by date, by price, by time)
        const sortedRentals = [...rentals].sort(sortFunction(sort));
        return(
            <section className="app">
                {/* wrapping presentational components in container components */}
                <Menu/>
                <NewRental/>
                <Rentals/>
            </section>
        );
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired
};

App.childContextTypes = {
    store: PropTypes.object.isRequired
};

export default App;