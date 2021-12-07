import React from "react";
import Link from "next/link";

import styled, { useTheme } from "styled-components";
import { useRouter } from "next/dist/client/router";
import { theme } from "../../../pages/_app";

const UL = styled.ul`  
  display: flex;
  align-items: center;
  padding-left: 2rem;  
  background: rgba(255, 255, 255, 0.04);
 
  @media (min-width: ${theme.breakpoints.lg}) { 
  	padding-left: 10rem; 
    backdrop-filter: blur(81px);
    background: rgba(255, 255, 255, 0.07);
  }
`; 

export const Navigation = () => {

  return (
    <UL>
      <NavElement index="0" title="HOME" route="/" />
      <NavElement index="1" title="DESTINATION" route="/destination" />
      <NavElement index="2" title="CREW" route="/crew" />
      <NavElement index="3" title="TECHNOLOGY" route="/technology" /> 
    </UL>
  );
};

const NavElement = ({route, index, title}: {route: string, index: string, title: string}) => { 
  const router = useRouter();

  return (
    <Link href={route} passHref>
      <li className={`navText navText${route === router.pathname ? "--active" : null}`} >
        <strong>0{index}</strong>{title}
      </li>
    </Link>
  )
}
