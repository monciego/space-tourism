import styled from "styled-components";
import mobileDestinationBG from "../../assets/destination/background-destination-mobile.jpg";
import tabletDestinationBG from "../../assets/destination/background-destination-tablet.jpg";
import desktopDestinationBG from "../../assets/destination/background-destination-desktop.jpg";

import { SectionTitle, SectionImage } from "../globalStyles/Global.styled";

export const StyledDestination = styled.section`
  overflow: hidden;
  background-image: url(${mobileDestinationBG});
  background-attachment: fixed;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    background-position: center center;
    background-image: url(${tabletDestinationBG});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-image: url(${desktopDestinationBG});
  }
`;

export const DestinationTabContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & > * {
    border: 0;
    border-bottom: 0.15rem solid hsl(var(--clr-white) / 0);
    background-color: transparent;
    padding: var(--underline-gap, 0.5rem) 0;
    cursor: pointer;
  }

  & > *:hover {
    border-color: hsl(var(--clr-white) / 0.5);
  }
`;

export const DestinationTab = styled.button`
  text-transform: uppercase;
  color: hsl(var(--clr-light));
  font-family: var(--ff-sans-cond);
  letter-spacing: 2.7px;
  color: ${({ isActive }) => (isActive ? "hsl(var(--clr-white) / 1)" : "none")};
  border-bottom: 0.15rem solid
    ${({ isActive }) => (isActive ? "hsl(var(--clr-white) / 1)" : "none")};
`;

export const DestinationDetails = styled.article``;

export const DestinationName = styled.h2`
  font-size: var(--fs-800);
  font-family: var(--ff-serif);
  text-transform: uppercase;
  color: hsl(var(--clr-white));
  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;

export const DestinationDescription = styled.p`
  font-size: var(--fs-300);
  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;

export const DestinationMeta = styled.div`
  display: flex;
  gap: 1.75rem;
  flex-direction: column;
  border-top: 1px solid hsl(var(--clr-white) / 0.1);
  padding-top: 2.5rem;
  margin-top: 2.5rem;
  padding-bottom: 2.75rem;

  & p {
    font-size: 1.75rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: min(6vw, 9rem);
    justify-content: start;
  }
`;

export const DestinationContentContainer = styled.div``;

export const DestinationMetaTitle = styled.h3`
  color: hsl(var(--clr-light));
  font-size: var(--fs-200);
  text-transform: uppercase;
`;

export const DestinationMetaSubTitle = styled.p`
  font-family: var(--ff-serif);
  text-transform: uppercase;
  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;

// main
export const DestinationMain = styled.main`
  --flow-space: 2rem;
  text-align: center;
  display: grid;
  place-items: center;
  padding-inline: 1rem;
  min-height: 100vh;
  grid-template-areas:
    "title"
    "image"
    "tabs"
    "content";

  & > p {
    max-width: 50ch;
  }

  & > ${SectionImage} {
    grid-area: image;
    max-width: 60%;
    align-self: start;
  }

  & > ${DestinationTabContainer} {
    grid-area: tabs;
  }

  & > ${SectionTitle} {
    grid-area: title;
  }

  & > ${DestinationDetails} {
    grid-area: content;
  }

  & > *:where(:not(:first-child)) {
    margin-top: var(--flow-space, 1rem);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: left;
    column-gap: 2rem;
    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(
        1rem,
        1fr
      );
    justify-items: start;
    align-content: start;
    grid-template-areas:
      ". title title ."
      ". image tabs ."
      ". image content .";
    padding-bottom: 2.75rem;

    & > ${SectionImage} {
      max-width: 90%;
    }
  }
`;
