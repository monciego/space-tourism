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

const Destination = () => {
  const [tab, setTab] = useState(0);

  const tabHandler = (index) => {
    setTab(index);
  };

  return (
    <StyledDestination>
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
