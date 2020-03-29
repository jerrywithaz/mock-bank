import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { List, Avatar, Tooltip } from 'antd';
import { MoneyCollectFilled, FlagFilled, UndoOutlined } from '@ant-design/icons';
import { Div } from 'components/HTMLElementRepeater';
import Card from 'ui/Card';
import { RecentTransactionsProps } from './types';

import * as Styled from './style';

const RecentTransactions: FunctionComponent<RecentTransactionsProps> = ({ transactions }) => {

    return (
        <Styled.RecentTransactions>
            <Card title="Recent Transactions" maxHeight={400}>
                {transactions.length && (
                    <List
                        dataSource={transactions}
                        renderItem={(transaction) => (
                            <List.Item
                                key={transaction.id}
                                actions={[
                                    <Tooltip key={"action-flag"} title="Flag as Suspicious">
                                        <FlagFilled/>
                                    </Tooltip>
                                    ,
                                    <Tooltip key={"action-undo"} title="Undo Transaction">
                                        <UndoOutlined/>
                                    </Tooltip>,
                                ]}>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar icon={<MoneyCollectFilled />} />
                                    }
                                    title={<Div uppercase>{transaction.description}</Div>}
                                    description={<Div capitalize>{transaction.type}</Div>}
                                />
                                <Div>{moment(transaction.date).format("LLLL")}</Div>
                            </List.Item>
                        )}
                    />
                )}
            </Card>
        </Styled.RecentTransactions>
    );
}

export default RecentTransactions;