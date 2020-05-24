import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import namedColorConverter from '../../modules/named-color-converter/named-color-converter';
import './products-grid.scss';

const ProductsGrid = ({products, onRemove, onEdit}) => {
    return (
        <div className="products-grid">
            {products.map((product, index) => (
                <ProductCard key={index}
                             product={{
                                 ...product,
                                 color: product.color.charAt(0) === '#'
                                     ? product.color
                                     : namedColorConverter(product.color)
                             }}
                             onRemove={onRemove}
                             onEdit={formData => onEdit(product.id, formData)}
                />
            ))}
        </div>
    );
};

ProductsGrid.defaultProps = {
    onRemove: () => {},
    onEdit: () => {}
};

export default ProductsGrid;
