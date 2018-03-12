import React from "react";
import PropTypes from "prop-types";
import {addRental} from "./../../actions/creators";

const AddRentalForm = (props, {store}) => {
    //input values are stored in the variables
    let _title, _image, _location, _price, _owner;

    //use refs to collect inputs add dispatch the add action
    const submit = e => {
        e.preventDefault();
        store.dispatch(addRental(
            _title.value,
            _image.value,
            _location.value,
            parseInt(_price.value),
            _owner.value
        ));
        _title.value = "";
        _image.value = "";
        _location.value = "";
        _price.value = "USD";
        _owner.value = "";
    };

    return(
        <form className="add-rental" onSubmit={submit}>
            <input type="text" ref={input => _title = input} placeholder="rental title..." required/>
            <input type="text" ref={input => _image = input} placeholder="rental image..." required/>
            <input type="text" ref={input => _location = input} placeholder="rental location..." required/>
            <input type="number" ref={input => _price = input} placeholder="rental price..." required/>
            <input type="text" ref={input => _owner = input} placeholder="rental owner..." required/>
            <button className="btn">ADD RENTAL</button>
        </form>
    );
};

AddRentalForm.propTypes = {
    store: PropTypes.object
};

AddRentalForm.contextTypes = {
    store: PropTypes.object
};

export default AddRentalForm;