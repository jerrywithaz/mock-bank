import React, { FunctionComponent } from 'react';
import { List} from 'antd';
import Card from 'ui/Card';
import { RecentTransactionsProps } from './types';
import Transaction from './components/Transaction';

import * as Styled from './style';

const RecentTransactions: FunctionComponent<RecentTransactionsProps> = ({ transactions }) => {

    return (
        <Styled.RecentTransactions>
            <Card title="Recent Transactions" maxHeight={400}>
                {transactions.length && (
                    <List
                        dataSource={transactions}
                        renderItem={(transaction) => (
                            <Transaction transaction={transaction}/>
                        )}
                    />
                )}
            </Card>
        </Styled.RecentTransactions>
    );
}

export default RecentTransactions;