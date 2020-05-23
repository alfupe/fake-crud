import generateRandomUser from './generate-random-user';
import removeAccents from '../remove-accents/remove-accents';

test('It generates a random user', () => {
    const result = generateRandomUser();
    const normalizedFirstNamefirstWord = removeAccents(result.firstName.split(' ')[0]);

    expect(result).toHaveProperty('firstName');
    expect(result).toHaveProperty('lastName');
    expect(result).toHaveProperty('email');
    expect(result).toHaveProperty('password');
    expect(result.email).toContain(normalizedFirstNamefirstWord);
    expect(result.password.length).toBe(8);
});
