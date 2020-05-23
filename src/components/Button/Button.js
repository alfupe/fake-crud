import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({skin, ...buttonProps}) => {
    const getClassName = skin => {
        const classNames = ['button'];
        if (skin) classNames.push(`button--${skin}`);

        return classNames.join(' ');
    };

    return (
        <button {...buttonProps}
                className={getClassName(skin)}>
            {buttonProps.text}
        </button>
    );
};

Button.defaultProps = {
    skin: 'default',
    type: 'button',
    onClick: () => {}
};

Button.propTypes = {
    skin: PropTypes.oneOf(['default', 'primary', 'danger'])
};

export default Button;
