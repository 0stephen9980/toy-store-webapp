import { IconButton } from "@chakra-ui/react";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
export const Logo = ({ showSideBar, SideMenuIcon }) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <IconButton
        className="mr-4 lg:mr-0 lg:hidden"
        variant="ghost"
        isRound={true}
        colorScheme="green"
        icon={SideMenuIcon}
        onClick={() => showSideBar()}
      />

      <Link to="/">
        <img
          className="w-10 h-10 rounded-full cursor-pointer"
          src={require("../../assets/Logo.png")}
          alt="Play with joy"
          title="Play With Joy"
        />
      </Link>
    </div>
  );
};
