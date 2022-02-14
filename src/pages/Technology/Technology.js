import React from "react";
import {
  SectionTitle,
  SectionTitleNum,
} from "../../styles/globalStyles/Global.styled";
import {
  StyledTechnology,
  TechnologyContainer,
  TerminologyTitle,
  TechnologyDetailsContainer,
  TechnologyImage,
  TechnologyMain,
  TechnologyTab,
  TechnologyTabs,
  Terminology,
  TerminologyContainer,
  TerminologyDetails,
  TechnologyImageContainer,
  TechnologyImgMobile,
  TechnologyImgDesktop,
} from "../../styles/StyledTechnology/Technology.styled";
import { technologiesData } from "./data";

const Technology = () => {
  const [tab, setTab] = React.useState(0);
  console.log(tab);

  const tabHandler = (index) => {
    setTab(index);
  };

  return (
    <StyledTechnology>
      <TechnologyMain>
        <SectionTitle>
          <SectionTitleNum>03</SectionTitleNum> SPACE LAUNCH 101
        </SectionTitle>

        <TechnologyContainer>
          <TechnologyImageContainer>
            {technologiesData.map((technology, index) => {
              return (
                <TechnologyImage
                  key={technology.id}
                  isActive={tab === index ? true : false}
                >
                  <TechnologyImgMobile
                    src={technology.images.landscape}
                    alt={technology.name}
                  />
                  <TechnologyImgDesktop
                    src={technology.images.portrait}
                    alt={technology.name}
                  />
                </TechnologyImage>
              );
            })}
          </TechnologyImageContainer>
          <TechnologyDetailsContainer>
            <TechnologyTabs>
              {technologiesData.map((technology, index) => {
                return (
                  <TechnologyTab
                    {...technology}
                    isActive={tab === index ? true : false}
                    key={technology.id}
                    onClick={() => tabHandler(index)}
                  >
                    {index + 1}
                  </TechnologyTab>
                );
              })}
            </TechnologyTabs>
            <TerminologyContainer>
              <Terminology>THE TERMINOLOGY…</Terminology>
              {technologiesData.map((technology, index) => {
                return (
                  <TerminologyTitle
                    isActive={tab === index ? true : false}
                    key={technology.id}
                    onClick={() => tabHandler(index)}
                  >
                    {technology.name}
                  </TerminologyTitle>
                );
              })}

              {technologiesData.map((technology, index) => {
                return (
                  <TerminologyDetails
                    isActive={tab === index ? true : false}
                    key={technology.id}
                    onClick={() => tabHandler(index)}
                  >
                    {technology.description}
                  </TerminologyDetails>
                );
              })}
            </TerminologyContainer>
          </TechnologyDetailsContainer>
        </TechnologyContainer>
      </TechnologyMain>
    </StyledTechnology>
  );
};

export default Technology;
