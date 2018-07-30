import React from "react";
import "./../scss/app.scss";
import {NewRental, Menu, Rentals} from "./containers";
import PropTypes from "prop-types";


// class App extends React.Component{
//     getChildContext() {
//         return {
//             store: this.props.store
//         };
//     }

//     componentWillMount() {
//         const {store} = this.props;
//         this.unsubscribe = store.subscribe(
//             () => this.forceUpdate()
//         );
//     }

//     componentWillUnmount() {
//         this.unsubscribe();
//     }

//     render(){
//         return(
//             <section className="app">
//                 {/* wrapping presentational components in container components */}
//                 <Menu/>
//                 <NewRental/>
//                 <Rentals/>
//             </section>
//         );
//     }
// }

const App = () => {
    return  (
        <section className="app">
            <Menu/>
            <NewRental/>
            <Rentals/>
        </section>
    );
};

// App.propTypes = {
//     store: PropTypes.object.isRequired
// };

// App.childContextTypes = {
//     store: PropTypes.object.isRequired
// };

export default App;