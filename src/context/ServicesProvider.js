import React from 'react';
import UserService from '../services/UserService';
import AuthService from '../services/AuthService';

export const ServicesContext = React.createContext({});

const ServicesProvider = props => {
    const services = {
        auth: new AuthService(),
        user: new UserService()
    };

    return (
        <ServicesContext.Provider value={{...services}}>
            {props.children}
        </ServicesContext.Provider>
    );
};

export default ServicesProvider;
