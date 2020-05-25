import generateRandomProduct from '../generate-random-product/generate-random-product';

const generateProductImage = (imageIndex = undefined, categoryIndex = undefined) => {
    const defaultImageIndex = imageIndex >= 0 && imageIndex <= 10
        ? imageIndex
        : Math.floor(Math.random() * 10) + 1;
    const defaultCategoryIndex = categoryIndex >= 0 && categoryIndex <= 6
        ? categoryIndex
        : Math.floor(Math.random() * 6);
    const categories = ['abstract', 'animals', 'business', 'cats', 'food', 'fashion', 'technics'];

    return generateRandomProduct(defaultImageIndex, categories[defaultCategoryIndex]).image;
};

export default generateProductImage;
