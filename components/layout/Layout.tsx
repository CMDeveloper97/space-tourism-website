import React from "react";
import { Header } from "./Header/Header";
import { Seo } from "../";
import styled from "styled-components";    
import { theme } from "../../pages/_app"; 
import { PageHeader } from '../shared/PageHeader';

type LayoutProps = {
  children?: React.ReactNode;
  title: string;
  bgImageList: TBgImageList;
};

type TWrapper = {
  bgImageList: TBgImageList;  
};

const Wrapper = styled.div<TWrapper>`
  /* overflow: scroll;  */ 

  @media (max-width: ${theme.breakpoints.md}) { 
    background: url(${(props) => props.bgImageList.mobile}) no-repeat center;
  }  
  @media (min-width: ${theme.breakpoints.md} ) and (max-width: ${theme.breakpoints.lg})  {  
    background: url(${(props) => props.bgImageList.tablet}) no-repeat bottom;
  }  
  @media (min-width: ${theme.breakpoints.lg} ) {
    background: url(${(props) => props.bgImageList.desktop}) no-repeat bottom;
  } 

  background-size: cover !important; 
  transition: background 0.1s ease-in-out; 
  height: 100vh; 
`;

export const Layout = ({ children, title, bgImageList }: LayoutProps) => {   
  return (
    <>
      <Seo title={title} />
      <Wrapper bgImageList={bgImageList}>
        <Header />
        <div className={`content-wrapper ${title === 'Home' && "home"}`}> 
          {title !== 'Home' &&  <PageHeader number="1" text="Pick your destination" /> }
          {children}
        </div>
      </Wrapper>
    </>
  );
};
