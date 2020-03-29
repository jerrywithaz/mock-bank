import { RouteProps as ReactRouterRouteProps, RouteComponentProps } from 'react-router-dom';

export type DelayedRouteProps = Omit<ReactRouterRouteProps, "component"> & {
    component: React.ComponentType<RouteComponentProps>
};