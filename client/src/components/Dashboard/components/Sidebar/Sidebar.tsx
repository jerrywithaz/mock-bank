import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import { ROUTE_ACCOUNTS_HOME } from '../../../../routes';
import { SidebarProps } from './types';

import { useDashboardSidebarStyles } from './style';

const Sidebar: FunctionComponent<SidebarProps> = (props) => {

    const classNames = useDashboardSidebarStyles(props);

    return (
        <Drawer
            className={classNames.drawer}
            variant="permanent"
            anchor="left"
            open={props.open}
            classes={{
                paper: classNames.drawerPaper,
            }}>
            <Divider />
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Accounts
                    </ListSubheader>
                }>
                <ListItem component={Link} to={ROUTE_ACCOUNTS_HOME}>
                    <ListItemText primary={"Account Summary"} />
                </ListItem>
                <ListItem component={Link} to={"link_an_account"}>
                    <ListItemText primary={"Link an Account"} />
                </ListItem>
            </List>
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Transactions
                    </ListSubheader>
                }>
                <ListItem component={Link} to={"dispute_transaction"}>
                    <ListItemText primary={"Dispute"} />
                </ListItem>
                <ListItem component={Link} to={"send_money"}>
                    <ListItemText primary={"Send Money"} />
                </ListItem>
            </List>
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Services
                    </ListSubheader>
                }>
                <ListItem component={Link} to={"account_statements"}>
                    <ListItemText primary={"Account Statements"} />
                </ListItem>
                <ListItem component={Link} to={"enroll_new_account"}>
                    <ListItemText primary={"Enroll a New Account"} />
                </ListItem>
                <ListItem component={Link} to={"card_replacement"}>
                    <ListItemText primary={"Card Replacement"} />
                </ListItem>
                <ListItem component={Link} to={"order_checkbook"}>
                    <ListItemText primary={"Order Checkbook"} />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default Sidebar;