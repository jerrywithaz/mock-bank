import React, { FunctionComponent, useState } from 'react';
import usePageLoadDelay from 'hooks/usePageLoadDelay';
import { useRoutes } from 'providers/RouteProvider';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Header from './components/Header';
import { DashboardProps } from './types';

import * as Styled from './style';

const Dashboard: FunctionComponent<DashboardProps> = ({ children }) => {

    const loading = usePageLoadDelay();
    const { status } = useRoutes();
    const [ drawerOpen ] = useState<boolean>(false);
    const sidebarWidth = 250;

    if (loading) return <div>Loading...</div>;

    return (
        <Styled.Dashboard>
            <Sidebar open={drawerOpen} width={sidebarWidth}/>
            <Styled.DashboardMain drawerOpen={drawerOpen}>
                <Header />
                <Content>
                    {status === 200 && (children)}
                    {status === 404 && (
                        <div>Page not found</div>
                    )}
                </Content>
            </Styled.DashboardMain>
        </Styled.Dashboard>
    );
}

export default Dashboard;