import styled from 'styled-components';
import { Div } from 'components/HTMLElement';

export const Dashboard = styled(Div)`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const DashboardMain = styled.div<{drawerOpen: boolean}>`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex: 1;
`;