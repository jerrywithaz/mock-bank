import React, { FunctionComponent } from 'react';
import { AccountsSummaryProps } from './types';

import * as Styled from './style';

const AccountsSummary: FunctionComponent<AccountsSummaryProps> = ({ accounts }) => {
    return (
        <Styled.AccountsSummary>
            <div>All Accounts</div>
            <div>
            {accounts.map((account) => {
                return (
                    <div key={account.id}>
                        {account.name}
                    </div>
                )
            })}
            </div>
            
        </Styled.AccountsSummary>
    );
}

export default AccountsSummary;