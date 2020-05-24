import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './products-grid.scss';

const ProductsGrid = ({products, onRemove, onEdit}) => {
    return (
        <div className="products-grid">
            {products.map((product, index) => (
                <ProductCard key={index}
                             product={product}
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
