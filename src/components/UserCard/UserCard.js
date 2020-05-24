import React, { useContext, useState } from 'react';
import Icon from '../Icon/Icon';
import './user-card.scss';
import Modal from '../Modal/Modal';
import { ServicesContext } from '../../context/ServicesProvider';
import UserForm from '../UserForm/UserForm';
import placeholderImage from './512x512.png';

const UserCard = ({user, onRemove, onEdit}) => {
    const [modalIsOpen, setModalVisibility] = useState(false);
    const services = useContext(ServicesContext);

    const handleRemoveUser = event => {
        // eslint-disable-next-line no-restricted-globals
        const confirmRemove = confirm('¿Confirmas la eliminación del usuario?');

        if (confirmRemove) {
            services.user.remove(user.id)
                .then(response => onRemove())
                .catch(console.error);
        }
    }

    const toggleEditModal = event => {
        setModalVisibility(!modalIsOpen);
    };

    return (
        <article className="user-card">
            <figure className="user-card__figure">
                <img className="user-card__avatar"
                     src={user.avatar || placeholderImage}
                     loading="lazy"
                     alt={`${user.firstName} ${user.lastName}`}
                />
                <figcaption className="user-card__actions">
                    <div className="user-card__action"
                         onClick={toggleEditModal}>
                        <Icon icon="pencil-alt" />
                    </div>
                    <div className="user-card__action"
                         onClick={handleRemoveUser}>
                        <Icon icon="trash" />
                    </div>
                </figcaption>
            </figure>
            <footer className="user-card__footer">
                <h2 className="user-card__name">{user.firstName} {user.lastName}</h2>
                <h1 className="user-card__username">@{user.username}</h1>
                <div className="user-card__contact">
                    <a className="user-card__contact-item"
                       href={`mailto:${user.email}`}>
                        <Icon icon={['far', 'envelope']} fixedWidth /> {user.email}
                    </a>
                    <a className="user-card__contact-item"
                       href={`tel:${user.phone}`}>
                        <Icon icon="mobile-alt" fixedWidth /> {user.phone}
                    </a>
                    <a className="user-card__contact-item"
                       href={`mailto:${user.email}`}
                       target="_blank"
                       rel="noopener noreferrer">
                        <Icon icon="laptop" fixedWidth /> {user.website}
                    </a>
                </div>
            </footer>
            {modalIsOpen &&
            <Modal title="Actualizar usuario"
                   onClose={visibility => setModalVisibility(visibility)}>
                <UserForm formData={user}
                          onSubmit={formData => {
                              onEdit(formData);
                              toggleEditModal();
                          }}
                />
            </Modal>}
        </article>
    );
};

UserCard.defaultProps = {
    user: {},
    onRemove: () => {},
    onEdit: () => {}
};

export default UserCard;
