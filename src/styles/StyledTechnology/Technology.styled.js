import styled from "styled-components";
import mobileTechnologyBG from "../../assets/technology/background-technology-mobile.jpg";
import tabletTechnologyBG from "../../assets/technology/background-technology-tablet.jpg";
import desktopTechnologyBG from "../../assets/technology/background-technology-desktop.jpg";
import { SectionTitle } from "../globalStyles/Global.styled";

export const StyledTechnology = styled.section`
  overflow: hidden;
  background-image: url(${mobileTechnologyBG});
  background-attachment: fixed;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    background-position: center center;
    background-image: url(${tabletTechnologyBG});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-image: url(${desktopTechnologyBG});
  }
`;

export const TechnologyMain = styled.main`
  & ${SectionTitle} {
    text-align: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      text-align: left;
      padding-left: 1rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding-left: 4rem;
    }
  }

  padding-bottom: 5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: 5rem;
    text-align: left;
    padding-bottom: 0;
  }
`;

export const TechnologyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row-reverse;
    text-align: left;
    gap: 5%;
    align-items: start;
  }
`;

export const TechnologyImageContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 25rem;
    width: 40%;
  }
`;

export const TechnologyDetailsContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    width: 55%;
    margin-top: 2rem;
  }
`;

export const TechnologyImage = styled.div`
  width: 100vw;
  height: 15rem;
  margin: 2rem 0;
  display: ${({ isActive }) => (isActive ? "block" : "none")};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    height: 100%;
    margin: 0 0 0 auto;
  }
`;

export const TechnologyImgMobile = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: inline-block;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const TechnologyImgDesktop = styled.img`
  display: none;
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: inline-block;
  }
`;

export const TechnologyTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin: 0 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;
export const TechnologyTab = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 100%;
  aspect-ratio: 1;
  border: hsl(var(--clr-white) / 35%) 1px solid;
  font-size: 1rem;

  background: ${({ isActive }) =>
    isActive ? "hsl(var(--clr-white) / 1)" : "transparent"};

  color: ${({ isActive }) =>
    isActive ? "hsl(var(--clr-dark))" : "hsl(var(--clr-white) / 1)"};

  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 3rem;
    width: 3rem;
  }
`;

export const TerminologyContainer = styled.div`
  margin-top: 2rem;
`;

export const Terminology = styled.h3`
  font-size: var(--fs-200);
  color: hsl(var(--clr-light));
`;

export const TerminologyTitle = styled.h2`
  font-family: var(--ff-serif);
  font-size: var(--fs-700);
  text-transform: uppercase;
  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;

export const TerminologyDetails = styled.p`
  font-size: var(--fs-300);
  color: hsl(var(--clr-light));
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  max-width: 50ch;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0;
  }
`;
