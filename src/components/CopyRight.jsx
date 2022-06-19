import { Divider } from "@chakra-ui/react";
export const CopyRight = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between pt-6 mx-10">
      <div>© Copyright 2022 by Fun And Joy</div>
      <div className="flex flex-row py-2 w-3/4 lg:w-1/4 justify-between font-semibold">
        <span className="cursor-pointer">About Us</span>
        <Divider orientation="vertical" className="border-gray-400" />
        <span className="cursor-pointer">Services</span>
        <Divider orientation="vertical" className="border-gray-400" />
        <span className="cursor-pointer">Privacy</span>
        <Divider orientation="vertical" className="border-gray-400" />
        <span className="cursor-pointer">T&C</span>
      </div>
    </div>
  );
};
