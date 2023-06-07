import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --black: #000000;
        --gray-900: #1B1B1B;
        --gray-500: #383838;
        --gray-100: #d1d1d1;
        --white: #FFFFFF;
        --aqua: #0FDCB7;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Poppins', sans-serif;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--gray-900);
        color: var(--white);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }
`