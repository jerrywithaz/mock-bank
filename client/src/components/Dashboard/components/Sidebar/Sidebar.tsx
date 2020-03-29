import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { Div } from 'components/HTMLElementRepeater';
import { SidebarProps } from './types';
import items from './items';

import * as Styled from './style';

const Sidebar: FunctionComponent<SidebarProps> = () => {

    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState<string[]>([items[0].items[0].key]);

    function setActiveMenuItemFromLocation() {

        const activeMenuKey = items.reduce<string | null>((activeMenuKey, itemGroup) => {
            const activeItem = itemGroup.items.find((item) => {
                return item.url === location.pathname;
            });
            return activeMenuKey ? activeMenuKey: activeItem ? activeItem.key : null;
        }, null);

        if (activeMenuKey) {
            setSelectedKeys([activeMenuKey]);
        }

    }

    useEffect(setActiveMenuItemFromLocation, [location]);

    return (
        <Styled.Menu theme="dark" selectedKeys={selectedKeys}>
            <Styled.Logo/>
            {items.map((itemGroup) => {
                return (
                    <Styled.MenuItemGroup key={itemGroup.key} title={<Div>{itemGroup.title}</Div>}>
                        {itemGroup.items.map((item) => {
                            return (
                                <Menu.Item
                                    key={item.key}>
                                    <Link to={item.url}><Div>{item.title}</Div></Link>
                                </Menu.Item>
                            );
                        })}
                    </Styled.MenuItemGroup>
                );
            })}
        </Styled.Menu>
    );

}

export default Sidebar;