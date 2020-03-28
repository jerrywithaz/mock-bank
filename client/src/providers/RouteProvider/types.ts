import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

export type RouteContextValue = {

}

export type RouteState = {
    status: 404
};

export type RouteProviderProps = RouteComponentProps<{}, StaticContext, RouteState> & {
    children: React.ReactNode
}