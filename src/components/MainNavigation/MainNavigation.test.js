import React from 'react';
import { render } from '@testing-library/react';
import MainNavigation from './MainNavigation';

test('It renders <MainNavigation />', () => {
    const {getByText} = render(<MainNavigation />);
    const productsItem = getByText(/Productos/i);
    const usersItem = getByText(/Usuarios/i);

    expect(productsItem).toBeInTheDocument();
    expect(usersItem).toBeInTheDocument();
});
