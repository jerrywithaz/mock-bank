export type Nullable<T> = T | null;

declare global {
    interface Window {
        tracking: any;
    }
}