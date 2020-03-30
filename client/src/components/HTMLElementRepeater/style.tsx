import React from 'react';
import styled from 'styled-components';
import { StyledHTMLElementRepeaterProps } from './types';

const HTMLElementRepeaterComponent = React.forwardRef<unknown, Omit<StyledHTMLElementRepeaterProps<unknown>, "repeat">>(({
    component: Component, 
    capitalize,
    truncate,
    uppercase,
    color,
    ...rest
}, ref) => {
    return <Component {...rest} ref={ref} />;
});

export const HTMLElementRepeater = styled(HTMLElementRepeaterComponent)`
    ${props => props.capitalize && `text-transform: capitalize;`}
    ${props => props.truncate && `
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `}
    ${props => props.uppercase && `text-transform: uppercase;`}
    ${props => props.color && `color: ${props.color};`}
`;