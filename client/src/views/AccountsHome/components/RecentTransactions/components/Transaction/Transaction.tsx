import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { List, Avatar, Tooltip } from 'antd';
import { MoneyCollectFilled, FlagFilled, UndoOutlined } from '@ant-design/icons';
import { Div } from 'components/HTMLElementRepeater';
import { TransactionProps } from './types';

const Transaction: FunctionComponent<TransactionProps> = ({ transaction }) => {
    return (
        <List.Item
            key={transaction.id}
            actions={[
                <Tooltip key={"action-flag"} title="Flag as Suspicious">
                    <FlagFilled />
                </Tooltip>,
                <Tooltip key={"action-undo"} title="Undo Transaction">
                    <UndoOutlined />
                </Tooltip>
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
    );
}

export default Transaction;