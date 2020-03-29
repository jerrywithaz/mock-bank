export interface HTMLElementRepeaterProps extends React.AllHTMLAttributes<HTMLDivElement> {
    capitalize?: boolean;
    component?: React.ElementType;
    children: React.ReactNode;
    repeat?: number;
    truncate?: boolean;
    uppercase?: boolean;
}