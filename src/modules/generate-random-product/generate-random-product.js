const faker = require('faker');

const generateRandomProduct = () => {
    return {
        color: faker.commerce.color(),
        department: faker.commerce.department(),
        productName: faker.commerce.productName(),
        price: faker.commerce.price(),
        productAdjective: faker.commerce.productAdjective(),
        productMaterial: faker.commerce.productMaterial(),
    };
};

module.exports = generateRandomProduct;
