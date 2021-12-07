import React from "react";
import { Header } from "./Header/Header";
import { Seo } from "../";
import styled from "styled-components";    
import { theme } from "../../pages/_app"; 

type LayoutProps = {
  children?: React.ReactNode;
  title: string;
  bgImageList: TBgImageList;
};

type TWrapper = {
  bgImageList: TBgImageList;  
};

const Wrapper = styled.div<TWrapper>`
  @media (max-width: ${theme.breakpoints.sm}) { 
    background: url(${(props) => props.bgImageList.mobile}) no-repeat center;
  }  
  @media (min-width: ${theme.breakpoints.sm} ) and (max-width: ${theme.breakpoints.md})  {  
    background: url(${(props) => props.bgImageList.tablet}) no-repeat bottom;
  }  
  @media (min-width: ${theme.breakpoints.md} ) {
    background: url(${(props) => props.bgImageList.desktop}) no-repeat bottom;
  } 

  background-size: cover !important;
  height: 100vh;
  transition: background 0.1s ease-in-out;
`;

export const Layout = ({ children, title, bgImageList }: LayoutProps) => {   
  return (
    <>
      <Seo title={title} />
      <Wrapper bgImageList={bgImageList}>
        <Header />
        <div className="content-wrapper">{children}</div>
      </Wrapper>
    </>
  );
};
