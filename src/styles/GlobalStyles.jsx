import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        color: #B7B5EE;
        margin: 0;
        padding: 0;
        border: 0;
    }
    a{
        text-decoration: none;
    }
    body{
        margin: 0;
        padding: 0;
    }
    #root{
        width: 100vw;
        height: 100vh;
    }
`