import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        /* colors */
        --clr-dark: #0B0D17;
        --clr-light: #D0D6F9;
        --clr-white: #FFFFFF;

        /* font-sizes */
        --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
        --fs-800: 3.5rem;
        --fs-700: 1.5rem;
        --fs-600: 1rem;
        --fs-500: 1rem;
        --fs-400: 0.9375rem;
        --fs-300: 1rem;
        --fs-200: 0.875rem;

        /* fonts */
        --ff-serif: "Bellefair", serif;
        --ff-sans-cond: "Barlow Condensed", sans-serif;
        --ff-sans-normal: "Barlow", sans-serif;

        @media (min-width: ${({ theme }) => theme.breakpoints.md}) { // 560 px
            :root {
                --fs-800: 5rem;
                --fs-700: 2.5rem;
                --fs-600: 1.5rem;
                --fs-500: 1.25rem;
                --fs-400: 1rem;
            }
        }

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) { // 720 px
            :root {
                --fs-800: 6.25rem;
                --fs-700: 3.5rem;
                --fs-600: 2rem;
                --fs-500: 1.75rem;
                --fs-400: 1.125rem;
            }
        }
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        line-height: 1.5;
        min-height: 100vh;
        font-family: var(--ff-sans-normal);
        font-size: var(--fs-400);
        background: var(--clr-dark);
        color: var(--clr-white);
        overflow-x: hidden;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    button {
        font-family: inherit;
    }

    @media (prefers-reduced-motion: reduce) {  
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`;

export default GlobalStyle;
