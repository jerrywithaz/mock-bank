import React, { FunctionComponent } from 'react';
import { Column } from 'material-table';
import { RecentTransactionsProps } from './types';
import { Div } from '../../../../components/HTMLElementRepeater';
import Table from '../../../../ui/Table';
import { AccountHomeRecentTransactionsQuery } from '../../types';
import createStringDollarAmount from '../../../../utils/createStringDollarAmount';

import * as Styled from './style';

const RecentTransactions: FunctionComponent<RecentTransactionsProps> = ({ transactions }) => {

    const columns: Column<AccountHomeRecentTransactionsQuery>[] = [
        { title: 'Date', render: (data) => <Div truncate>{data.date}</Div> },
        { title: 'Description', render: (data) => <Div truncate uppercase>{data.description}</Div> },
        { title: 'Amount', render: (data) => <Div capitalize>{createStringDollarAmount(data.amount)}</Div> }
    ];

    return (
        <Styled.RecentTransactions>
            {transactions.length && (
                <Table<AccountHomeRecentTransactionsQuery>
                    columns={columns}
                    data={transactions}
                    title="Recent Transactions"
                    options={{ paging: false, search: false }}
                    initialSelectedRowId={transactions[0].id} />
            )}
        </Styled.RecentTransactions>
    );
}

export default RecentTransactions;