import React from 'react';
import './outer-layout.scss';

const OuterLayout = props => {
    return (
        <main className="outer-layout">
            {props.children}
        </main>
    );
};

export default OuterLayout;
