import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('It renders without crashing', () => {
    const {getByText} = render(<App/>);
    const linkElement = getByText(/holi/i);
    expect(linkElement).toBeInTheDocument();
});
