import generateProductImage from './generate-product-image';

test('It generates a Lorem Pixel image', () => {
    const resultFirst = generateProductImage(1, 0);
    const expectedFirst = 'http://lorempixel.com/output/abstract-q-c-512-512-1.jpg';
    expect(resultFirst).toEqual(expectedFirst);

    const resultLast = generateProductImage(10, 6);
    const expectedLast = 'http://lorempixel.com/output/technics-q-c-512-512-10.jpg';
    expect(resultLast).toEqual(expectedLast);
});

test('It generates a random Lorem Pixel image', () => {
    const randomResult = generateProductImage(11);
    expect(randomResult.endsWith('-11.jpg')).toBeFalsy();
});
