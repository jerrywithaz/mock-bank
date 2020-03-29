import React, { FunctionComponent } from 'react';
import ReactCreditCard from 'react-credit-cards';
import { CreditCardProps } from './types';

import * as Styled from './style';

const CreditCard: FunctionComponent<CreditCardProps> = (props) => {
    return (
        <Styled.CreditCard>
            <ReactCreditCard {...props}/>
        </Styled.CreditCard>
    );
}

export default CreditCard;