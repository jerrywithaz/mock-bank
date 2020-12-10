import React from 'react';
import { adminHomeAccountsQuery } from './graphql';
import { useQuery } from '@apollo/react-hooks';

const Accounts = () => {

    const { data } = useQuery(adminHomeAccountsQuery);

    console.log(data);
    
    return null;

};

export default Accounts;