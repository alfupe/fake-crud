import React, { useState } from 'react';
import { withAdminLayout } from '../../HOC/WithLayout';
import Modal from '../../Modal/Modal';
import Portal from '../../Portal/Portal';

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
                    <button onClick={event => console.log('Action A')}>action A</button>
                    <button onClick={toggleModal}>action B</button>
                </Portal.In>
            </Modal>}
        </section>
    );
};

export default withAdminLayout(UsersListPage);
