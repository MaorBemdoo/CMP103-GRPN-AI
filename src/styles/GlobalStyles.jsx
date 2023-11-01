import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        color: #7773fc;
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
        background: linear-gradient(#ada9e9, white 300px);
        height: 100vh;
    }
`