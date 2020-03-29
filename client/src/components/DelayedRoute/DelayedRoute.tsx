import React from 'react';
import { Route as ReactRouterRoute, RouteComponentProps } from 'react-router-dom';
import usePageLoadDelay from 'hooks/usePageLoadDelay';
import { DelayedRouteProps } from './types';

const DelayedRoute = ({ component: Component, ...rest }: DelayedRouteProps) => {

    function DelayedComponent(props: RouteComponentProps) {
        const loading = usePageLoadDelay();
        return loading ? null : <Component {...props}/>;
    }

    return <ReactRouterRoute {...rest} component={DelayedComponent}/>;

}

export default DelayedRoute;