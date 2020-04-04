import React, { FunctionComponent, useRef } from 'react';
import { useStupidShit } from 'providers/StupidShitProvider';
import usePreventValueChange from 'hooks/usePreventValueChange';
import { HTMLElementBaseProps, HTMLElementProps } from './types';

import * as Styled from './style';

/**
 * A wrapper around the standard HTML Element
 * that uses hooks to hook into settings and provides
 * easy ways to do simple styling though boolean props 
 * such as `bold`.
 */
function HTMLElementBase<Element extends HTMLElement = HTMLDivElement> ({ 
    children, 
    repeat, 
    component: Component = "div", 
    onMutation = () => {},
    value,
    preventChanges = false,
    ...rest 
}: HTMLElementBaseProps<Element>) {

    const { repeatElements, preventChangingHTMLValues } = useStupidShit();
    const ref = useRef<Element>(null);
    const repeatCounter = repeat === undefined ? repeatElements : repeat;
    const observe = repeatCounter === 0 && value !== undefined && preventChangingHTMLValues && preventChanges;
    
    usePreventValueChange(observe, ref, value);

    return (
        <Styled.HTMLElement {...rest} component={Component} ref={ref}>
            {repeatCounter > 0 ? (
                <HTMLElementBase repeat={repeatCounter - 1} component={Component} {...rest}>
                    {value ? value : children}
                </HTMLElementBase>
            ) : (value ? value : children)}
        </Styled.HTMLElement>
    );

}

/**
 * Custom HTML Aside Element.
 */
export const Aside: FunctionComponent<HTMLElementProps<HTMLElement>> = (props) => {
    return <HTMLElementBase {...props} component="aside" />
}

/**
 * Custom HTML Div Element.
 */
export const Div: FunctionComponent<HTMLElementProps<HTMLDivElement>> = (props) => {
    return <HTMLElementBase {...props} component="div" />
}

/**
 * Custom HTML Main Element.
 */
export const Main: FunctionComponent<HTMLElementProps<HTMLElement>> = (props) => {
    return <HTMLElementBase {...props} component="main" />
}

/**
 * Custom HTML Section Element.
 */
export const Section: FunctionComponent<HTMLElementProps<HTMLElement>> = (props) => {
    return <HTMLElementBase {...props} component="section" />
}

/**
 * Custom HTML Section Element.
 */
export const Span: FunctionComponent<HTMLElementProps<HTMLSpanElement>> = (props) => {
    return <HTMLElementBase {...props} component="span" />
}

/**
 * Custom HTML Anchor Element.
 */
export const A: FunctionComponent<HTMLElementProps<HTMLAnchorElement>> = (props) => {
    return <HTMLElementBase {...props} component="a" />
}