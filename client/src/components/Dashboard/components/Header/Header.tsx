import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconBar from './components/IconBar';
import SearchBar from './components/SearchBar';

import { Styled, useDashboardHeaderStyles } from './style';

const Header = () => {

    const classNames = useDashboardHeaderStyles();

    return (
        <Styled.Header>
            <AppBar position="sticky" className={classNames.appBar}>
                <Toolbar className={classNames.toolbar}>
                    <SearchBar/>
                    <IconBar/>
                </Toolbar>
            </AppBar>
        </Styled.Header>
    );

}

export default Header;