import React, { FunctionComponent, useState } from 'react';
import { Row } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import Card from 'ui/Card';
import { transferMoneyHomeQuery } from './graphql';
import { TransferMoneyHomeProps, TransferMoneyHomeQuery } from './types';
import TransferFrom from './components/TransferFrom';
import TransferTo from './components/TransferTo';
import TransferAmount from './components/TransferAmount';

import * as Styled from './style';

const TransferMoneyHome: FunctionComponent<TransferMoneyHomeProps> = () => {

    const { data } = useQuery<TransferMoneyHomeQuery>(transferMoneyHomeQuery);
    const [transferFromAccount, setTransferFromAccount] = useState<string | undefined>();
    const [transferToAccount, setTransferToAccount] = useState<string | undefined>();
    const accounts = data ? data.accounts : [];

    return (
        <Styled.TransferMoneyHome>
            <Card title="Transfer Money" fillContainer>
                {accounts.length ? (
                    <Row>
                        <Styled.Col span={8}>
                            <TransferFrom 
                                accounts={accounts}
                                onAccountChange={setTransferFromAccount}
                                transferFromAccount={transferFromAccount}/>
                        </Styled.Col>
                        <Styled.Col span={8}>
                            <TransferTo 
                                accounts={accounts}
                                onAccountChange={setTransferToAccount}
                                transferFromAccount={transferFromAccount}
                                transferToAccount={transferToAccount}/>
                        </Styled.Col>
                        <Styled.Col span={8}>
                            <TransferAmount 
                                transferAmount={0} 
                                transferMemo={""}/>
                        </Styled.Col>
                    </Row>
                ) : null}
            </Card>
        </Styled.TransferMoneyHome>
    );
}

export default TransferMoneyHome;