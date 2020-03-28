import React from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import * as Styled from './style';

const SearchBar = () => {
    return (
        <Styled.SearchBar>
            <Input
                placeholder="Search..."
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }/>
        </Styled.SearchBar>
    );
}

export default SearchBar;