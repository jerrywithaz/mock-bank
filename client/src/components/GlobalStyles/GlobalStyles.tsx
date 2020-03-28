import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }
    
    html,
    body {
        width: 100%;
        height: 100%;
        overflow: hidden;
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