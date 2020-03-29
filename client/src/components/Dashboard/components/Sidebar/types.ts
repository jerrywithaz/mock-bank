export type SidebarItem = {
    key: string;
    title: string;
    items: {
        key: string;
        title: string;
        url: string;
    }[];
};

export type SidebarProps = {
    open: boolean,
    width: number
}