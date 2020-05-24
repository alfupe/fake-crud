import React, { Fragment, useContext, useEffect, useState } from 'react';
import { withAdminLayout } from '../../HOC/WithLayout';
import Modal from '../../Modal/Modal';
import Portal from '../../Portal/Portal';
import Button from '../../Button/Button';
import { ServicesContext } from '../../../context/ServicesProvider';
import UsersGrid from '../../UsersGrid/UsersGrid';
import PageContainer from '../../PageContainer/PageContainer';
import PageHeader from '../../PageHeader/PageHeader';
import Icon from '../../Icon/Icon';
import SearchControl from '../../SearchControl/SearchControl';

const UsersListPage = props => {
    const [modalIsOpen, setModalVisibility] = useState(false);
    const [users, setUsers] = useState();
    const services = useContext(ServicesContext);

    const findUsers = (query = '') => {
        services.user
            .search(query)
            .then(response => setUsers(response))
            .catch(console.error);
    };

    useEffect(() => {
        findUsers();
    }, []);

    const toggleModal = event => {
        setModalVisibility(!modalIsOpen);
    };

    return (
        <PageContainer>
            <PageHeader title="Listado de usuarios">
                <Button skin="primary"
                        text={<Fragment><Icon icon="user-plus" /> Crear Usuario</Fragment>}
                        onClick={toggleModal}
                />
                <Portal.In target="page-filters">
                    <SearchControl onSearch={findUsers} />
                </Portal.In>
            </PageHeader>

            {users &&
            <UsersGrid users={users}
                       onEdit={findUsers}
                       onRemove={findUsers}
            />}

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
