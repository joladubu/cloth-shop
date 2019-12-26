import React from 'react';

import './form-input.style.scss';

// desctructuring the props to spread into the input
const FormInput = ({ handleChange, label, ...otherProps}) => (
    //handleChange is used to bubble onChange event on the input element
    <div className="group">
        <input className="form-input" onChange={handleChange } {...otherProps} />
        { label ? (
            <label
                // class name of form-input label is always added however the class shrink is added whenever the user
                // has typed anything in
                className={`${
                    otherProps.value.length? 'shrink' : ''
                } form-input-label`}
            >
            { label }
            </label>)
            :null
        }
    </div>


)

export default FormInput;