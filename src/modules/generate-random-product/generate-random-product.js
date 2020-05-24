const faker = require('faker');

const generateRandomProduct = (counter = 1, category = 'technics') => {
    return {
        color: faker.commerce.color(),
        department: faker.commerce.department(),
        productName: faker.commerce.productName(),
        price: faker.commerce.price(),
        productAdjective: faker.commerce.productAdjective(),
        productMaterial: faker.commerce.productMaterial(),
        image: `http://lorempixel.com/output/${category}-q-c-512-512-${counter}.jpg`
    };
};

module.exports = generateRandomProduct;
