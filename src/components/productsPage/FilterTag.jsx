import { HStack } from "@chakra-ui/layout";
import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/tag";
import React from "react";

const FilterTag = ({ title }) => {
  return (
    <HStack spacing={4}>
      <Tag size={"md"} borderRadius="full" variant="outline" colorScheme="blue">
        <TagLabel>{title}</TagLabel>
        <TagCloseButton />
      </Tag>
    </HStack>
  );
};

export default FilterTag;
