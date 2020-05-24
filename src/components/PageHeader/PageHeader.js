import React from 'react';
import Portal from '../Portal/Portal';
import './page-header.scss';

const PageHeader = props => {
    return (
        <header className="page-header">
            {!!props.title &&
            <h1 className="page-header__title">{props.title}</h1>}
            <div className="page-header__filters">
                <Portal.Out id="page-filters" />
            </div>
            <div className="page-header__actions">
                {props.children}
            </div>
        </header>
    );
};

export default PageHeader;
