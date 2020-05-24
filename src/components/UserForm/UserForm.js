import React, { Fragment, useEffect, useRef, useState } from 'react';
import FormField from '../FormField/FormField';
import Button from '../Button/Button';
import Portal from '../Portal/Portal';
import Icon from '../Icon/Icon';
import generateRandomUser from '../../modules/generate-random-user/generate-random-user';
import placeholderAvatar from './placeholder-user.png';
import AlertMessage from '../AlertMessage/AlertMessage';
import './user-form.scss';

const UserForm = props => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        avatar: '',
        phone: '',
        website: '',
        password: ''
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
        const isValid = !!(formData.firstName && formData.lastName && formData.username && formData.email);
        setIsValid(isValid);
    };

    const autoGenerate = event => {
        const user = generateRandomUser();
        setFormData(user);
    };

    const regenerateAvatar = event => {
        const avatar = generateRandomUser().avatar;

        setFormData({
            ...formData,
            avatar
        });
    };

    return (
        <form className="user-form">
            <div className="user-form__avatar">
                <label>Avatar</label>
                <img src={formData.avatar || placeholderAvatar} alt="Avatar"/>
                <div className="user-form__avatar-regenerate"
                     onClick={regenerateAvatar}>
                    <Icon icon="sync-alt" /> Regenerar
                </div>
            </div>
            <div className="user-form__fields">
                <div className="user-form__fields-grid">
                    <FormField value={formData.firstName}
                               id="firstName"
                               name="firstName"
                               label="Nombre"
                               required
                               onChange={handleChange}
                    />
                    <FormField value={formData.lastName}
                               id="lastName"
                               name="lastName"
                               label="Apellidos"
                               required
                               onChange={handleChange}
                    />
                    <FormField value={formData.email}
                               id="email"
                               name="email"
                               label="E-mail"
                               type="email"
                               required
                               onChange={handleChange}
                    />
                    <FormField value={formData.username}
                               id="username"
                               name="username"
                               label="Nick"
                               required
                               onChange={handleChange}
                    />
                    <FormField value={formData.phone}
                               id="phone"
                               name="phone"
                               label="Teléfono"
                               onChange={handleChange}
                    />
                    <FormField value={formData.website}
                               id="website"
                               name="website"
                               label="Página Web"
                               onChange={handleChange}
                    />
                    <FormField value={formData.password}
                               id="password"
                               name="password"
                               label="Contraseña"
                               type="password"
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

UserForm.defaultProps = {
    onSubmit: () => {}
};

export default UserForm;
