import React from 'react';
import UserCard from '../UserCard/UserCard';
import './users-grid.scss';

const UsersGrid = ({users}) => {
    return (
        <div className="users-grid">
            {users.map((user, index) => (
                <UserCard key={index}
                          user={user}
                />
            ))}
        </div>
    );
};

export default UsersGrid;
