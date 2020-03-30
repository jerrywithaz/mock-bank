import React, { FunctionComponent } from 'react';
import { List, Avatar, Tooltip } from 'antd';
import { FlagFilled, UndoOutlined, DollarCircleTwoTone } from '@ant-design/icons';
import { green, red, blue } from '@ant-design/colors';
import { Div, Span } from 'components/HTMLElementRepeater';
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
                avatar={
                    <Avatar 
                        style={{background: "transparent"}} 
                        icon={(
                            <DollarCircleTwoTone 
                                twoToneColor={blue.primary}/>
                        )} />
                }
                title={<Span preventChanges uppercase value={description}/>}
                description={<Span preventChanges capitalize value={type}/>}
            />
            <Div preventChanges color={transactionAmountColor} value={transactionAmount}/>
        </List.Item>
    );
}

export default Transaction;