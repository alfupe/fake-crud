import React, { Fragment, useContext, useEffect, useState } from 'react';
import { withAdminLayout } from '../../HOC/WithLayout';
import Modal from '../../Modal/Modal';
import Portal from '../../Portal/Portal';
import Button from '../../Button/Button';
import { ServicesContext } from '../../../context/ServicesProvider';
import ProductsGrid from '../../ProductsGrid/ProductsGrid';
import PageContainer from '../../PageContainer/PageContainer';
import PageHeader from '../../PageHeader/PageHeader';
import Icon from '../../Icon/Icon';
import SearchControl from '../../SearchControl/SearchControl';
import ProductForm from '../../ProductForm/ProductForm';

const ProductsListPage = props => {
    const [modalIsOpen, setModalVisibility] = useState(false);
    const [products, setProducts] = useState();
    const services = useContext(ServicesContext);

    const findProducts = (query = '') => {
        services.product
            .search(query)
            .then(response => setProducts(response))
            .catch(console.error);
    };

    const createProduct = formData => {
        services.product.create(formData)
            .then(response => {
                findProducts();
                setModalVisibility(false);
            })
            .catch(console.error);
    };

    const updateProduct = (idProduct, formData) => {
        services.product.update(idProduct, formData)
            .then(response => findProducts())
            .catch(console.error);
    };

    useEffect(() => {
        findProducts();
    }, []);

    const toggleModal = event => {
        setModalVisibility(!modalIsOpen);
    };

    return (
        <PageContainer>
            <PageHeader title="Listado de productos">
                <Button skin="primary"
                        text={<Fragment><Icon icon="tag" /> Crear Producto</Fragment>}
                        onClick={toggleModal}
                />
                <Portal.In target="page-filters">
                    <SearchControl onSearch={findProducts} />
                </Portal.In>
            </PageHeader>

            {products &&
            <ProductsGrid products={products}
                          onEdit={updateProduct}
                          onRemove={findProducts}
            />}

            {modalIsOpen &&
            <Modal title="Crear nuevo producto"
                   onClose={visibility => setModalVisibility(visibility)}>
                <ProductForm onSubmit={createProduct} />
            </Modal>}
        </PageContainer>
    );
};

export default withAdminLayout(ProductsListPage);
