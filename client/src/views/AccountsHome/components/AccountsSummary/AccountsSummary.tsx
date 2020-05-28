import React, { FunctionComponent } from 'react';
import { Table } from 'antd';
import { Div } from 'components/HTMLElement';
import createStringDollarAmount from 'utils/createStringDollarAmount';
import Card from 'ui/Card';
import { AccountHomeAccountSummaryQuery } from '../../types';
import { AccountsSummaryProps } from './types';

import * as Styled from './style';

const AccountsSummary: FunctionComponent<AccountsSummaryProps> = ({ accounts }) => {

    const columns = [{
        title: 'Account Name',
        dataIndex: "name",
        render: (name: string) => <Div bold capitalize value={name} />
    },
    {
        title: 'Account Type',
        dataIndex: "type",
        render: (type: string) => <Div capitalize value={type} />
    },
    {
        title: 'Available Balance',
        dataIndex: "availableBalance",
        render: (availableBalance: number) => <Div preventChanges value={createStringDollarAmount(availableBalance)} />
    }];

    return (
        <Styled.AccountsSummary>
            <Card title="Accounts Summary">
                {accounts.length > 0 ? (
                    <Table<AccountHomeAccountSummaryQuery>
                        columns={columns}
                        dataSource={accounts}
                        rowKey={"id"}/>
                ) : null}
            </Card>
        </Styled.AccountsSummary>
    );

}

export default AccountsSummary;