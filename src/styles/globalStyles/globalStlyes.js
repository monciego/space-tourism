import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        /* colors */
        --clr-dark: 230 35% 7%;
        --clr-light: 231 77% 90%;
        --clr-white: 0 0% 100%;

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
     
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
            font-weight: 400;
        }

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
        font-family: var(--ff-sans-normal);
        font-size: var(--fs-400);
        background: hsl(var(--clr-dark));
        color: hsl(var(--clr-white));
        overflow-x: hidden;
    }

    section {
        line-height: 1.5;
        min-height: 100vh;
        background-size: cover;
        background-position: bottom center;
    }

    main {
        padding-top: 7rem;
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

    /* scrollbar */
    /* width */
    ::-webkit-scrollbar {
    width: 2.25px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #0B0E17; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--clr-light)); 
    }
`;

export default GlobalStyle;
