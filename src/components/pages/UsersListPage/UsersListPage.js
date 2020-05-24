import React, { useContext, useEffect, useState } from 'react';
import { withAdminLayout } from '../../HOC/WithLayout';
import Modal from '../../Modal/Modal';
import Portal from '../../Portal/Portal';
import Button from '../../Button/Button';
import { ServicesContext } from '../../../context/ServicesProvider';
import UsersGrid from '../../UsersGrid/UsersGrid';
import PageContainer from '../../PageContainer/PageContainer';

const UsersListPage = props => {
    const [modalIsOpen, setModalVisibility] = useState(false);
    const [users, setUsers] = useState();
    const services = useContext(ServicesContext);

    useEffect(() => {
        services.user
            .findAll()
            .then(response => setUsers(response))
            .catch(console.error)
    }, [services.user]);

    const toggleModal = event => {
        setModalVisibility(!modalIsOpen);
    };

    return (
        <PageContainer>
            <h1>users list page</h1>

            {users && <UsersGrid users={users} />}

            <button onClick={toggleModal}>abre modal</button>
            {modalIsOpen &&
            <Modal title="title"
                   onClose={visibility => setModalVisibility(visibility)}>
                modal
                <Portal.In target="modal-actions">
                    <Button text="Cancelar"
                            onClick={toggleModal} />
                    <Button skin="primary"
                            text="Aceptar"
                            onClick={event => console.log('Action A')} />
                </Portal.In>
            </Modal>}
        </PageContainer>
    );
};

export default withAdminLayout(UsersListPage);
