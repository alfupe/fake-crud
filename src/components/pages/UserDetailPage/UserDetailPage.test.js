import React from 'react';
import { render } from '@testing-library/react';
import UserDetailPage from './UserDetailPage';

test('It renders the page', () => {
    const {getByText} = render(<UserDetailPage/>);
    const title = getByText(/user detail page/i);

    expect(title).toBeInTheDocument();
});
