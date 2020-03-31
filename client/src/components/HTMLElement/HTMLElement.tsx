import React, { FunctionComponent, useRef } from 'react';
import { useStupidShit } from 'providers/StupidShitProvider';
import usePreventValueChange from 'hooks/usePreventValueChange';
import { HTMLElementProps } from './types';

import * as Styled from './style';

/**
 * Repeats an HTML Element `x` amount of times. The number
 * of times the element will be repeated can be set in 
 * the admin portal.
 */
function HTMLElement<Element extends HTMLElement = HTMLDivElement> ({ 
    children, 
    repeat, 
    component: Component = "div", 
    onMutation = () => {},
    value,
    preventChanges = false,
    ...rest 
}: HTMLElementProps<Element>) {

    const { repeatElements, preventChangingHTMLValues } = useStupidShit();
    const ref = useRef<Element>(null);
    const repeatCounter = repeat === undefined ? repeatElements : repeat;
    const observe = repeatCounter === 0 && value !== undefined && preventChangingHTMLValues && preventChanges;
    
    usePreventValueChange(observe, ref, value);

    return (
        <Styled.HTMLElement {...rest} component={Component} ref={ref}>
            {repeatCounter > 0 ? (
                <HTMLElement repeat={repeatCounter - 1} component={Component} {...rest}>
                    {value ? value : children}
                </HTMLElement>
            ) : (value ? value : children)}
        </Styled.HTMLElement>
    );

}

/**
 * HTML Aside Element Repeater.
 */
export const Aside: FunctionComponent<Omit<HTMLElementProps<HTMLElement>, "component">> = (props) => {
    return <HTMLElement {...props} component="aside" />
}

/**
 * HTML Div Element Repeater.
 */
export const Div: FunctionComponent<Omit<HTMLElementProps<HTMLDivElement>, "component">> = (props) => {
    return <HTMLElement {...props} component="div" />
}

/**
 * HTML Main Element Repeater.
 */
export const Main: FunctionComponent<Omit<HTMLElementProps<HTMLElement>, "component">> = (props) => {
    return <HTMLElement {...props} component="main" />
}

/**
 * HTML Section Element Repeater.
 */
export const Section: FunctionComponent<Omit<HTMLElementProps<HTMLElement>, "component">> = (props) => {
    return <HTMLElement {...props} component="section" />
}

/**
 * HTML Section Element Repeater.
 */
export const Span: FunctionComponent<Omit<HTMLElementProps<HTMLSpanElement>, "component">> = (props) => {
    return <HTMLElement {...props} component="span" />
}