import React, { FunctionComponent, useState } from 'react';
import { HTMLElementRepeaterProps } from './types';
import { useStupidShit } from '../../providers/StupidShitProvider';

/**
 * Repeats an HTML Element `x` amount of times. The number
 * of times the element will be repeated can be set in 
 * the admin portal.
 */
const HTMLElementRepeater: FunctionComponent<HTMLElementRepeaterProps> = ({ children, repeat, component: Component = "div", ...rest }) => {

    const { repeatElements } = useStupidShit();
    const [repeatCounter] = useState<number>(repeat === undefined ? repeatElements : repeat);
    
    return (
        <Component {...rest}>
            {repeatCounter > 0 ? (
                <HTMLElementRepeater repeat={repeatCounter - 1} component={Component} {...rest}>
                    {children}
                </HTMLElementRepeater>
            ) : (
                    children
                )}
        </Component>
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