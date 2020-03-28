import React, { FunctionComponent } from 'react';
import { ThemeProvider as MaterialUIThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProviderProps } from './types';

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
    
    const theme = createMuiTheme({});

    return (
        <StyledComponentsThemeProvider theme={theme}>
            <MaterialUIThemeProvider theme={theme}>
                {children}
            </MaterialUIThemeProvider>
        </StyledComponentsThemeProvider>
    );
}

export default ThemeProvider;