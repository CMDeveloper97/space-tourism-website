import React from "react";
import styled from "styled-components";
import { theme } from "../../../../pages/_app";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

type NavElement = {
  route: string;
  index: string;
  title: string;
};

const UL = styled.ul<{ showSidebar: boolean }>`
  padding-left: 3rem;
  padding-top: 10rem;

  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(81px);

  display: flex;
  align-items: center;
  flex-direction: column;

  position: fixed;
  top: 0;

  height: 100%;
  width: 65%;

  transition: right 0.3s ease-in-out;
  right: ${(p) => (p.showSidebar ? "0" : "-65%")};

  @media (min-width: ${theme.breakpoints.md}) {
    position: relative;
    flex-direction: row;
    width: auto;
    padding-left: 2rem;
    padding-top: 0;
    right: 0;

    backdrop-filter: blur(none);
    background: rgba(255, 255, 255, 0.04);
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding-left: 10rem;
  }
`;
const CloseButton = styled.div`
  position: absolute;
  right: 3rem;
  top: 3rem;

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

type MenuProps = {
  setShowSidebar: Function;
  showSidebar: boolean;
};

export const Menu = ({ setShowSidebar, showSidebar }: MenuProps) => {
  return (
    <UL showSidebar={showSidebar}>
      <CloseButton onClick={() => setShowSidebar(false)}>
        <Image
          src="/assets/shared/icon-close.svg"
          alt="Landscape picture"
          width={22}
          height={22}
        />
      </CloseButton>
      <NavElement index="0" title="HOME" route="/" />
      <NavElement index="1" title="DESTINATION" route="/destination" />
      <NavElement index="2" title="CREW" route="/crew" />
      <NavElement index="3" title="TECHNOLOGY" route="/technology" />
    </UL>
  );
};

const NavElement = ({ route, index, title }: NavElement) => {
  const router = useRouter();

  return (
    <Link href={route} passHref>
      <li
        className={`navText navText${
          route === router.pathname ? "--active" : null
        }`}
      >
        <strong>0{index}</strong>
        {title}
      </li>
    </Link>
  );
};
