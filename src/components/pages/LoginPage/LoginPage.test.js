import React from 'react';
import { render } from '@testing-library/react';
import LoginPage from './LoginPage';

test('It renders the page', () => {
    const {getByText} = render(<LoginPage/>);
    const title = getByText(/login page/i);

    expect(title).toBeInTheDocument();
});
