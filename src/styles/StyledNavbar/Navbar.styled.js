import styled from "styled-components";
import { NavLink } from "react-router-dom";
import menuBtn from "../../assets/shared/icon-hamburger.svg";
import closeBtn from "../../assets/shared/icon-close.svg";

export const StyledNavbar = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    &::after {
      content: "";
      display: block;
      position: relative;
      height: 0.0625rem;
      width: 100%;
      margin-right: -2.5rem;
      background: hsl(var(--clr-white) / 0.35);
      order: 1;
    }
  }
`;

export const Logo = styled.img`
  margin: 2.25rem clamp(1.5rem, 5vw, 3.5rem);
`;

export const Navigation = styled.nav`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
  }
`;

export const NavigationLists = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  background: hsl(var(--clr-white) / 0.05);
  backdrop-filter: blur(1.25rem);

  & > * {
    border: 0;
    border-bottom: 0.15rem solid hsl(var(--clr-white) / 0);
    background-color: transparent;
    padding: var(--underline-gap, 0.5rem) 0;
  }

  & > *:hover {
    border-color: hsl(var(--clr-white) / 0.5);
  }

  @supports (backdrop-filter: blur(1.5rem)) {
    background: hsl(var(--clr-white) / 0.05);
    backdrop-filter: blur(1.25rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 2em;
    position: fixed;
    inset: 0 0 0 30%;
    flex-direction: column;
    padding: min(20rem, 20vh) 2rem;
    background: hsl(var(--clr-white) / 0.05);
    backdrop-filter: blur(1.25rem);
    transform: translateX(${(props) => (props.toggleMenu ? "0" : "100%")});
    transition: transform 0.35s ease-in-out;
    z-index: 999;

    & > * {
      border: none;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: clamp(1.5rem, 5vw, 2.5rem);
    --underline-gap: 1.75rem;
    padding-inline: clamp(3rem, 7vw, 10rem);
  }
`;

export const NavigationList = styled.li``;

export const NavigationNum = styled.span`
  font-weight: 700;
  margin-right: 0.5em;

  @media (min-width: 35em) and (max-width: 44.999em) {
    display: none;
  }

  @media (min-width: 35em) and (max-width: 55em) {
    display: none;
  }
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  font-family: var(--ff-sans-cond);
  padding: var(--underline-gap, 0.5rem) 0;

  &.active {
    color: hsl(var(--clr-white) / 1);
    border-bottom: 0.15rem solid hsl(var(--clr-white) / 1);
  }
`;

export const MenuBtn = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: absolute;
    z-index: 2000;
    right: 2rem;
    top: 3rem;
    background: transparent;
    background-image: ${({ toggleMenu }) =>
      toggleMenu ? `url(${closeBtn})` : `url(${menuBtn})`};
    background-repeat: no-repeat;
    background-position: center;
    width: 1.5rem;
    aspect-ratio: 1;
    border: 0;
    cursor: pointer;
  }
`;
