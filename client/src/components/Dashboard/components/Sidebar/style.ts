import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';

export const Sidebar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Logo = styled.div`
  width: 100%;
  height: 64px;
  flex-shrink: 0;
  background: #001429;
`;

export const Menu = styled(AntMenu)`
  width: 100%;
  overflow: auto;
  flex: 1;
`;

export const MenuItemGroup = styled(AntMenu.ItemGroup)`
  .ant-menu-item-group-title {
    color: #ffffff;
    font-weight: bold;
  }
`;