import React from 'react';
import './form-field.scss';

const FormField = props => {
    return (
        <div className="form-field">
            <label className="form-field__label"
                   htmlFor={props.id}>
                {props.label} {props.required && <span className="form-field__required">*</span>}
            </label>
            <input className="form-field__control"
                   {...props}
            />
        </div>
    );
};

FormField.defaultProps = {
    onChange: () => {}
};

export default FormField;
