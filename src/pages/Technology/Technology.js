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
import { Helmet } from "react-helmet";

const Technology = () => {
  const [tab, setTab] = React.useState(0);

  const tabHandler = (index) => {
    setTab(index);
  };

  return (
    <StyledTechnology>
      <Helmet>
        <title>Space Tourism - Technology</title>
        <meta name="theme-color" content="#0B0D17" />
        <meta
          name="description"
          content="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
        />
        <meta name="author" content="Jericho P. Bantiquete" />
        <meta name="copyright" content="Jericho P. Bantiquete" />
        <meta
          name="keywords"
          content="space tourism, space tour, front-end mentor, space website,  jericho, jericho bantiquete"
        />
        <meta
          property="og:url"
          content="https://spacetourism-monciego.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Space Tourism" />
        <meta
          property="og:description"
          content="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/8z160cB/technology.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@monciego" />
        <meta
          property="twitter:url"
          content="https://spacetourism-monciego.netlify.app/"
        />
        <meta name="twitter:title" content="Space Tourism" />
        <meta
          name="twitter:description"
          content="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/8z160cB/technology.png"
        />
      </Helmet>
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
