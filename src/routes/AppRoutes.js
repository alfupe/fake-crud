import React from 'react';
import { Redirect, Route, Switch } from 'wouter';
import UsersListPage from '../components/pages/UsersListPage/UsersListPage';
import PrivateRoute from '../components/HOC/PrivateRoute';

const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/login" component={props => (<div>lo lo lo</div>)} />
            <Route path="/" component={params => (<Redirect to="/users"/>)} />
            <PrivateRoute path="/users" component={UsersListPage} />
            <Route path="/:rest*">404, not found!</Route>
        </Switch>
    );
};

export default AppRoutes;
