import React from "react";
import Link from "next/link";

import styled, { useTheme } from "styled-components";
import { useRouter } from "next/dist/client/router";

const UL = styled.ul<{ themeBreakpoints: TBreakpoints }>` 
  background: rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  padding-left: 2rem;

  @media (min-width: ${(props) => props.themeBreakpoints.medium}) { 
  	backdrop-filter: blur(81px);
  	padding-left: 10rem;
  }
`; 

export const Navigation = () => {
  const router = useRouter();
  const theme = useTheme() as TTheme; 

  return (
    <UL themeBreakpoints={theme.breakpoints}>
      <Link href="/" passHref>
        <li className="navText navText--active">
          <strong>00</strong> HOME
        </li>
      </Link>
      <Link href="/destination" passHref>
        <li className="navText">
          <strong>01</strong> DESTIONATION
        </li>
      </Link>
      <Link href="/crew" passHref>
        <li className="navText">
          <strong>02</strong> CREW
        </li>
      </Link>
      <Link href="/technology" passHref>
        <li className="navText">
          <strong>03</strong> TECHNOLOGY
        </li>
      </Link>
    </UL>
  );
};
