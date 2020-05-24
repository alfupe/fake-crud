import namedColorConverter from './named-color-converter';

test('It converts from named color to hex value', () => {
    const resultFirst = namedColorConverter('aliceblue');
    const expectedFirst = '#f0f8ff';
    expect(resultFirst).toEqual(expectedFirst);

    const resultLast = namedColorConverter('yellowgreen');
    const expectedLast = '#9acd32';
    expect(resultLast).toEqual(expectedLast);
});
