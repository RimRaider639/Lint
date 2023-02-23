import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Checkbox } from "@chakra-ui/checkbox";
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import React from "react";

function Filters({ filterHeading, filterBrands, price }) {
  return (
    <VStack p="10px">
      <Flex w="full">
        <Heading
          fontWeight={"medium"}
          fontSize={{ base: "30px", sm: "30px", md: "30px", lg: "35px" }}>
          Filters
        </Heading>
      </Flex>
      <Divider borderColor={"black"} />
      {/* Category 1 */}

      {filterHeading &&
        filterHeading.map((e, i) => (
          <Box maxH="400px" overflowY="scroll" w="full" key={i}>
            <Accordion flex="1" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box key={i} as="span" flex="1" textAlign="left">
                      <Flex>
                        <Text fontWeight={"bold"}>{e[0]}</Text>
                        {/* <Text color={"gray"}>({e[1].length})</Text> */}
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                {Object.entries(e[1]).map(([name, quantity]) => (
                  <Box key={name} pl="15px">
                    {" "}
                    <AccordionPanel p="5px">
                      <Stack direction="col">
                        <Checkbox w="full">
                          <HStack w="full">
                            <Text fontWeight={"medium"}>{name}</Text>
                            <Text color={"gray"}>({quantity})</Text>
                          </HStack>
                        </Checkbox>
                      </Stack>
                    </AccordionPanel>
                  </Box>
                ))}
              </AccordionItem>
            </Accordion>
          </Box>
        ))}

      {/* Category 2 by brands */}
      <Box maxH="400px" overflowY="scroll" w="full">
        <Accordion flex="1" allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                  {""}
                  Brands
                  {""}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            {filterBrands &&
              filterBrands.map((e, i) => (
                <Box key={i} pl="15px">
                  {" "}
                  <AccordionPanel p="5px">
                    <Stack direction="col">
                      <Checkbox w="full">
                        <HStack w="full">
                          <Text fontWeight={"medium"}>{e[0]}</Text>
                          <Text color={"gray"}>({e[1]})</Text>
                        </HStack>
                      </Checkbox>
                    </Stack>
                  </AccordionPanel>
                </Box>
              ))}
          </AccordionItem>
        </Accordion>
      </Box>
      {/* Category 3 by Price Range */}
      <Box maxH="400px" overflowY="scroll" w="full">
        <Accordion flex="1" allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                  {""}
                  Price
                  {""}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            {price &&
              price.map((e, i) => (
                <Box key={i}>
                  {" "}
                  <AccordionPanel mb={-3}>
                    <HStack borderBottom={"1px solid black"}>
                      <Text fontWeight={"medium"}>{e}</Text>
                      {/* <Text color={"gray"}>({e[1]})</Text> */}
                    </HStack>
                  </AccordionPanel>
                </Box>
              ))}
          </AccordionItem>
        </Accordion>
      </Box>
    </VStack>
  );
}

export default Filters;
