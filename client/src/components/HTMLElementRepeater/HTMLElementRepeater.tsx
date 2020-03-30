import React, { FunctionComponent, useRef } from 'react';
import { useStupidShit } from 'providers/StupidShitProvider';
import usePreventValueChange from 'hooks/usePreventValueChange';
import { HTMLElementRepeaterProps } from './types';

import * as Styled from './style';

/**
 * Repeats an HTML Element `x` amount of times. The number
 * of times the element will be repeated can be set in 
 * the admin portal.
 */
function HTMLElementRepeater<Element extends HTMLElement = HTMLDivElement> ({ 
    children, 
    repeat, 
    component: Component = "div", 
    onMutation = () => {},
    value,
    preventChanges = false,
    ...rest 
}: HTMLElementRepeaterProps<Element>) {

    const { repeatElements, preventChangingHTMLValues } = useStupidShit();
    const ref = useRef<Element>(null);
    const repeatCounter = repeat === undefined ? repeatElements : repeat;
    const observe = repeatCounter === 0 && value !== undefined && preventChangingHTMLValues && preventChanges;
    
    usePreventValueChange(observe, ref, value);

    return (
        <Styled.HTMLElementRepeater {...rest} component={Component} ref={ref}>
            {repeatCounter > 0 ? (
                <HTMLElementRepeater repeat={repeatCounter - 1} component={Component} {...rest}>
                    {value ? value : children}
                </HTMLElementRepeater>
            ) : (value ? value : children)}
        </Styled.HTMLElementRepeater>
    );

}

/**
 * HTML Aside Element Repeater.
 */
export const Aside: FunctionComponent<Omit<HTMLElementRepeaterProps<HTMLElement>, "component">> = (props) => {
    return <HTMLElementRepeater {...props} component="aside" />
}

/**
 * HTML Div Element Repeater.
 */
export const Div: FunctionComponent<Omit<HTMLElementRepeaterProps<HTMLDivElement>, "component">> = (props) => {
    return <HTMLElementRepeater {...props} component="div" />
}

/**
 * HTML Main Element Repeater.
 */
export const Main: FunctionComponent<Omit<HTMLElementRepeaterProps<HTMLElement>, "component">> = (props) => {
    return <HTMLElementRepeater {...props} component="main" />
}

/**
 * HTML Section Element Repeater.
 */
export const Section: FunctionComponent<Omit<HTMLElementRepeaterProps<HTMLElement>, "component">> = (props) => {
    return <HTMLElementRepeater {...props} component="section" />
}

/**
 * HTML Section Element Repeater.
 */
export const Span: FunctionComponent<Omit<HTMLElementRepeaterProps<HTMLSpanElement>, "component">> = (props) => {
    return <HTMLElementRepeater {...props} component="span" />
}