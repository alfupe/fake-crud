import React from 'react';
import UserCard from '../UserCard/UserCard';
import './users-grid.scss';

const UsersGrid = ({users, onRemove, onEdit}) => {
    return (
        <div className="users-grid">
            {users.map((user, index) => (
                <UserCard key={index}
                          user={user}
                          onRemove={onRemove}
                          onEdit={onEdit}
                />
            ))}
        </div>
    );
};

UsersGrid.defaultProps = {
    onRemove: () => {},
    onEdit: () => {}
};

export default UsersGrid;
