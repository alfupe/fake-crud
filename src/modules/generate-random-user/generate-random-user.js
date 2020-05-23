const faker = require('faker');

const generateRandomUser = (locale = 'es') => {
    faker.locale = locale;
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    return {
        firstName,
        lastName,
        email: faker.internet.email(firstName, lastName),
        username: faker.internet.userName(firstName, lastName),
        avatar: faker.internet.avatar(),
        phone: faker.phone.phoneNumberFormat(),
        website: faker.internet.domainName(),
        password: faker.internet.password(8)
    };
};

module.exports = generateRandomUser;
