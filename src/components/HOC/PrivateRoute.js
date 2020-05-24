import React, { useContext } from 'react';
import { ServicesContext } from '../../context/ServicesProvider';
import { Redirect, Route } from 'wouter';

const PrivateRoute = ({component: Component, ...rest}) => {
    const services = useContext(ServicesContext);

    return (
        <Route {...rest}>
            {props => (
                services.auth.loggedIn()
                    ? <Component {...props} />
                    : <Redirect to="/login" />
            )}
        </Route>
    );
};

export default PrivateRoute;
