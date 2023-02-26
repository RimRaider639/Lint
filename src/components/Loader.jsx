import React from "react";
import { Flex, Spinner, useColorModeValue } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Flex justify="center" align="center" w="100%" h="100%">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color={"#0076be"}
        size="xl"
      />
    </Flex>
  );
};

export default Loader;
