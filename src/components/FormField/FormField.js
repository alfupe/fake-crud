import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import './form-field.scss';

const FormField = props => {
    const [type, setType] = useState(props.type);

    const toggleType = event => {
        const newType = type === 'password'
            ? ''
            : 'password';
        setType(newType);
    };

    return (
        <div className="form-field">
            <label className="form-field__label"
                   htmlFor={props.id}>
                {props.label} {props.required && <span className="form-field__required">*</span>}
            </label>
            <input className="form-field__control"
                   {...props}
                   type={type}
            />
            {props.type === 'password' &&
            <div className="form-field__revealer"
                 onClick={toggleType}>
                <Icon icon={type === 'password' ? 'eye' : 'eye-slash'} />
            </div>}
        </div>
    );
};

FormField.defaultProps = {
    onChange: () => {}
};

export default FormField;
