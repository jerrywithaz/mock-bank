import React, { FunctionComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteProviderProps, RouteContextValue } from './types';

const RouteContext = React.createContext<RouteContextValue | undefined>(undefined);

const RouteProvider: FunctionComponent<RouteProviderProps> = ({ 
    children, 
    location
}) => {

    const { state = { status: 200 } } = location;

    return (
        <RouteContext.Provider value={{status: state.status}}>
            {state.status === 404 && (
                <div>Page not found</div>
            )}
            {state.status === 200 && (
                children
            )}
        </RouteContext.Provider>
    );

}

export { RouteContext };
export default withRouter(RouteProvider);