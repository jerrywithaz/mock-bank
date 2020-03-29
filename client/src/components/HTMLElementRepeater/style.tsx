import React from 'react';
import styled from 'styled-components';
import { HTMLElementRepeaterProps } from './types';

export const HTMLElementRepeater = styled(({ 
    as: Component = "div", 
    ...rest 
}: Omit<HTMLElementRepeaterProps, "repeat" | "component">) => {
    return <Component {...rest}/>;
})`
    ${props => props.capitalize && `text-transform: capitalize;`}
    ${props => props.truncate && `
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `}
    ${props => props.uppercase && `text-transform: uppercase;`}
`;