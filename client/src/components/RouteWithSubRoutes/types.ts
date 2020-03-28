import { RouteProps, RouteComponentProps } from 'react-router-dom';

export type RouteWithSubRoutesProps = Omit<RouteProps, "path" | "component" | "render"> & {
    subRoutes: string[],
    path: string,
    component: React.ComponentType<RouteComponentProps>
};