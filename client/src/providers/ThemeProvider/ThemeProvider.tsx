import React, { FunctionComponent } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProviderProps } from './types';

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
    
    const theme = {};

    return (
        <StyledComponentsThemeProvider theme={theme}>
            {children}
        </StyledComponentsThemeProvider>
    );
}

export default ThemeProvider;