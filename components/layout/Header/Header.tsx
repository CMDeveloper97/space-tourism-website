import React from "react";
import styled, { useTheme } from "styled-components";
import { HeaderLeft, Navigation } from "./"; 


const HeaderContainer = styled.div<{ themeBreakpoints: TBreakpoints }>`
  height: 10%;
  padding-top: 0rem;
  margin-bottom: 4rem;
 
  @media (min-width: ${(props) => props.themeBreakpoints.medium}) { 
    padding-top: 4rem;
    height: 16%;
    margin-bottom: 0;
  }
`;

const HeaderContent = styled.div<{ themeBreakpoints: TBreakpoints }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  height: 100%;

  @media (min-width: ${(props) => props.themeBreakpoints.medium}) { 
    grid-template-columns: 0.9fr 1.2fr;
  } 
`;

export const Header = () => {
  const theme = useTheme() as TTheme;

  return (
    <HeaderContainer themeBreakpoints={theme.breakpoints}>
      <HeaderContent themeBreakpoints={theme.breakpoints}>
        <HeaderLeft/>
        <Navigation/>
      </HeaderContent>
    </HeaderContainer>
  );
};
