import React, { FunctionComponent } from 'react';
import { Card, Table } from 'antd';
import { Div } from 'components/HTMLElementRepeater';
import createStringDollarAmount from 'utils/createStringDollarAmount';
import { AccountHomeAccountSummaryQuery } from '../../types';
import { AccountsSummaryProps } from './types';

import * as Styled from './style';

const AccountsSummary: FunctionComponent<AccountsSummaryProps> = ({ accounts }) => {

    const columns = [
        { title: 'Account Name', dataIndex: "name", render: (name: string) => <Div capitalize>{name}</Div> },
        { title: 'Account Type', dataIndex: "type", render: (type: string) => <Div capitalize>{type}</Div> },
        { title: 'Available Balance', dataIndex: "availableBalance", render: (availableBalance: number) => <Div>{createStringDollarAmount(availableBalance)}</Div> },
    ];

    return (
        <Styled.AccountsSummary>
            <Card title="Accounts Summary">
                {accounts.length && (
                    <Table<AccountHomeAccountSummaryQuery>
                        columns={columns}
                        dataSource={accounts}
                        rowKey={"id"} />
                )}
            </Card>
        </Styled.AccountsSummary>
    );

}

export default AccountsSummary;