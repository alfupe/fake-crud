import React from 'react';
import './page-container.scss';

const PageContainer = props => {
    return (
        <section className="page-container">
            {props.children}
        </section>
    );
};

export default PageContainer;
