import React from 'react';
import { render } from '@testing-library/react';
import UsersListPage from './UsersListPage';

test('It renders the page', async () => {
    const {getByText} = render(<UsersListPage/>);
    const title = getByText(/users list page/i);

    await expect(title).toBeInTheDocument();
});
