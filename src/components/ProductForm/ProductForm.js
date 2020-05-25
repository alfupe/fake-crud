import React, { Fragment, useEffect, useState } from 'react';
import FormField from '../FormField/FormField';
import Button from '../Button/Button';
import Portal from '../Portal/Portal';
import Icon from '../Icon/Icon';
import generateRandomProduct from '../../modules/generate-random-product/generate-random-product';
import placeholderImage from './512x512.png';
import AlertMessage from '../AlertMessage/AlertMessage';
import namedColorConverter from '../../modules/named-color-converter/named-color-converter';
import generateProductImage from '../../modules/generate-product-image/generate-product-image';
import './product-form.scss';

const ProductForm = props => {
    const initialValues = {
        color: '',
        department: '',
        productName: '',
        price: '',
        productAdjective: '',
        productMaterial: ''
    };
    const [formData, setFormData] = useState(props.formData || initialValues);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        validateForm(formData);
    }, [formData]);

    const handleSubmit = event => {
        event.preventDefault();

        if (isValid) {
            props.onSubmit(formData);
        }
    };

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const validateForm = formData => {
        const isValid = !!(formData.productName && formData.price);
        setIsValid(isValid);
    };

    const autoGenerate = event => {
        const product = generateRandomProduct();
        setFormData({
            ...product,
            color: namedColorConverter(product.color),
            image: generateProductImage()
        });
    };

    const regenerateImage = event => {
        const image = generateProductImage();

        setFormData({
            ...formData,
            image
        });
    };

    return (
        <form className="product-form">
            <div className="product-form__image">
                <label>Imagen</label>
                <img src={formData.image || placeholderImage} alt="Producto"/>
                <div className="product-form__image-regenerate"
                     onClick={regenerateImage}>
                    <Icon icon="sync-alt" /> Regenerar
                </div>
            </div>
            <div className="product-form__fields">
                <div className="product-form__fields-grid">
                    <FormField value={formData.productName}
                               id="productName"
                               name="productName"
                               label="Nombre"
                               required
                               onChange={handleChange}
                    />
                    <FormField value={formData.price}
                               id="price"
                               name="price"
                               label="Precio"
                               type="number"
                               required
                               onChange={handleChange}
                    />
                    <FormField value={formData.department}
                               id="department"
                               name="department"
                               label="Departamento"
                               onChange={handleChange}
                    />
                    <FormField value={formData.productMaterial}
                               id="productMaterial"
                               name="productMaterial"
                               label="Material"
                               onChange={handleChange}
                    />
                    <FormField value={formData.productAdjective}
                               id="productAdjective"
                               name="productAdjective"
                               label="Info extra"
                               onChange={handleChange}
                    />
                    <FormField value={formData.color}
                               id="color"
                               name="color"
                               label="Color"
                               type="color"
                               onChange={handleChange}
                    />
                </div>
                {!isValid &&
                <AlertMessage text="El formulario no es válido. Por favor revisa los campos requeridos" />}
            </div>
            <Portal.In target="modal-actions">
                <Button text={<Fragment><Icon icon="sync-alt" /> Autogenerar</Fragment>}
                        onClick={autoGenerate} />
                <Button skin="primary"
                        text="Aceptar"
                        disabled={!isValid}
                        onClick={handleSubmit}
                />
            </Portal.In>
        </form>
    );
};

ProductForm.defaultProps = {
    onSubmit: () => {}
};

export default ProductForm;
