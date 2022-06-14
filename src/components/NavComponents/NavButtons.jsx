import { useState } from "react";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsCartFill } from "react-icons/bs";
import { MdAccountCircle, MdSearch } from "react-icons/md";
import { ServicePopover } from "./ServicePopover";
import { useNavigate } from "react-router-dom";

export const NavButtons = () => {
  const [count, setCount] = useState(0);
  const history = useNavigate();
  const IconWithBadge = () => (
    <div className="flex flex-row relative left-[9px]">
      <BsCartFill size={20} />
      <p className="bg-white text-black text-sm relative bottom-5 right-1 rounded-full w-5 h-5">
        1
      </p>
    </div>
  );

  const IconBtn = (props) => (
    <IconButton
      variant={props.v ? props.v : "ghost"}
      isRound={true}
      colorScheme="green"
      icon={props.Icon}
    />
  );

  const handleCartClick = () => {
    history("/userauth");
  };

  const handleMyProfileClick = () => {
    history("/me");
  };

  return (
    <div className="flex flex-row">
      <div>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<MdSearch size={25} color="grey" />}
          />
          <Input
            focusBorderColor="white"
            className="w-40 xl:w-96 active:bg-white visited:bg-white focus:bg-white focus-visible:bg-white rounded-3xl"
            variant="filled"
            type="text"
            placeholder="Search"
          />
        </InputGroup>
      </div>
      <div className="flex flex-row">
        <div className="hidden lg:flex px-2">
          <ServicePopover />
        </div>
        <div className="hidden lg:flex px-2" onClick={handleCartClick}>
          <IconBtn
            Icon={count !== 0 ? <IconWithBadge /> : <BsCartFill size={20} />}
          />
        </div>
        <div className="px-2" onClick={handleMyProfileClick}>
          <IconBtn
            v="unstyled"
            Icon={
              <MdAccountCircle
                className="stroke-black hover:fill-white"
                size={40}
                color="green"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};
