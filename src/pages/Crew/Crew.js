import React, { useState } from "react";
import {
  SectionImage,
  SectionImageSource,
  SectionImg,
  SectionTitle,
  SectionTitleNum,
} from "../../styles/globalStyles/Global.styled";
import {
  CrewDetails,
  CrewDetailsHeader,
  CrewDotIndicators,
  CrewMain,
  CrewName,
  CrewRole,
  CrewBio,
  DotIndicator,
  StyledCrew,
} from "../../styles/StyledCrew/Crew.styled";
import { crewData } from "./data";
import { Helmet } from "react-helmet";

const Crew = () => {
  const [dot, setDot] = useState(0);

  const dotHandler = (index) => {
    setDot(index);
  };

  return (
    <StyledCrew>
      <Helmet>
        <title>Space Tourism - Crew</title>
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
        <meta property="og:image" content="https://i.ibb.co/Jr3cXcH/crew.png" />
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
          content="https://i.ibb.co/Jr3cXcH/crew.png"
        />
      </Helmet>
      <CrewMain>
        <SectionTitle>
          <SectionTitleNum>02</SectionTitleNum>
          Meet your crew
        </SectionTitle>

        <CrewDotIndicators>
          {crewData.map((crew, index) => {
            return (
              <DotIndicator
                isActive={dot === index ? true : false}
                key={crew.id}
                onClick={() => dotHandler(index)}
              ></DotIndicator>
            );
          })}
        </CrewDotIndicators>

        {crewData.map((crew, index) => {
          return (
            <CrewDetails isActive={dot === index ? true : false} key={crew.id}>
              <CrewDetailsHeader>
                <CrewRole>{crew.role}</CrewRole>
                <CrewName>{crew.name}</CrewName>
              </CrewDetailsHeader>
              <CrewBio>{crew.bio}</CrewBio>
            </CrewDetails>
          );
        })}

        {crewData.map((crew, index) => {
          return (
            <SectionImage isActive={dot === index ? true : false} key={crew.id}>
              <SectionImageSource srcset={crew.images.webp} type="image/webp" />

              <SectionImg src={crew.images.png} alt={crew.name} />
            </SectionImage>
          );
        })}
      </CrewMain>
    </StyledCrew>
  );
};

export default Crew;
