const generateRandomProduct = require('../src/modules/generate-random-product/generate-random-product');

module.exports = function () {
    const products = new Array(50).fill(null).map(product => {
        return generateRandomProduct();
    });

    return {
        products
    }
}
