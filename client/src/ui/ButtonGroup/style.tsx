import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { ButtonGroupProps } from './types';

export const ButtonGroup = styled(({ align = "start", ...rest }: ButtonGroupProps) => (
    <Button.Group {...rest}/>
))`
    display: flex;
    ${props => props.align === "start" && "justify-content: flex-start;"}
    ${props => props.align === "end" && "justify-content: flex-end;"}
`;