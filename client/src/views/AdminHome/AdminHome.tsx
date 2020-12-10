import React from 'react';
import { Tabs } from 'antd';
import Card from 'ui/Card';
import Settings from './components/Settings';
import Accounts from './components/Accounts';

const AdminHome = () => {
    return (
        <Card fillContainer title="Admin">
            <Tabs defaultActiveKey="0">
                <Tabs.TabPane tab="Settings" key="0">
                    <Settings/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Accounts" key="1">
                    <Accounts/>
                </Tabs.TabPane>
            </Tabs>
        </Card>
    );
}

export default AdminHome;