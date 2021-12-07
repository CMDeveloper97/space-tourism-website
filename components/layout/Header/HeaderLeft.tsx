import React from "react";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import { theme } from "../../../pages/_app";

const HeaderLeftContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3rem;
  padding-top: 2rem;

  @media (min-width: ${theme.breakpoints.md}) {
    padding-left: 5rem;
    padding-top: 0;
  }
`;

const LineDecorator = styled.hr<{ color: string }>`
  width: 90%;
  height: 1px;
  z-index: 2;
  background: ${(props) => props.color};
  border: none;
  margin-right: -3rem;

  display: none;

  @media (min-width: ${theme.breakpoints.lg}) {
    display: block;
  }
`;

export const HeaderLeft = () => {
  const theme = useTheme() as TTheme;

  return (
    <HeaderLeftContainer>
      <Image
        src="/assets/shared/logo.svg"
        alt="Landscape picture"
        width={48}
        height={48}
      />
      <LineDecorator color={theme.colors.primary.dark} />
    </HeaderLeftContainer>
  );
};
