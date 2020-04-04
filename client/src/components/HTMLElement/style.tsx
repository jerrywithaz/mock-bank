import React from 'react';
import styled from 'styled-components';
import { StyledHTMLElementProps } from './types';

const HTMLElementComponent = React.forwardRef<unknown, Omit<StyledHTMLElementProps<unknown>, "repeat">>(({
    component: Component, 
    capitalize,
    truncate,
    uppercase,
    color,
    bold,
    ...rest
}, ref) => {
    return <Component {...rest} ref={ref} />;
});

export const HTMLElement = styled(HTMLElementComponent)`
    ${props => props.capitalize && `text-transform: capitalize;`}
    ${props => props.truncate && `
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `}
    ${props => props.uppercase && `text-transform: uppercase;`}
    ${props => props.color && `color: ${props.color};`}
    ${props => props.bold && `font-weight: bold;`}
`;