import React, { FunctionComponent } from 'react';
import { Switch as ReactRouterSwitch } from 'react-router-dom';
import RouteNotFound from 'components/RouteNotFound';
import { SwitchProps } from './types';

const Switch: FunctionComponent<SwitchProps> = ({ children }) => {

    return (
        <ReactRouterSwitch>
            {children}
            <RouteNotFound/>
        </ReactRouterSwitch>
    );

}

export default Switch;