import React, { FunctionComponent } from 'react';
import Card from 'ui/Card';
import { UpcomingPaymentsProps } from './types';

import * as Styled from './style';

const UpcomingPayments: FunctionComponent<UpcomingPaymentsProps> = () => {
    return (
        <Styled.UpcomingPayments>
            <Card title="Upcoming Payments" maxHeight={400}>

            </Card>
        </Styled.UpcomingPayments>
    );
}

export default UpcomingPayments;