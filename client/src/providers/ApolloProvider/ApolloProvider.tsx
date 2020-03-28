import React, { FunctionComponent } from 'react';
import { ApolloProvider as Provider } from '@apollo/react-hooks';
import { GraphQLClient } from '../../graphql';
import { ApolloProviderProps } from './types';

const ApolloProvider: FunctionComponent<ApolloProviderProps> = ({ children }) => {
    return (
        <Provider client={GraphQLClient}>
            {children}
        </Provider>
    );
}

export default ApolloProvider;