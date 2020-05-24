import React, { useContext, useState } from 'react';
import brand from './Fakecrud.svg';
import { Link, useLocation } from 'wouter';
import { ServicesContext } from '../../context/ServicesProvider';
import './main-navigation.scss';
import Icon from '../Icon/Icon';

const MainNavigation = props => {
    const [location, setLocation] = useLocation();
    const services = useContext(ServicesContext);
    const [mobileMenuIsVisible, setMobileMenuVisibility] = useState(false);

    const logOut = () => {
        services.auth.logout();
        setLocation('/login');
    };

    const toggleMobileMenu = event => {
        setMobileMenuVisibility(!mobileMenuIsVisible);
    };

    return (
        <div className="main-navigation">
            <Link to="/">
                <img className="main-navigation__brand"
                     src={brand}
                     alt="Fake CRUD"
                />
            </Link>
            <nav className={`main-navigation__menu ${mobileMenuIsVisible ? 'main-navigation__menu--is-mobile-open' : ''}`}>
                <div className="main-navigation__menu-item">
                    <Link to="/products">
                        <Icon icon="tag" /> Productos
                    </Link>
                </div>
                <div className="main-navigation__menu-item">
                    <Link to="/users">
                        <Icon icon="user-friends" /> Usuarios
                    </Link>
                </div>
                <div className="main-navigation__menu-item">
                    <a href="https://github.com/alfupe/fake-crud"
                       target="_blank"
                       rel="noopener noreferrer">
                        <Icon icon={['fab', 'github']} />
                    </a>
                </div>
                <div className="main-navigation__menu-item"
                     onClick={logOut}>
                    <Icon icon="sign-out-alt" />
                </div>
            </nav>
            <div className="main-navigation__burger"
                 onClick={toggleMobileMenu}>
                <Icon icon="bars" />
            </div>
        </div>
    );
};

export default MainNavigation;
