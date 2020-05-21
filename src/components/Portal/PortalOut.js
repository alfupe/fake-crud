import React, { useContext, useEffect } from 'react';
import { PortalContext } from '../../context/PortalProvider';

export const PortalOut = ({id, className = ''}) => {
    const portalContext = useContext(PortalContext);

    useEffect(() => {
        return () => portalContext.unregisterPortalContainer(id);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

    return (
        <div ref={container => portalContext.registerPortalContainer(id, container)}
             id={id}
             className={className}
        />
    );
};
