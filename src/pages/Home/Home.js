import React from "react";
import { StyledButton } from "../../components/Button/Button.styled";
import {
  HomeBigText,
  HomeCTA,
  HomeDescription,
  HomeDetails,
  HomeMain,
  HomeTitle,
  StyledHome,
} from "../../styles/styledComponents/StyledHome/Home.styled";

const Home = () => {
  return (
    <StyledHome>
      <HomeMain>
        <HomeDetails>
          <HomeTitle>
            SO, YOU WANT TO TRAVEL TO
            <HomeBigText> SPACE</HomeBigText>
          </HomeTitle>
          <HomeDescription>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </HomeDescription>
        </HomeDetails>
        <HomeCTA>
          <StyledButton>explore</StyledButton>
        </HomeCTA>
      </HomeMain>
    </StyledHome>
  );
};

export default Home;
