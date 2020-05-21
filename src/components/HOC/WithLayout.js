import React from 'react';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import OuterLayout from '../layouts/OuterLayout/OuterLayout';

export const withAdminLayout = Component => props => (
    <AdminLayout {...props}>
        <Component {...props} />
    </AdminLayout>
);

export const withOuterLayout = Component => props => (
    <OuterLayout {...props}>
        <Component {...props} />
    </OuterLayout>
);
