import ReactDOM from 'react-dom';
import { useContext } from 'react';
import { PortalContext } from '../../context/PortalProvider';

export const PortalIn = props => {
    const portalContext = useContext(PortalContext);
    const portalContainer = portalContext.getPortalContainer(props.target);

    return portalContainer
        ? ReactDOM.createPortal(props.children, portalContainer)
        : null;
};
