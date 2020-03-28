import React, { FunctionComponent } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { queries } from './graphql';
import { AccountsHomeProps, AccountHomeAccountSummaryQuery } from './types';
import AccountsSummary from './components/AccountsSummary';

import * as Styled from './style';

const AccountsHome: FunctionComponent<AccountsHomeProps> = () => {

    const { data: accountQueryData } = useQuery<{ accounts: AccountHomeAccountSummaryQuery[] }>(queries.accounts);

    const accounts = accountQueryData ? accountQueryData.accounts : [];

    return (
        <Styled.AccountsHome>
            <AccountsSummary accounts={accounts}/>
        </Styled.AccountsHome>
    );

}

export default AccountsHome;