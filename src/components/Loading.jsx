import React from "react";
import { Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <div className="fixed top-[50%] right-[50%] z-50">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
      />
    </div>
  );
};

export default Loading;
