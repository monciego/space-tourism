import React, { useState } from "react";
import {
  Logo,
  MenuBtn,
  Navigation,
  NavigationLink,
  NavigationList,
  NavigationLists,
  NavigationNum,
  StyledNavbar,
} from "../../styles/StyledNavbar/Navbar.styled";
import logo from "../../assets/shared/logo.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <StyledNavbar>
      <Logo src={logo} alt="space tourism logo" />
      <MenuBtn toggleMenu={toggleMenu} onClick={toggleHandler}></MenuBtn>
      <Navigation>
        <NavigationLists toggleMenu={toggleMenu}>
          <NavigationList>
            <NavigationLink to="/" onClick={toggleHandler}>
              <NavigationNum>00</NavigationNum>
              Home
            </NavigationLink>
          </NavigationList>
          <NavigationList>
            <NavigationLink to="/destination" onClick={toggleHandler}>
              <NavigationNum>01</NavigationNum>
              Destination
            </NavigationLink>
          </NavigationList>
          <NavigationList>
            <NavigationLink to="/crew" onClick={toggleHandler}>
              <NavigationNum>02</NavigationNum>
              Crew
            </NavigationLink>
          </NavigationList>
          <NavigationList>
            <NavigationLink to="/technology" onClick={toggleHandler}>
              <NavigationNum>03</NavigationNum>
              Technology
            </NavigationLink>
          </NavigationList>
        </NavigationLists>
      </Navigation>
    </StyledNavbar>
  );
};

export default Navbar;
