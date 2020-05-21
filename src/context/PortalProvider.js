import React, { Component } from 'react';

export const PortalContext = React.createContext({});

export default class PortalProvider extends Component {
    state = {
        portals: {}
    };

    registerPortalContainer(id, container) {
        if (!this.state.portals[id]) {
            this.setState(state => ({
                portals: {
                    ...state.portals,
                    [id]: container
                }
            }));
        }
    }

    unregisterPortalContainer(id) {
        this.setState(state => {
            const portals = Object.keys(state.portals)
                .filter(portalId => portalId !== id)
                .reduce((accumulator, id) => ({...accumulator, [id]: state.portals[id]}), {});

            return {portals};
        });
    }

    getPortalContainer(id) {
        return this.state.portals[id];
    }

    globalFunctions() {
        return {
            registerPortalContainer: (id, container) => this.registerPortalContainer(id, container),
            unregisterPortalContainer: id => this.unregisterPortalContainer(id),
            getPortalContainer: id => this.getPortalContainer(id)
        };
    }

    render() {
        return (
            <PortalContext.Provider value={{...this.globalFunctions()}}>
                {this.props.children}
            </PortalContext.Provider>
        );
    }
}
