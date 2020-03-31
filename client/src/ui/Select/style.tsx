import React from 'react';
import styled from 'styled-components';
import { Select as AntSelect } from 'antd';
import { SelectProps } from './types';

export const Select = styled(({ fullWidth, ...rest }: SelectProps) => (
    <AntSelect {...rest}/>
))`
    ${props => props.fullWidth && "width: 100%;"}
`;