export interface HTMLElementProps<Element = HTMLDivElement> extends React.DetailedHTMLProps<React.HTMLAttributes<Element>, Element>{
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

export type StyledHTMLElementProps<Element = HTMLDivElement> = HTMLElementProps<Element> & {
    component: React.ElementType;
};