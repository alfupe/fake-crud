import React from 'react';
import Icon from '../Icon/Icon';
import './alert-message.scss';

const AlertMessage = props => {
    return (
        <div className="alert-message">
            <div className="alert-message__icon">
                {props.icon
                && <Icon icon={props.icon} />}
            </div>
            <div className="alert-message__message">
                {props.text}
            </div>
        </div>
    );
};

AlertMessage.defaultProps = {
    icon: 'bell'
};

export default AlertMessage;
