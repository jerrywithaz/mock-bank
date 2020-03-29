import React, { FunctionComponent, useState } from 'react';
import { HTMLElementRepeaterProps } from './types';
import { useStupidShit } from '../../providers/StupidShitProvider';

import * as Styled from './style';

/**
 * Repeats an HTML Element `x` amount of times. The number
 * of times the element will be repeated can be set in 
 * the admin portal.
 */
const HTMLElementRepeater: FunctionComponent<HTMLElementRepeaterProps> = ({ children, repeat, component: Component = "div", ...rest }) => {

    const { repeatElements } = useStupidShit();
    const [repeatCounter] = useState<number>(repeat === undefined ? repeatElements : repeat);
    
    return (
        <Styled.HTMLElementRepeater {...rest} as={Component}>
            {repeatCounter > 0 ? (
                <HTMLElementRepeater repeat={repeatCounter - 1} component={Component} {...rest}>
                    {children}
                </HTMLElementRepeater>
            ) : (
                    children
                )}
        </Styled.HTMLElementRepeater>
    );

}

/**
 * HTML Aside Element Repeater.
 */
export const Aside: FunctionComponent<Omit<HTMLElementRepeaterProps, "component">> = (props) => {
    return <HTMLElementRepeater {...props} component="aside" />
}

/**
 * HTML Div Element Repeater.
 */
export const Div: FunctionComponent<Omit<HTMLElementRepeaterProps, "component">> = (props) => {
    return <HTMLElementRepeater {...props} component="div" />
}

/**
 * HTML Main Element Repeater.
 */
export const Main: FunctionComponent<Omit<HTMLElementRepeaterProps, "component">> = (props) => {
    return <HTMLElementRepeater {...props} component="main" />
}

export default HTMLElementRepeater;