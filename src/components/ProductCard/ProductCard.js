import React, { useContext, useState } from 'react';
import Icon from '../Icon/Icon';
import Modal from '../Modal/Modal';
import { ServicesContext } from '../../context/ServicesProvider';
import placeholderImage from './512x512.png';
import ProductForm from '../ProductForm/ProductForm';
import Pill from '../Pill/Pill';
import './product-card.scss';
import NumberFormat from '../NumberFormat/NumberFormat';

const ProductCard = ({product, onRemove, onEdit}) => {
    const [modalIsOpen, setModalVisibility] = useState(false);
    const services = useContext(ServicesContext);

    const handleRemoveProduct = event => {
        // eslint-disable-next-line no-restricted-globals
        const confirmRemove = confirm('¿Confirmas la eliminación del producto?');

        if (confirmRemove) {
            services.product.remove(product.id)
                .then(response => onRemove())
                .catch(console.error);
        }
    }

    const toggleEditModal = event => {
        setModalVisibility(!modalIsOpen);
    };

    return (
        <article className="product-card">
            <figure className="product-card__figure">
                <img className="product-card__avatar"
                     src={product.image || placeholderImage}
                     loading="lazy"
                     alt={`${product.productName}`}
                />
                <figcaption className="product-card__actions">
                    <div className="product-card__action"
                         onClick={toggleEditModal}>
                        <Icon icon="pencil-alt" />
                    </div>
                    <div className="product-card__action"
                         onClick={handleRemoveProduct}>
                        <Icon icon="trash" />
                    </div>
                </figcaption>
            </figure>
            <footer className="product-card__footer">
                <h2 className="product-card__department">
                    <div className="product-card__color" style={{backgroundColor: product.color}}/> {product.department}
                </h2>
                <h1 className="product-card__name">{product.productName}</h1>
                <NumberFormat className="product-card__price"
                              value={product.price}
                />
                <div className="product-card__meta">
                    <Pill text={product.productAdjective} />
                    <Pill text={product.productMaterial} />
                </div>
            </footer>
            {modalIsOpen &&
            <Modal title="Actualizar producto"
                   onClose={visibility => setModalVisibility(visibility)}>
                <ProductForm formData={product}
                             onSubmit={formData => {
                                 onEdit(formData);
                                 toggleEditModal();
                             }}
                />
            </Modal>}
        </article>
    );
};

ProductCard.defaultProps = {
    product: {},
    onRemove: () => {},
    onEdit: () => {}
};

export default ProductCard;
