import styled from "styled-components";
import mobileHomeBG from "../../../assets/home/background-home-mobile.jpg";
import tabletHomeBG from "../../../assets/home/background-home-tablet.jpg";
import desktopHomeBG from "../../../assets/home/background-home-desktop.jpg";

export const StyledHome = styled.section`
  background-image: url(${mobileHomeBG});

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    background-position: center center;
    background-image: url(${tabletHomeBG});
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-image: url(${desktopHomeBG});
  }
`;
