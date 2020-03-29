import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { RouteState } from 'providers/RouteProvider/types';

/**
 * Shows the 404 page when a visited url is not found.
 */
const RouteNotFound = () => {

    const location = useLocation<RouteState>();
    const { pathname } = location;

    const to = {
        pathname: pathname,
        state: {
            status: 404
        }
    }

    return <Redirect to={to} push={false}/>;

};

export default RouteNotFound;