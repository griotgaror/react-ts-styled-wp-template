import { assets } from '@/utils/assets';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: font;
        src: url(${assets.font});
    }

    *,
    *::before,
    *::after {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        user-select: none;
        font-family: font;
        font-size: 16px;
        line-height: 1.2;
        color: ${({ theme }) => theme.colors.txt};
        scroll-behavior: smooth;
        transition: background 0.2s ease-in;
    }
    
    html, body, #app {
        background-color: ${({ theme }) => theme.colorMode.bgPrimary};
        height: 100dvh;
        width: 100vw;
    }

    #app {
        display: grid;
    }

    /* Stile, die nur für nicht-WebKit-basierte Browser gelten */
    @media all and (min--moz-device-pixel-ratio:0) {
        * {
            scrollbar-color: ${({ theme }) =>
                theme.colorMode.detailColor2} transparent;
        }
    }
    
    ::-webkit-scrollbar, ::-webkit-scrollbar-track {
        background-color: transparent;
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colorMode.detailColor2};
        border-radius: 20px;
        -webkit-border-radius: 20px;
    }

    /* remove the blue highlight color on mobile tap */
    * {
        -webkit-tap-highlight-color: transparent; 
    }

    ul, ol, li {
        list-style: none;
    }

    input, button {
        border: none;
        outline: none;
    }

    button, 
    button > *, 
    a, 
    a > * {
        text-decoration: none;
        cursor: pointer;
    }
`;
