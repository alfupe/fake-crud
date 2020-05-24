import React from 'react';
import Icon from '../Icon/Icon';
import './user-card.scss';

const UserCard = ({user}) => {
    return (
        <article className="user-card">
            <figure className="user-card__figure">
                <img className="user-card__avatar"
                     src={user.avatar}
                     loading="lazy"
                     alt={`${user.firstName} ${user.lastName}`}
                />
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
        </article>
    );
};

export default UserCard;
