import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    :root{
            --color-black: ${props=>props.theme.colors.black};
            --color-grey: ${props=>props.theme.colors.grey};
            --color-grey-light: ${props=>props.theme.colors.greyLight};
            --color-grey-lighter: ${props=>props.theme.colors.greyLighter};
            --color-white: ${props=>props.theme.colors.white};
            --color-brown: ${props=>props.theme.colors.brown};
            --color-brown-dark: ${props=>props.theme.colors.brownDark};
            --color-accent: ${props=>props.theme.colors.accent};
            --color-error: ${props=>props.theme.colors.error};
            --color-green-light: ${props=>props.theme.colors.greenLight};
            --color-green-dark: ${props=>props.theme.colors.greenDark};
            --color-green-darker: ${props=>props.theme.colors.greenDarker};
            --color-green-lighter: ${props=>props.theme.colors.greenLighter};
            --color-text: ${props=>props.theme.colors.text};
            --color-text-lighter: ${props=>props.theme.colors.textLighter};
        }

    *{
        margin: 0;
        padding: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html{
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 1.6 ;
        min-height: 100vh;
        background-color: var(--color-grey-lighter);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    a, input, textarea, button{
        outline: none;
        text-decoration: none;
        font-family: inherit;
    }

    ul{
        list-style: none;
    }
`