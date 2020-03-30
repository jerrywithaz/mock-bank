import React, { FunctionComponent } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { accountsHomeQuery } from './graphql';
import { AccountsHomeProps, AccountHomeQueryData } from './types';
import AccountsSummary from './components/AccountsSummary';
import RecentTransactions from './components/RecentTransactions';
import UpcomingPayments from './components/UpcomingPayments';

import * as Styled from './style';

const AccountsHome: FunctionComponent<AccountsHomeProps> = () => {

    const { data } = useQuery<AccountHomeQueryData>(accountsHomeQuery);

    const accounts = data ? data.accounts : [];
    const recentTransactions = data ? data.recentTransactions : [];
    const upcomingPayments: any[] = [];
    
    return (
        <Styled.AccountsHome>
            <AccountsSummary accounts={accounts}/>
            <Styled.TransactionInfo>
                <RecentTransactions transactions={recentTransactions}/>
                <UpcomingPayments upcomingPayments={upcomingPayments}/>
            </Styled.TransactionInfo>
        </Styled.AccountsHome>
    );

}

export default AccountsHome;