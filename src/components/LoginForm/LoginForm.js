import React, { useState } from 'react';
import FormField from '../FormField/FormField';
import Button from '../Button/Button';
import brand from './Fakecrud.svg';
import './login-form.scss';

const LoginForm = props => {
    const initialValues = {
        email: '',
        password: ''
    };
    const [formData, setFormData] = useState(props.formData || initialValues);

    const handleSubmit = event => {
        event.preventDefault();
        props.onSubmit(formData);
    };

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form className="login-form"
              onSubmit={handleSubmit}>
            <header className="login-form__header">
                <img src={brand} alt="Fake CRUD" />
            </header>
            <div className="login-form__fields">
                <FormField value={formData.email}
                           id="email"
                           name="email"
                           label="E-mail"
                           onChange={handleChange}
                />
                <FormField value={formData.password}
                           id="password"
                           name="password"
                           label="password"
                           onChange={handleChange}
                />
            </div>
            <footer className="login-form__footer">
                <Button skin="primary"
                        text="Log in"
                        type="submit"
                        disabled={!formData.email || !formData.password}
                />
            </footer>
        </form>
    );
};

LoginForm.defaultProps = {
    onSubmit: () => {}
};

export default LoginForm;
