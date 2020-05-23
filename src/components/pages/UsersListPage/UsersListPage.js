import React, { useState } from 'react';
import { withAdminLayout } from '../../HOC/WithLayout';
import Modal from '../../Modal/Modal';
import Portal from '../../Portal/Portal';
import Button from '../../Button/Button';

const UsersListPage = props => {
    const [modalIsOpen, setModalVisibility] = useState(false);

    const toggleModal = event => {
        setModalVisibility(!modalIsOpen);
    };

    return (
        <section>
            users list page
            <button onClick={toggleModal}>abre modal</button>
            {modalIsOpen &&
            <Modal title="title"
                   onClose={visibility => setModalVisibility(visibility)}>
                modal
                <Portal.In target="modal-actions">
                    <Button text="Cerrar"
                            onClick={toggleModal} />
                    <Button skin="primary"
                            text="Aceptar"
                            onClick={event => console.log('Action A')} />
                </Portal.In>
            </Modal>}
        </section>
    );
};

export default withAdminLayout(UsersListPage);
