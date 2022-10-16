import React from "react";
import styled from "styled-components";
import { NavLink, Link, useLocation } from "react-router-dom";

const LI = styled.li`
  display: flex;
  height: 100%;
`;

const StyledNavLink = styled(NavLink)`
  padding: 0 2rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  cursor: pointer;
  color: var(--color-grey-light);
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--color-white);
    border-bottom: 1px solid var(--color-white);
  }

  &.active {
    color: var(--color-white);
    border-bottom: 1px solid var(--color-white);
  }
`;

const NavItem = ({ label, link }) => {
  return (
    <LI>
      <StyledNavLink to={link}>{label}</StyledNavLink>{" "}
    </LI>
  );
};

export default NavItem;
