import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';
import { blue } from '@ant-design/colors';

export const Sidebar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 300px;
  .ant-menu {
      background: rgb(72,81,115);
      background: linear-gradient(90deg, ${blue[9]} 0%, ${blue[7]} 100%);
      padding: 12px 0px;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 64px;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  align-items: Center;
  padding: 0px 20px;
  position: relative;
  z-index: 1;
`;

export const LogoText = styled.div`
  color: ${blue.primary};
  font-size: 18px;
  margin-left: 10px;
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