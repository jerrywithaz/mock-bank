import React, { FunctionComponent } from 'react';
import CreditCardGenerator from 'creditcard-generator';
import faker from 'faker';
import { CardsSummaryProps } from './types';
import Card from 'ui/Card';
import CreditCard from 'ui/CreditCard';

import * as Styled from './style';

const CardsSummary: FunctionComponent<CardsSummaryProps> = () => {

    const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    const expiry = "10/25";
    const card = CreditCardGenerator.GenCC("Visa")[0];

    return (
        <Styled.CardsSummary>
            <Card title="Cards Summary" fillContainer>
                <CreditCard
                    cvc={234}
                    expiry={expiry}
                    focused={"number"}
                    name={name}
                    number={card} />
            </Card>
        </Styled.CardsSummary>
    )
}

export default CardsSummary;