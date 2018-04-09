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
        <div className="rental-form" role="form">
            <header>
                <h3>Have a rental? Fill below</h3>
            </header>
            <form onSubmit={submit}>
                <div className="flex-container">
                    <label className="label-col">Title:
                        <input className="field title" type="text" ref={input => _title = input} placeholder="rental title..." required/>
                    </label>
                    <label className="label-col">Image:
                        <input className="field image" type="text" ref={input => _image = input} placeholder="rental image..." required/>
                    </label>
                    <label className="label-col">Location:
                        <input className="field location" type="text" ref={input => _location = input} placeholder="rental location..." required/>
                    </label>
                    <label className="label-col">Price:
                        <input className="field price" type="number" ref={input => _price = input} placeholder="rental price..." required/>
                    </label>
                    <label className="label-col">Owner:
                        <input className="field owner" type="text" ref={input => _owner = input} placeholder="rental owner..." required/>
                    </label>
                </div>
                <button>ADD RENTAL</button>
            </form>
        </div>
    );
};

AddRentalForm.propTypes = {
    store: PropTypes.object
};

AddRentalForm.contextTypes = {
    store: PropTypes.object
};

export default AddRentalForm;