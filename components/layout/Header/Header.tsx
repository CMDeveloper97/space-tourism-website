import React from "react";
import styled, { useTheme } from "styled-components";
import { theme } from "../../../pages/_app";
import { HeaderLeft, Navigation } from "./";

const HeaderContainer = styled.div`
  height: 10%;
  padding-top: 0rem;
  margin-bottom: 4rem;

  @media (min-width: ${theme.breakpoints.md}) {
    padding-top: 4rem;
    height: 16%;
    margin-bottom: 0;
  }
`;

const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  height: 100%;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 0.9fr 1.2fr;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLeft />
        <Navigation />
      </HeaderContent>
    </HeaderContainer>
  );
};
