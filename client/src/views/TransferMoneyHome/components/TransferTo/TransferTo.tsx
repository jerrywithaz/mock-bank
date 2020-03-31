import React, { FunctionComponent } from 'react';
import { DatePicker } from 'antd';
import Select from 'ui/Select';
import createStringDollarAmount from 'utils/createStringDollarAmount';
import { TransferToProps } from './types';

import * as Styled from './../../style';

const TransferTo: FunctionComponent<TransferToProps> = ({
    accounts,
    onAccountChange,
    transferFromAccount,
    transferToAccount
}) => {
    return (
        <>
            <Styled.Label>Transfer To: </Styled.Label>
            <Select
                fullWidth
                disabled={!transferFromAccount}
                placeholder="Select an Account..."
                value={transferToAccount}
                onChange={onAccountChange}>
                {accounts.filter((account) => account.id !== transferFromAccount).map(({ name, id, availableBalance }) => {
                    return (
                        <Select.Option key={id} value={id}>
                            {`${name} (${createStringDollarAmount(availableBalance)})`}
                        </Select.Option>
                    );
                })}
            </Select>
            <br />
            <br />
            <Styled.Label>Select Date: </Styled.Label>
            <DatePicker style={{ width: "100%" }} />
        </>
    );
}

export default TransferTo;