import styled from "styled-components";
import mobileHomeBG from "../../../assets/home/background-home-mobile.jpg";
import tabletHomeBG from "../../../assets/home/background-home-tablet.jpg";
import desktopHomeBG from "../../../assets/home/background-home-desktop.jpg";

export const StyledHome = styled.section`
  overflow: hidden;
  background-image: url(${mobileHomeBG});

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    background-position: center center;
    background-image: url(${tabletHomeBG});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-image: url(${desktopHomeBG});
  }
`;

export const HomeMain = styled.main`
  text-align: center;
  display: grid;
  place-items: center;
  padding-inline: 1rem;
  min-height: 100vh;

  & > p:not([class]) {
    max-width: 50ch;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: left;
    column-gap: var(--container-gap, 2rem);
    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(
        1rem,
        1fr
      );
    padding-bottom: max(6rem, 20vh);
    align-items: end;

    & > *:first-child {
      grid-column: 2;
    }

    & > *:last-child {
      grid-column: 3;
    }
  }
`;

export const HomeDetails = styled.div``;

export const HomeCTA = styled.div``;

export const HomeTitle = styled.h1`
  color: hsl(var(--clr-light));
  font-size: var(--fs-500);
  text-transform: uppercase;
  font-family: var(--ff-sans-cond);
  letter-spacing: 4.75px;
  font-weight: 400;
`;

export const HomeBigText = styled.span`
  display: block;
  font-size: var(--fs-900);
  font-family: var(--ff-serif);
  color: hsl(var(--clr-white));
`;

export const HomeDescription = styled.p``;
