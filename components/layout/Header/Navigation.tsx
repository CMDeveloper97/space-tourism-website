import React, { useState } from "react";
import Link from "next/link";

import styled from "styled-components";
import { useRouter } from "next/dist/client/router";
import { theme } from "../../../pages/_app";
import Image from "next/image";
import { BurgerButton } from "./Navigation/BurgerButton";
import { Menu } from './Navigation/Menu';
 

export const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>  
      <Menu setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>  
      {!showSidebar && <BurgerButton setShowSidebar={setShowSidebar} />}
    </>
  );
}; 

