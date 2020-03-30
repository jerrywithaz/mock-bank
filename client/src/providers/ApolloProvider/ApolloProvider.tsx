import React, { FunctionComponent } from 'react';
import { ApolloProvider as Provider } from '@apollo/react-hooks';
import client from './client';
import { ApolloProviderProps } from './types';

const ApolloProvider: FunctionComponent<ApolloProviderProps> = ({ children }) => {
    return (
        <Provider client={client}>
            {children}
        </Provider>
    );
}

export default ApolloProvider;