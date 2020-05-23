import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('It renders without crashing', () => {
    shallow(<App />);
});
