import React, { FunctionComponent } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { StupidShitContextValue, StupidShitProviderProps } from './types';
import { stupidShitProviderQuery } from './graphql';
import { StupidShitType } from '../../types';

const StupidShitContext = React.createContext<StupidShitContextValue | undefined>(undefined);

const StupidShitProvider: FunctionComponent<StupidShitProviderProps> = ({ children }) => {

    const { data, loading } = useQuery<{stupidShit: StupidShitType}>(stupidShitProviderQuery);

    if (data) {
        return (
            <StupidShitContext.Provider value={data.stupidShit}>
                {children}
            </StupidShitContext.Provider>
        );
    }
    
    if (loading) return <div>Loading...</div>;

    return <div>Error...</div>;

}

export { StupidShitContext };
export default StupidShitProvider;