import React, { FunctionComponent } from 'react';
import { List, Tooltip } from 'antd';
import { FlagFilled, UndoOutlined } from '@ant-design/icons';
import { green, red } from '@ant-design/colors';
import { Div, Span } from 'components/HTMLElement';
import { TransactionProps } from './types';
import createStringDollarAmount from 'utils/createStringDollarAmount';

const Transaction: FunctionComponent<TransactionProps> = ({ transaction }) => {

    const { id, type, description } = transaction;
    const transactionAmount = createStringDollarAmount(transaction.amount);
    const transactionAmountColor = transaction.amount > 0 ? green.primary : red.primary;
    
    return (
        <List.Item
            key={id}
            actions={[
                <Tooltip key={"action-flag"} title="Flag as Suspicious">
                    <FlagFilled />
                </Tooltip>,
                <Tooltip key={"action-undo"} title="Undo Transaction">
                    <UndoOutlined />
                </Tooltip>
            ]}>
            <List.Item.Meta
                key={`${id}-meta`}
                title={<Span bold preventChanges uppercase value={description}/>}
                description={<Span preventChanges capitalize value={type}/>}
            />
            <Div preventChanges color={transactionAmountColor} value={transactionAmount}/>
        </List.Item>
    );
}

export default Transaction;