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
} from "../../styles/StyledHome/Home.styled";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <StyledHome>
      <Helmet>
        <title>Space Tourism - Home</title>
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
        <meta property="og:image" content="https://i.ibb.co/hHxNCFb/home.png" />
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
          content="https://i.ibb.co/hHxNCFb/home.png"
        />
      </Helmet>
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
          <StyledButton to="/destination">explore</StyledButton>
        </HomeCTA>
      </HomeMain>
    </StyledHome>
  );
};

export default Home;
