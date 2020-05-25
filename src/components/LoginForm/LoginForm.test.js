import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import LoginForm from './LoginForm';

test('Form initially is disabled', () => {
    const onSubmit = jest.fn();
    const {getByText} = render(<LoginForm onSubmit={onSubmit} />);
    fireEvent.click(getByText(/Log in/i));

    expect(getByText(/Log in/i).closest('button')).toHaveAttribute('disabled');
    expect(onSubmit).toBeCalledTimes(0);
});

test('Form is valid', () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<LoginForm onSubmit={onSubmit} />);
    const inputValueEmail = 'test@example.com';
    const inputValuePassword = '123';

    fireEvent.change(getByLabelText(/e-mail/i), { target: { value: inputValueEmail } });
    fireEvent.change(getByLabelText(/password/i), { target: { value: inputValuePassword } });
    fireEvent.click(getByText(/Log in/i));

    expect(onSubmit).toBeCalled();
});
