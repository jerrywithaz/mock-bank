import React from 'react';
import { Route as ReactRouterRoute, RouteComponentProps } from 'react-router-dom';
import usePageLoadDelay from 'hooks/usePageLoadDelay';
import useConfirmNavigation from 'hooks/useConfirmNavigation';
import { DelayedRouteProps } from './types';

/**
 * A wrapper around `React Router's` `Route` component
 * that has the ability to make navigation extremely 
 * annoying.
 */
const AnnoyingRoute = ({ component: Component, ...rest }: DelayedRouteProps) => {

    function AnnoyingComponent(props: RouteComponentProps) {

        const confirmed = useConfirmNavigation();
        const loading = usePageLoadDelay();
        const hideComponent = loading || !confirmed;

        return hideComponent ? null : <Component {...props}/>;

    }

    return <ReactRouterRoute {...rest} component={AnnoyingComponent}/>;

}

export default AnnoyingRoute;