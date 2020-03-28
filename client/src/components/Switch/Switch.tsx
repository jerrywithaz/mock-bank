import React, { FunctionComponent } from 'react';
import { Switch as ReactRouterSwitch } from 'react-router-dom';
import { SwitchProps } from './types';
import RouteNotFound from '../RouteNotFound';

const Switch: FunctionComponent<SwitchProps> = ({ children }) => {

    return (
        <ReactRouterSwitch>
            {children}
            <RouteNotFound/>
        </ReactRouterSwitch>
    );

}

export default Switch;