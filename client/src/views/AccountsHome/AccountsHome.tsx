import React, { FunctionComponent } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { accountsHomeQuery } from './graphql';
import { AccountsHomeProps, AccountHomeQueryData } from './types';
import AccountsSummary from './components/AccountsSummary';

import * as Styled from './style';
import RecentTransactions from './components/RecentTransactions';

const AccountsHome: FunctionComponent<AccountsHomeProps> = () => {

    const { data } = useQuery<AccountHomeQueryData>(accountsHomeQuery);

    const accounts = data ? data.accounts : [];
    const recentTransactions = data ? data.recentTransactions : [];

    return (
        <Styled.AccountsHome>
            <AccountsSummary accounts={accounts}/>
            <Styled.TransactionInfo>
                <RecentTransactions transactions={recentTransactions}/>
            </Styled.TransactionInfo>
        </Styled.AccountsHome>
    );

}

export default AccountsHome;