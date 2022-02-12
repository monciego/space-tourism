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
  console.log(tab);

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

        <SectionImage>
          {dataDestination.map((destination, index) => {
            return (
              <SectionImageSource
                isActive={tab === index ? true : false}
                key={destination.id}
                srcset={destination.images.webp}
                type="image/webp"
              />
            );
          })}

          {dataDestination.map((destination, index) => {
            return (
              <SectionImg
                isActive={tab === index ? true : false}
                key={destination.id}
                src={destination.images.png}
                alt={destination.name}
              ></SectionImg>
            );
          })}
        </SectionImage>

        <DestinationDetails>
          {dataDestination.map((destination, index) => {
            return (
              <DestinationName
                isActive={tab === index ? true : false}
                key={destination.id}
              >
                {destination.name}
              </DestinationName>
            );
          })}

          {dataDestination.map((destination, index) => {
            return (
              <DestinationDescription
                isActive={tab === index ? true : false}
                key={destination.id}
              >
                {destination.description}
              </DestinationDescription>
            );
          })}

          <DestinationMeta>
            <DestinationContentContainer>
              <DestinationMetaTitle>AVG. DISTANCE</DestinationMetaTitle>
              {dataDestination.map((destination, index) => {
                return (
                  <DestinationMetaSubTitle
                    isActive={tab === index ? true : false}
                    key={destination.id}
                  >
                    {destination.distance}
                  </DestinationMetaSubTitle>
                );
              })}
              <DestinationMetaSubTitle>225 MIL. km</DestinationMetaSubTitle>
            </DestinationContentContainer>

            <DestinationContentContainer>
              <DestinationMetaTitle>Est. travel time</DestinationMetaTitle>

              {dataDestination.map((destination, index) => {
                return (
                  <DestinationMetaSubTitle
                    isActive={tab === index ? true : false}
                    key={destination.id}
                  >
                    {destination.travel}
                  </DestinationMetaSubTitle>
                );
              })}
            </DestinationContentContainer>
          </DestinationMeta>
        </DestinationDetails>
      </DestinationMain>
    </StyledDestination>
  );
};

export default Destination;
