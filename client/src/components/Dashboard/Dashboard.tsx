import React, { FunctionComponent, useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Header from './components/Header';
import { DashboardProps } from './types';

import * as Styled from './style';

const Dashboard: FunctionComponent<DashboardProps> = ({ children }) => {

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const sidebarWidth = 250;

    return (
        <Styled.Dashboard>
            <Sidebar open={drawerOpen} width={sidebarWidth}/>
            <Styled.DashboardMain drawerOpen={drawerOpen}>
                <Header />
                <Content>
                    {children}
                </Content>
            </Styled.DashboardMain>
        </Styled.Dashboard>
    );
}

export default Dashboard;