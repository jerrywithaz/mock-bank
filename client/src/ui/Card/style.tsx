import React from 'react';
import { Card as AntCard } from 'antd';
import { blue } from '@ant-design/colors';
import styled from 'styled-components';
import { CardProps } from './types';

export const Card = styled(({maxHeight, fillContainer, primary, ...rest}: CardProps) => (
    <AntCard {...rest}/>
))`
    box-shadow: 0 0px 10px rgba(0,0,0,.1);
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
    ${props => props.primary && `
        .ant-card-head {
            background: ${blue.primary};
        }
        .ant-card-head-title {
            color: #ffffff;
        }
    `}
    .ant-card-body {
        background: #fff;
    }
`;