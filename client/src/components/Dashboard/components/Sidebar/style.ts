import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';
import { SidebarProps } from './types';

export const Sidebar = styled.div<SidebarProps>`
  height: 100%;
  display: flex;
  flex-shrink: 0;
  width: ${props => props.width}px;
`;

export const Logo = styled.div`
  width: 100%;
  height: 64px;
`;

export const Menu = styled(AntMenu)`
  width: 300px;
  overflow: auto;
`;

export const MenuItemGroup = styled(AntMenu.ItemGroup)`
  .ant-menu-item-group-title {
    color: #ffffff;
  }
`;