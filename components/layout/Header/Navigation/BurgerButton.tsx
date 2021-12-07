import React from "react";
import styled from "styled-components";
import { theme } from "../../../../pages/_app";
import Image from "next/image";

export const BurgerButton = ({setShowSidebar}: {setShowSidebar: Function}) => {
  const BurgerButtonContainer = styled.div`
    position: absolute;
    right: 3rem;
    top: 3rem;

    @media (min-width: ${theme.breakpoints.md}) {
      display: none;
    }
  `;
  return (
    <BurgerButtonContainer onClick={() => setShowSidebar(true)}>
      <Image
        src="/assets/shared/icon-hamburger.svg"
        alt="Landscape picture"
        width={25}
        height={25}
      />
    </BurgerButtonContainer>
  );
};
