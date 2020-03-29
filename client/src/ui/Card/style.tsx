import React from 'react';
import { Card as AntCard } from 'antd';
import styled from 'styled-components';
import { CardProps } from './types';

export const Card = styled(({maxHeight, fillContainer, ...rest}: CardProps) => (
    <AntCard {...rest}/>
))`
    ${props => props.fillContainer && `
        width: 100%;
        height: 100%;
    `}
    ${props => props.maxHeight && `
        min-height: ${props.maxHeight}px;
        max-height: ${props.maxHeight}px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .ant-card-body {
            overflow: auto;
            margin: 24px;
            padding: 0px;
        }
    `}
`;