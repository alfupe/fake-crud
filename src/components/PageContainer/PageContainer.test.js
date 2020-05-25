import React from 'react';
import { render } from '@testing-library/react';
import PageContainer from './PageContainer';

test('It renders the component', () => {
    const {getByText} = render(<PageContainer><div>children</div></PageContainer>);
    const children = getByText(/children/i);

    expect(children).toBeInTheDocument();
});
