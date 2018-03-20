import React from "react";
import "./../scss/app.scss";
import AddRentalForm from "./components/add-rental-form";
import RentalList from "./components/rental-list";
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
        const {rentals} = store.getState();
        return(
            <div>
                <AddRentalForm/>
                <RentalList rentals={rentals}/>
            </div>
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