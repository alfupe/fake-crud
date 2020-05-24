import generateRandomProduct from './generate-random-product';

test('It generates a random user', () => {
    const result = generateRandomProduct();

    expect(result).toHaveProperty('color');
    expect(result).toHaveProperty('department');
    expect(result).toHaveProperty('productName');
    expect(result).toHaveProperty('price');
    expect(result).toHaveProperty('productAdjective');
    expect(result).toHaveProperty('productMaterial');
});
