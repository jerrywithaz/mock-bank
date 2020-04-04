export interface HTMLElementBaseProps<Element = HTMLDivElement> extends React.DetailedHTMLProps<React.HTMLAttributes<Element>, Element>{
    bold?: boolean;
    capitalize?: boolean;
    component?: React.ElementType;
    children?: React.ReactNode;
    repeat?: number;
    truncate?: boolean;
    uppercase?: boolean;
    color?: string;
    onMutation?: (mutationsList: MutationRecord[]) => void;
    value?: string;
    preventChanges?: boolean
};

export type HTMLElementProps<Element = HTMLElement> = {

} & Omit<HTMLElementBaseProps<Element>, "component">;

export type StyledHTMLElementProps<Element = HTMLDivElement> = HTMLElementBaseProps<Element> & {
    component: React.ElementType;
};