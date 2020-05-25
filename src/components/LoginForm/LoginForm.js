import React, { useEffect, useState } from 'react';
import FormField from '../FormField/FormField';
import Button from '../Button/Button';
import brand from './Fakecrud.svg';
import $ from 'jquery';
import './login-form.scss';
import Icon from '../Icon/Icon';

const LoginForm = props => {
    const initialValues = {
        email: '',
        password: ''
    };

    const [formData, setFormData] = useState(props.formData || initialValues);

    useEffect(() => {
        $('.login-form__fields-header').on('click', function() {
            const $currentToggler = $(this);
            const $currentAccordionItem = $currentToggler.closest('.login-form__fields');
            const $currentAccordionContent = $currentAccordionItem.find('.login-form__fields-accordion');
            const $allAccordionContents = $('.login-form__fields-accordion');
            const $allTogglers = $('.login-form__fields-header');

            $allAccordionContents.not($currentAccordionContent).slideUp('fast');
            $allTogglers.not($currentToggler).removeClass('login-form__fields-header--is-open');

            $currentToggler.addClass('login-form__fields-header--is-open');
            $currentAccordionContent.slideDown('fast');
        });
    }, []);

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
            <section className="login-form__fields">
                <header className="login-form__fields-header login-form__fields-header--is-open">Log in con e-mail</header>
                <div className="login-form__fields-accordion">
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
            </section>
            <section className="login-form__fields">
                <header className="login-form__fields-header">Otras opciones</header>
                <div className="login-form__fields-accordion login-form__fields-accordion--is-closed">
                    <div className="login-form__oauth-provider login-form__oauth-provider--google">
                        <Icon icon={['fab', 'google']} /> Google
                    </div>
                    <div className="login-form__oauth-provider login-form__oauth-provider--facebook">
                        <Icon icon={['fab', 'facebook']} /> Facebook
                    </div>
                    <div className="login-form__oauth-provider login-form__oauth-provider--instagram">
                        <Icon icon={['fab', 'instagram-square']} /> Instagram
                    </div>
                </div>
            </section>
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
