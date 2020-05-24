import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = (props) => {
    const getClassName = props => {
        const classNames = ['button'];
        if (props.skin) classNames.push(`button--${props.skin}`);
        if (props.className) classNames.push(props.className);

        return classNames.join(' ');
    };

    const {skin, ...buttonProps} = props;

    return (
        <button {...buttonProps}
                className={getClassName(props)}>
            {props.text}
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
