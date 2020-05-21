import React, { Component } from 'react';
import UserService from '../services/UserService';
import AuthService from '../services/AuthService';

export const ServicesContext = React.createContext({});

export default class ServicesProvider extends Component {
    state = {
        services: {
            auth: new AuthService(),
            user: new UserService()
        }
    };

    render() {
        return (
            <ServicesContext.Provider value={{...this.state}}>
                {this.props.children}
            </ServicesContext.Provider>
        );
    }
}
