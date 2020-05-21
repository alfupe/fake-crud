import React, { useContext } from 'react';
import { ServicesContext } from '../../context/ServicesProvider';
import { Redirect, Route } from 'wouter';

const PrivateRoute = ({component: Component, ...rest}) => {
    const servicesContext = useContext(ServicesContext);

    return (
        <Route {...rest}>
            {props => (
                servicesContext.services.auth.loggedIn()
                    ? <Component {...props} />
                    : <Redirect to="/login" />
            )}
        </Route>
    );
};

export default PrivateRoute;
