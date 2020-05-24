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
import UserForm from '../../UserForm/UserForm';

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

    const createUser = formData => {
        services.user.create(formData)
            .then(response => {
                findUsers();
                setModalVisibility(false);
            })
            .catch(console.error);
    };

    const updateUser = (idUser, formData) => {
        services.user.update(idUser, formData)
            .then(response => findUsers())
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
                       onEdit={updateUser}
                       onRemove={findUsers}
            />}

            {modalIsOpen &&
            <Modal title="Crear nuevo usuario"
                   onClose={visibility => setModalVisibility(visibility)}>
                <UserForm onSubmit={createUser} />
            </Modal>}
        </PageContainer>
    );
};

export default withAdminLayout(UsersListPage);
