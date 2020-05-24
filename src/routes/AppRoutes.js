import React from 'react';
import { Redirect, Route, Switch } from 'wouter';
import UsersListPage from '../components/pages/UsersListPage/UsersListPage';
import PrivateRoute from '../components/HOC/PrivateRoute';
import LoginPage from '../components/pages/LoginPage/LoginPage';
import ProductsListPage from '../components/pages/ProductsListPage/ProductsListPage';

const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/login" component={props => (<LoginPage />)} />
            <Route path="/" component={params => (<Redirect to="/users"/>)} />
            <PrivateRoute path="/users" component={UsersListPage} />
            <PrivateRoute path="/products" component={ProductsListPage} />
            <Route path="/:rest*">404, not found!</Route>
        </Switch>
    );
};

export default AppRoutes;
