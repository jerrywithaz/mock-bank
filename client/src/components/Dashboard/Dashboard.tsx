import React, { FunctionComponent } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { DashboardProps } from './types';

import * as Styled from './style';

const Dashboard: FunctionComponent<DashboardProps> = ({ children }) => {
    return (
        <Styled.Dashboard>
            <Sidebar/>
            <Content>
                {children}
            </Content>
        </Styled.Dashboard>
    );
}

export default Dashboard;