import React from 'react';
import { withOuterLayout } from '../../HOC/WithLayout';
import { Link } from 'wouter';
import './error-page.scss';

const Error404Page = props => {
    return (
        <div className="error-page">
            <section className="error-box">
                <header className="error-box__header">
                    <h1 className="error-box__title">Error 404</h1>
                </header>
                <div className="error-box__content">
                    La página solicitada no se encuentra disponible. Es posible que la URL no existe.
                </div>
                <footer className="error-box__footer">
                    <Link to="/">Vuelve al inicio</Link>
                </footer>
            </section>
        </div>
    );
};

export default withOuterLayout(Error404Page);
