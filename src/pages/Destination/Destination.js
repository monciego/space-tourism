import React, { useState } from "react";
import {
  DestinationMain,
  StyledDestination,
  DestinationTabContainer,
  DestinationTab,
  DestinationDescription,
  DestinationName,
  DestinationDetails,
  DestinationMeta,
  DestinationMetaTitle,
  DestinationContentContainer,
  DestinationMetaSubTitle,
} from "../../styles/StyledDestination/Destination.styled";
import {
  SectionImage,
  SectionImageSource,
  SectionImg,
  SectionTitle,
  SectionTitleNum,
} from "../../styles/globalStyles/Global.styled";
import { dataDestination } from "./data";
import { Helmet } from "react-helmet";
const Destination = () => {
  const [tab, setTab] = useState(0);

  const tabHandler = (index) => {
    setTab(index);
  };

  return (
    <StyledDestination>
      <Helmet>
        <title>Space Tourism - Destination</title>
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
          content="https://i.ibb.co/ZNK1Xn8/destination.png"
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
          content="https://i.ibb.co/ZNK1Xn8/destination.png"
        />
      </Helmet>
      <DestinationMain>
        <SectionTitle>
          <SectionTitleNum>01</SectionTitleNum>
          Pick your destination
        </SectionTitle>

        <DestinationTabContainer>
          {dataDestination.map((destination, index) => {
            return (
              <DestinationTab
                isActive={tab === index ? true : false}
                key={destination.id}
                onClick={() => tabHandler(index)}
              >
                {destination.name}
              </DestinationTab>
            );
          })}
        </DestinationTabContainer>

        {dataDestination.map((destination, index) => {
          return (
            <SectionImage
              isActive={tab === index ? true : false}
              key={destination.id}
            >
              <SectionImageSource
                srcset={destination.images.webp}
                type="image/webp"
              />

              <SectionImg src={destination.images.png} alt={destination.name} />
            </SectionImage>
          );
        })}

        {dataDestination.map((destination, index) => {
          return (
            <DestinationDetails
              isActive={tab === index ? true : false}
              key={destination.id}
            >
              <DestinationName>{destination.name}</DestinationName>
              <DestinationDescription>
                {destination.description}
              </DestinationDescription>

              <DestinationMeta>
                <DestinationContentContainer>
                  <DestinationMetaTitle>AVG. DISTANCE</DestinationMetaTitle>
                  <DestinationMetaSubTitle>
                    {destination.distance}
                  </DestinationMetaSubTitle>
                </DestinationContentContainer>
                <DestinationContentContainer>
                  <DestinationMetaTitle>Est. travel time</DestinationMetaTitle>
                  <DestinationMetaSubTitle>
                    {destination.travel}
                  </DestinationMetaSubTitle>
                </DestinationContentContainer>
              </DestinationMeta>
            </DestinationDetails>
          );
        })}
      </DestinationMain>
    </StyledDestination>
  );
};

export default Destination;
