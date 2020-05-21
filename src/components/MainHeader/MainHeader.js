import React from 'react';

const MainHeader = props => {
    return (
        <nav className="main-header">{props.children}</nav>
    );
};

export default MainHeader;
