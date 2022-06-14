import { createRef, useEffect, useState } from "react";
import { Logo } from "../../components/NavComponents/Logo";
import { NavButtons } from "../../components/NavComponents/NavButtons";
import NavMiddleComponent from "../../components/NavComponents/NavMiddleComponent";

export const TopNavBar = () => {
  var navref = createRef();

  const handleClick = () => {};
  return (
    <div
      ref={navref}
      className="w-full h-[4.5rem] bg-green-400 sticky top-0 z-10"
    >
      <div className="responsive h-full flex flex-row justify-between items-center">
        <div className="flex flex-row justify-center items-center">
          <Logo />
          <NavMiddleComponent />
        </div>
        <NavButtons />
      </div>
    </div>
  );
};
