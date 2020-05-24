import React from 'react';

const NumberFormat = props => {
    const formatted = new Intl.NumberFormat(props.locales, props.options).format(props.value);

    return (
        <div className={props.className || ''}>{formatted}</div>
    );
};

NumberFormat.defaultProps = {
    locales: 'es',
    options: {style: 'currency', currency: 'EUR', currencyDisplay: 'symbol'}
};

export default NumberFormat;
