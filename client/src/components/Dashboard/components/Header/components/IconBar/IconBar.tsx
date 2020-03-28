import React from 'react';
import { useHistory } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { ROUTE_MAIL_HOME, ROUTE_NOTIFICATIONS_HOME } from '../../../../../../routes';

import * as Styled from './style';

const IconBar = () => {

    const history = useHistory();

    function onMailIconClick() {
        history.push(ROUTE_MAIL_HOME);
    }

    function onNotificationIconClick() {
        history.push(ROUTE_NOTIFICATIONS_HOME);
    }

    return (
        <Styled.IconBar>
            <IconButton aria-label="show 4 new mails" color="inherit" onClick={onMailIconClick}>
                <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                </Badge>
            </IconButton>
            <IconButton aria-label="show 17 unread notifications" color="inherit" onClick={onNotificationIconClick}>
                <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={"menu"}
                aria-haspopup="true"
                onClick={() => { }}
                color="inherit">
                <AccountCircle />
            </IconButton>
        </Styled.IconBar>
    );
}

export default IconBar;