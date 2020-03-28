import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html,
    body {
        width: 100%;
        height: 100%;
    }

    body {
        margin: 0px;
        font-family: "Segoe-UI", sans-serif;
        background: #F5F6FA;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyles;