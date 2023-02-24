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
import { Radio, RadioGroup } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/products/products.action";

function Filters({ filterHeading, price }) {
  let dispatch = useDispatch();
  let { loading, params } = useSelector((store) => store.ProductsManager);
  const [categorySelected, setCategorySelected] = React.useState([false, ""]);

  const [sub2CategoryParam, setSub2CategoryParam] = useState(
    params.sub2Category
  );
  const [brandParam, setBrandParam] = useState(params.brand);

  const HandleFilterHeading = (category) => {
    params.category = category;
    setCategorySelected([true, category]);
    dispatch(getProducts(params));
  };
  const handleChange = (name) => {
    params.sub2Category = {
      ...sub2CategoryParam,
      [name]: !sub2CategoryParam[name],
    };
    setSub2CategoryParam({
      ...sub2CategoryParam,
      [name]: !sub2CategoryParam[name],
    });
    dispatch(getProducts(params));
  };
  const handleBrandParamChange = (name) => {
    params.brand = { ...brandParam, [name]: !brandParam[name] };
    setBrandParam({ ...brandParam, [name]: !brandParam[name] });
    dispatch(getProducts(params));
  };

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
      {categorySelected[0] === false
        ? filterHeading &&
          filterHeading.map((e, i) => (
            <Box maxH="400px" overflowY="scroll" w="full" key={i}>
              <Accordion flex="1" allowToggle>
                <AccordionItem>
                  <h2>
                    <Box key={i} as="span" flex="1" textAlign="left">
                      <Flex>
                        <Text
                          _hover={{ color: "#0076be", fontWeight: "black" }}
                          cursor={"pointer"}
                          fontWeight={"bold"}
                          onClick={() => {
                            HandleFilterHeading(e[0]);
                          }}>
                          {e[0]}
                        </Text>
                      </Flex>
                    </Box>
                  </h2>
                </AccordionItem>
              </Accordion>
            </Box>
          ))
        : filterHeading &&
          filterHeading.map((e, i) => {
            if (e[0] === categorySelected[1]) {
              return (
                <>
                  <Box maxH="400px" overflowY="scroll" w="full" key={i}>
                    <Accordion flex="1" allowToggle>
                      <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box key={i} as="span" flex="1" textAlign="left">
                              <Flex>
                                <Text fontWeight={"bold"}>{e[0]}</Text>
                              </Flex>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        {Object.entries(e[1][0]).map(([name, quantity]) => (
                          <Box key={name} pl="15px">
                            {" "}
                            <AccordionPanel p="5px">
                              <Stack direction="col">
                                <Checkbox
                                  _hover={{
                                    color: "#0076be",
                                    fontWeight: "bold",
                                  }}
                                  w="full"
                                  isChecked={sub2CategoryParam[name]}
                                  onChange={() => handleChange(name)}>
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

                  {/* Category 2 by brands */}
                  <Box maxH="400px" overflowY="scroll" w="full">
                    <Accordion flex="1" allowToggle>
                      <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              fontWeight={"bold"}>
                              {""}
                              Brands
                              {""}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        {Object.entries(e[1][1]).map(([name, quantity]) => (
                          <Box key={name} pl="15px">
                            {" "}
                            <AccordionPanel p="5px">
                              <Stack direction="col">
                                <Checkbox
                                  _hover={{
                                    color: "#0076be",
                                    fontWeight: "bold",
                                  }}
                                  w="full"
                                  isChecked={brandParam[name]}
                                  onChange={() => handleBrandParamChange(name)}>
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
                </>
              );
            } else {
              return null;
            }
          })}

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
                      <Text
                        _hover={{ color: "#0076be", fontWeight: "bold" }}
                        cursor={"pointer"}
                        onClick={() => {
                          params.discounted_price_gt = e.discounted_price_gt;
                          params.discounted_price_lt = e.discounted_price_lt;

                          dispatch(getProducts(params));
                        }}
                        fontWeight={"medium"}>
                        {e.title}
                      </Text>
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
