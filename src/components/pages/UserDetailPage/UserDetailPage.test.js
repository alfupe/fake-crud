import React from 'react';
import { render } from '@testing-library/react';
import UserDetailPage from './UserDetailPage';

test('It renders the page', async () => {
    const {getByText} = render(<UserDetailPage/>);
    const title = getByText(/user detail page/i);

    await expect(title).toBeInTheDocument();
});
