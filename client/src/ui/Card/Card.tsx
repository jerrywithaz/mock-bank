import React from 'react';
import { Card as AntCard } from 'antd';
import { CardProps } from './types';

import * as Styled from './style';

const Card = (props: CardProps) => {
    return <Styled.Card bordered={false} {...props}/>;
};

Card.defaultProps = {
    primary: true
};
Card.Meta = AntCard.Meta;
Card.Grid = AntCard.Grid;

export default Card;