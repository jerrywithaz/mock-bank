import React, { FunctionComponent } from 'react';
import { CardProps } from './types';

import * as Styled from './style';

const Card: FunctionComponent<CardProps> = (props) => {
    return <Styled.Card {...props}/>;
};

export default Card;