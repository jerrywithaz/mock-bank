import React, { FunctionComponent } from 'react';
import { Card as AntCard } from 'antd';
import { CardProps } from './types';

import * as Styled from './style';

const Card = (props: CardProps) => {
    return <Styled.Card {...props}/>;
};

Card.Meta = AntCard.Meta;
Card.Grid = AntCard.Grid;

export default Card;