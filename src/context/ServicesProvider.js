import React from 'react';
import UserService from '../services/UserService';
import AuthService from '../services/AuthService';
import ProductService from '../services/ProductService';

export const ServicesContext = React.createContext({});

const ServicesProvider = props => {
    const services = {
        auth: new AuthService(),
        product: new ProductService(),
        user: new UserService(),
    };

    return (
        <ServicesContext.Provider value={{...services}}>
            {props.children}
        </ServicesContext.Provider>
    );
};

export default ServicesProvider;
