import removeAccents from './remove-accents';

test('It removes accented letters', () => {
    const string1 = 'María';
    const result1 = removeAccents(string1);
    expect(result1).toBe('Mara');

    const string2 = 'Ángela';
    const result2 = removeAccents(string2);
    expect(result2).toBe('ngela');
});
