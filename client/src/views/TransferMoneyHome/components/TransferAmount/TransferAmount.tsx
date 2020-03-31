import React, { FunctionComponent } from 'react';
import { Input, Typography, Button } from 'antd';
import ButtonGroup from 'ui/ButtonGroup';
import { TransferAmountProps } from './types';

import * as Styled from './../../style';

const TransferAmount: FunctionComponent<TransferAmountProps> = ({
    transferAmount,
    transferMemo
}) => {
    return (
        <>
            <Styled.Label>Amount: </Styled.Label>
            <Input prefix={<Typography.Text>$</Typography.Text>} type="number" value={transferAmount} />
            <br />
            <br />
            <Styled.Label>Memo (optional): </Styled.Label>
            <Input type="text" value={transferMemo} />
            <br />
            <br />
            <br />
            <br />
            <ButtonGroup align="end">
                <Button style={{marginRight: 10}}>Cancel</Button>
                <Button type="primary">Transfer</Button>
            </ButtonGroup>
        </>
    );
}

export default TransferAmount;