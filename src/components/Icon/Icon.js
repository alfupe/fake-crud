import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

const Icon = props => {
    return (
        <FontAwesomeIcon icon={props.icon} {...props} />
    );
};

export default Icon;

Icon.propTypes = {
    icon: PropTypes.any.isRequired
};
