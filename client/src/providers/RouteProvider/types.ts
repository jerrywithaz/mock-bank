import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

export type RouteContextValue = {
    status: number
};

export type RouteState = {
    status: number
};

export type RouteProviderProps = RouteComponentProps<{}, StaticContext, RouteState> & {
    children: React.ReactNode
};