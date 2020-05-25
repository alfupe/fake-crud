import React from 'react';
import { render } from '@testing-library/react';
import NumberFormat from './NumberFormat';

test('It returns a default formatted number', () => {
    const {getByText} = render(<NumberFormat value={123.456}/>);
    const defaultOptions = getByText(/€/i);
    const resultCeil = getByText(/123.46/i);

    expect(defaultOptions).toBeInTheDocument();
    expect(resultCeil).toBeInTheDocument();
});

test('It returns a rounded number', () => {
    const {getByText} = render(<NumberFormat value={123.4112345}/>);
    const result = getByText(/123.41/i);

    expect(result).toBeInTheDocument();
});

test('It returns a custom formatted number', () => {
    const {getByText} = render(
        <NumberFormat value={123.456}
                      options={{style: 'currency', currency: 'USD'}}
        />);
    const resultCeil = getByText(/\$123.46/i);

    expect(resultCeil).toBeInTheDocument();
});
