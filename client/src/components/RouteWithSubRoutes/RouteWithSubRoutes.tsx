import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import RouteNotFound from 'components/RouteNotFound';
import { RouteWithSubRoutesProps } from './types';

function interpolateParams(path: string, params: any = {}) {
    const regex = /:([a-zA-Z]+)/g;
    const replacer = (match: string, key: any) => `${params[key]}`;
    return path.replace(regex, replacer);
}

function checkIfCurrentPathIsValid(path: string, subRoutes: string[], pathname: string, params: any): boolean {
    const routes = [path, ...subRoutes];
    const validRoutes = routes.map(route => interpolateParams(route, params));
    const isValidRoute = validRoutes.includes(pathname);
    return isValidRoute;
}
/**
 * Conditionally render a component for a base route and all of its sub routes.
 * If any sub route is valid, we render the same base component, otherwise a 404.
 */
const RouteWithSubRoutes: FunctionComponent<RouteWithSubRoutesProps> = ({ path, subRoutes, component: Component }) => {

    return (
        <Route exact={false} path={path} render={(props) => {

            const { match, location } = props;
            
            const isValidRoute = checkIfCurrentPathIsValid(
                path, 
                subRoutes, 
                location.pathname, 
                match.params
            );

            return isValidRoute ? <Component {...props}/> : <RouteNotFound/>;

        }} />
    );

};

export default RouteWithSubRoutes;