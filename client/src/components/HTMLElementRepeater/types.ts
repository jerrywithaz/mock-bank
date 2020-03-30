export interface HTMLElementRepeaterProps<Element = HTMLDivElement> extends React.DetailedHTMLProps<React.HTMLAttributes<Element>, Element>{
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

export type StyledHTMLElementRepeaterProps<Element = HTMLDivElement> = HTMLElementRepeaterProps<Element> & {
    component: React.ElementType;
};