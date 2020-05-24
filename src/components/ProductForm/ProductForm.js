import React, { Fragment, useEffect, useRef, useState } from 'react';
import FormField from '../FormField/FormField';
import Button from '../Button/Button';
import Portal from '../Portal/Portal';
import Icon from '../Icon/Icon';
import generateRandomProduct from '../../modules/generate-random-product/generate-random-product';
import placeholderImage from './512x512.png';
import AlertMessage from '../AlertMessage/AlertMessage';
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
    const firstRender = useRef(true)

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

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

    const generateImage = () => {
        const counter = Math.floor(Math.random() * 10) + 1;
        const categoryIndex = Math.floor(Math.random() * 6);
        const categories = ['abstract', 'animals', 'business', 'cats', 'food', 'fashion', 'technics'];

        return generateRandomProduct(counter, categories[categoryIndex]).image;
    };

    const autoGenerate = event => {
        const product = generateRandomProduct();
        setFormData({
            ...product,
            image: generateImage()
        });
    };

    const regenerateImage = event => {
        const image = generateImage();

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
                               onChange={handleChange}
                    />
                    <FormField value={formData.price}
                               id="price"
                               name="price"
                               label="Precio"
                               type="number"
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
