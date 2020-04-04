import React, { FunctionComponent } from 'react';
import { createBrowserHistory } from 'history';
import { Router as BrowserRouter } from 'react-router-dom';
import { ReactRouterProviderProps } from './types';

const ReactRouterProvider: FunctionComponent<ReactRouterProviderProps> = ({ children }) => {

    const history = createBrowserHistory();

    return (
        <BrowserRouter history={history}>
            {children}
        </BrowserRouter>
    );

}

export default ReactRouterProvider;