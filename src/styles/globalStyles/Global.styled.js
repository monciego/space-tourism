import styled from "styled-components";

export const SectionTitle = styled.h1`
  font-family: var(--ff-sans-cond);
  font-size: var(--fs-500);
  text-transform: uppercase;
  letter-spacing: 4.72px;
  font-weight: 400;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-self: start;
    margin-top: 2rem;
  }
`;

export const SectionTitleNum = styled.span`
  margin-right: 0.5em;
  font-weight: 700;
  color: hsl(var(--clr-white) / 0.25);
`;

export const SectionImage = styled.picture``;

export const SectionImageSource = styled.source`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;

export const SectionImg = styled.img`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;
