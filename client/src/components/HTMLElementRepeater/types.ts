export interface HTMLElementRepeaterProps extends React.AllHTMLAttributes<HTMLDivElement> {
    component?: React.ElementType;
    children: React.ReactNode;
    repeat?: number;
}