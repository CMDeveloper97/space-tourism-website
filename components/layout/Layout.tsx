import React from "react";
import { Header } from "./Header/Header";
import { Seo } from "../";
import styled, { useTheme } from "styled-components";   

type LayoutProps = {
  children?: React.ReactNode;
  title: string;
  bgImageList: TBgImageList;
};

type TWrapper = {
  bgImageList: TBgImageList; 
  themeBreakpoints: TBreakpoints;
};

const Wrapper = styled.div<TWrapper>`
  @media (max-width: ${(props) => props.themeBreakpoints.small}) { 
    background: url(${(props) => props.bgImageList.mobile}) no-repeat center;
  } 

  @media (min-width: ${(props) => props.themeBreakpoints.small} ) and  
  (max-width: ${(props) => props.themeBreakpoints.medium} ) {  
    background: url(${(props) => props.bgImageList.tablet}) no-repeat bottom;
  }  
  @media (min-width: ${(props) => props.themeBreakpoints.medium} ) {
    background: url(${(props) => props.bgImageList.desktop}) no-repeat bottom;
  } 

  background-size: cover !important;
  height: 100vh;
  transition: background 0.1s ease-in-out;
`;

export const Layout = ({ children, title, bgImageList }: LayoutProps) => {
  const theme = useTheme() as TTheme;

  return (
    <>
      <Seo title={title} />
      <Wrapper bgImageList={bgImageList} themeBreakpoints={theme.breakpoints}>
        <Header />
        <div className="content-wrapper">{children}</div>
      </Wrapper>
    </>
  );
};
