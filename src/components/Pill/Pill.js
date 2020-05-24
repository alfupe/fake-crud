import React from 'react';
import './pill.scss';

const Pill = props => {
    return (
        <div className="pill">{props.text}</div>
    );
};

export default Pill;
