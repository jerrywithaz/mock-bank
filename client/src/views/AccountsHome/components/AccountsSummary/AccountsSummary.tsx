import React, { FunctionComponent } from 'react';
import { AccountsSummaryProps } from './types';
import { Div } from '../../../../components/HTMLElementRepeater';

import * as Styled from './style';

const AccountsSummary: FunctionComponent<AccountsSummaryProps> = ({ accounts }) => {
    return (
        <Styled.AccountsSummary>
            <Div>All Accounts</Div>
            <Div>
            {accounts.map((account) => {
                return (
                    <Div key={account.id}>
                        {account.name}
                    </Div>
                )
            })}
            </Div>
        </Styled.AccountsSummary>
    );
}

export default AccountsSummary;