import React from 'react';
import { Redirect, Route, Switch } from 'wouter';
import UsersListPage from '../components/pages/UsersListPage/UsersListPage';
import PrivateRoute from '../components/HOC/PrivateRoute';
import LoginPage from '../components/pages/LoginPage/LoginPage';
import ProductsListPage from '../components/pages/ProductsListPage/ProductsListPage';
import Error404Page from '../components/pages/Error404Page/Error404Page';

const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/" component={params => (<Redirect to="/products"/>)} />
            <PrivateRoute path="/users" component={UsersListPage} />
            <PrivateRoute path="/products" component={ProductsListPage} />
            <Route path="/:rest*" component={Error404Page} />
        </Switch>
    );
};

export default AppRoutes;
