import React, { FunctionComponent } from 'react';
import Select from 'ui/Select';
import createStringDollarAmount from 'utils/createStringDollarAmount';
import { TransferFromProps } from './types';

import * as Styled from 'views/TransferMoneyHome/style'

const TransferFrom: FunctionComponent<TransferFromProps> = ({
    accounts,
    onAccountChange,
    transferFromAccount
}) => {
    return (
        <>
            <Styled.Label>Transfer From: </Styled.Label>
            <Select
                fullWidth
                placeholder="Select an Account..."
                value={transferFromAccount}
                onChange={onAccountChange}>
                {accounts.map(({ name, id, availableBalance }) => {
                    return (
                        <Select.Option key={id} value={id}>
                            {`${name} (${createStringDollarAmount(availableBalance)})`}
                        </Select.Option>
                    );
                })}
            </Select>
        </>
    );
}

export default TransferFrom;