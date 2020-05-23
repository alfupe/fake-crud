import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { Router } from 'wouter';
import ServicesProvider from './context/ServicesProvider';
import PortalProvider from './context/PortalProvider';

const App = () => {
    return (
        <ServicesProvider>
            <PortalProvider>
                <Router>
                    <AppRoutes />
                </Router>
            </PortalProvider>
        </ServicesProvider>
    );
};

export default App;
