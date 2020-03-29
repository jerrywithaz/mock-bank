import React, { FunctionComponent } from 'react';
import { Column } from 'material-table';
import Table from '../../../../ui/Table';
import { Div } from '../../../../components/HTMLElementRepeater';
import createStringDollarAmount from '../../../../utils/createStringDollarAmount';
import { AccountHomeAccountSummaryQuery } from '../../types';
import { AccountsSummaryProps } from './types';

import * as Styled from './style';

const AccountsSummary: FunctionComponent<AccountsSummaryProps> = ({ accounts }) => {

    const columns: Column<AccountHomeAccountSummaryQuery>[] = [
        { title: 'Account Name', render: (data) => <Div capitalize>{data.name}</Div> },
        { title: 'Account Type', render: (data) => <Div capitalize>{data.type}</Div> },
        { title: 'Available Balance', render: (data) => <Div>{createStringDollarAmount(data.availableBalance)}</Div> },
    ];

    return (
        <Styled.AccountsSummary>
            {accounts.length && (
                <Table<AccountHomeAccountSummaryQuery>
                    columns={columns}
                    data={accounts}
                    title="Accounts Summary"
                    options={{ paging: false }}
                    initialSelectedRowId={accounts[0].id} />
            )}
        </Styled.AccountsSummary>
    );

}

export default AccountsSummary;