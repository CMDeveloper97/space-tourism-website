import React from "react";
import styled, { useTheme } from "styled-components";
import Image from "next/image";

const HeaderLeftContainer = styled.div<{ themeBreakpoints: TBreakpoints }>`
  display: flex;
  align-items: center;
  padding-left: 5rem;
`;

const LineDecorator = styled.hr<{
  color: string;
  themeBreakpoints: TBreakpoints;
}>`
  width: 90%;
  height: 1px;
  z-index: 2;
  background: ${(props) => props.color};
  border: none;
  margin-right: -3rem;

  display: none;

  @media (min-width: ${(props) => props.themeBreakpoints.medium}) {
    display: block;
  }
`;

export const HeaderLeft = () => {
  const theme = useTheme() as TTheme;

  return (
    <HeaderLeftContainer themeBreakpoints={theme.breakpoints}>
      <Image
        src="/assets/shared/logo.svg"
        alt="Landscape picture"
        width={48}
        height={48}
      />
      <LineDecorator
        color={theme.colors.primary.dark}
        themeBreakpoints={theme.breakpoints}
      />
    </HeaderLeftContainer>
  );
};
