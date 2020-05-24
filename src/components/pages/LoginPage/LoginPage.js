import React, { useContext } from 'react';
import { withOuterLayout } from '../../HOC/WithLayout';
import LoginForm from '../../LoginForm/LoginForm';
import { ServicesContext } from '../../../context/ServicesProvider';
import { useLocation } from 'wouter';
import './login-page.scss';

const LoginPage = props => {
    const services = useContext(ServicesContext);
    const [location, setLocation] = useLocation();

    const login = formData => {
        services.auth.login(formData)
            .then(response => {
                setLocation('/products')
            });
    };

    return (
        <section className="login-page">
            <LoginForm onSubmit={login} />
        </section>
    );
};

export default withOuterLayout(LoginPage);
