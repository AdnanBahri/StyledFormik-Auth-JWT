import React from "react";
import styled from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Logo from "../../UI/Logo/Logo";
import NavItem from "./NavItem/NavItem";

const MainWrapper = styled.div`
  width: 100%;
  height: 7rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-black);

  @media ${(props) => props.theme.mediaQueries.small} {
    display: none;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 120rem;
  height: 100%;
  margin: 0 auto;
  padding: 0 4rem;
`;

const UL = styled.ul`
  display: flex;
  flex-direction: row;
`;

const loggedOutNavs = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "Login",
    link: "login",
  },
  {
    id: 3,
    label: "Sign up",
    link: "register",
  },
];

const loggedInNavs = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "Logout",
    link: "logout",
  },
];

const Navbar = () => {
  const { isLoggedIn, access, refresh } = useAuth();
  return (
    <MainWrapper>
      <StyledNav>
        <Logo>Formik</Logo>
        <UL>
          {(!isLoggedIn || !access || !refresh) &&
            loggedOutNavs.map((item) => (
              <NavItem key={item.id} label={item.label} link={item.link} />
            ))}
          {isLoggedIn &&
            access &&
            refresh &&
            loggedInNavs.map((item) => (
              <NavItem key={item.id} label={item.label} link={item.link} />
            ))}
        </UL>
      </StyledNav>
    </MainWrapper>
  );
};

export default Navbar;
