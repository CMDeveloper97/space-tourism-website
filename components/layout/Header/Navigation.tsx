import React, { useState } from "react";;
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

