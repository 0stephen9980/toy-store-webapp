import { createRef, useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Logo } from "../../components/NavComponents/Logo";
import { NavButtons } from "../../components/NavComponents/NavButtons";
import NavMiddleComponent from "../../components/NavComponents/NavMiddleComponent";
import SideBar from "./SideBar";

export const TopNavBar = () => {
  var navref = createRef();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleClick = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div
      ref={navref}
      className="w-full h-[4.5rem] bg-green-400 sticky top-0 z-10"
    >
      <div className="responsive h-full flex flex-row justify-between items-center">
        <div className="flex flex-row justify-center items-center">
          <Logo
            showSideBar={handleClick}
            SideMenuIcon={
              isSideBarOpen ? (
                <MdClose
                  className="text-white hover:text-green-400"
                  size={30}
                />
              ) : (
                <MdMenu className="text-white hover:text-green-400" size={30} />
              )
            }
          />
          <NavMiddleComponent />
        </div>
        <NavButtons />
      </div>
      {isSideBarOpen ? <SideBar /> : null}
    </div>
  );
};
