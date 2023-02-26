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
import { useLocation, useNavigate, useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearParams, getProducts } from "../../redux/products/products.action";
import Loader from "../Loader";
import PriceRadio from "./priceRadio";
import { Button } from "@chakra-ui/react";

function Filters({ filterHeading, price, handleGoBack }) {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { path } = useParams();
  let { loading, params } = useSelector((store) => store.ProductsManager);
  console.log("params in filters", params);

  const [categorySelected, setCategorySelected] = React.useState(
    params.category === "" ? [] : [params.category]
  );

  const [sub2CategoryParam, setSub2CategoryParam] = useState(
    params.sub2Category
  );

  const [brandParam, setBrandParam] = useState(params.brand);

  const HandleFilterHeading = (category) => {
    params.category = category;
    const path = `${location.pathname}/${category}`;

    navigate(path);
    setCategorySelected([category]);
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

  // when users select multiple brand
  const handleBrandParamChange = (name) => {
    params.brand = { ...brandParam, [name]: !brandParam[name] };
    setBrandParam({ ...brandParam, [name]: !brandParam[name] });
    dispatch(getProducts(params));
  };

  // to clear all params
  const HandleCLearParams = () => {
    navigate(`/products/${path}`);

    dispatch(clearParams(path));
  };
  if (loading) {
    return (
      <Box pt={"23%"} pb="15%">
        <Loader />
      </Box>
    );
  } else {
    return (
      <VStack p="10px">
        <Flex w="full" justifyContent={"space-around"}>
          <Heading
            fontWeight={"medium"}
            fontSize={{ base: "18px", sm: "20px", md: "25px", lg: "35px" }}>
            Filters
          </Heading>
          <Button
            mr="2%"
            onClick={handleGoBack}
            fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}>
            Go Back
          </Button>
        </Flex>
        <Divider borderColor={"black"} />
        {/* Category 1 */}
        {categorySelected.length === 0
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
              if (e[0] === categorySelected[0]) {
                return (
                  <>
                    <Box maxH="400px" overflowY="scroll" w="full" key={i}>
                      <Accordion
                        flex="1"
                        allowToggle
                        defaultIndex={
                          params.sub2Category &&
                          Object.keys(params.sub2Category).length > 0 &&
                          params.brand &&
                          Object.keys(params.brand).length > 0
                            ? [0, 1] // both sub2Category and brand objects are present
                            : params.sub2Category &&
                              Object.keys(params.sub2Category).length > 0
                            ? [0] // only sub2Category object is present
                            : params.brand &&
                              Object.keys(params.brand).length > 0
                            ? [1] // only brand object is present
                            : [] // both sub2Category and brand objects are not present
                        }>
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

                          {Object.entries(e[1][1]).map(
                            ([name, [quantity, minPrice, maxPrice]]) => (
                              <Box key={name} pl="15px">
                                {" "}
                                {/* for no price selection */}
                                {params.discounted_price_gt == null &&
                                params.discounted_price_lt === null ? (
                                  <>
                                    <AccordionPanel p="5px">
                                      <Stack direction="col">
                                        <Checkbox
                                          _hover={{
                                            color: "#0076be",
                                            fontWeight: "bold",
                                          }}
                                          w="full"
                                          isChecked={brandParam[name]}
                                          onChange={() =>
                                            handleBrandParamChange(name)
                                          }>
                                          <HStack w="full">
                                            <Text fontWeight={"medium"}>
                                              {name}
                                            </Text>
                                            <Text color={"gray"}>
                                              ({quantity})
                                            </Text>
                                          </HStack>
                                        </Checkbox>
                                      </Stack>
                                    </AccordionPanel>
                                  </>
                                ) : (
                                  ""
                                )}
                                {/* 2nd */}
                                {/* for title: "Under Rs.499",discounted_price_gt: null,discounted_price_lt: "499", */}
                                {params.discounted_price_gt == null &&
                                params.discounted_price_lt === "499"
                                  ? minPrice < "499" && (
                                      <>
                                        <AccordionPanel p="5px">
                                          <Stack direction="col">
                                            <Checkbox
                                              _hover={{
                                                color: "#0076be",
                                                fontWeight: "bold",
                                              }}
                                              w="full"
                                              isChecked={brandParam[name]}
                                              onChange={() =>
                                                handleBrandParamChange(name)
                                              }>
                                              <HStack w="full">
                                                <Text fontWeight={"medium"}>
                                                  {name}
                                                </Text>
                                                <Text color={"gray"}>
                                                  ({quantity})
                                                </Text>
                                              </HStack>
                                            </Checkbox>
                                          </Stack>
                                        </AccordionPanel>
                                      </>
                                    )
                                  : ""}
                                {/* 3rd */}
                                {/*   title: "Rs.500 to Rs.999",
    discounted_price_gt: "500",
    discounted_price_lt: "999", */}
                                {params.discounted_price_gt === "500" &&
                                params.discounted_price_lt === "999"
                                  ? minPrice >= "500" &&
                                    maxPrice <= "999" && (
                                      <>
                                        <AccordionPanel p="5px">
                                          <Stack direction="col">
                                            <Checkbox
                                              _hover={{
                                                color: "#0076be",
                                                fontWeight: "bold",
                                              }}
                                              w="full"
                                              isChecked={brandParam[name]}
                                              onChange={() =>
                                                handleBrandParamChange(name)
                                              }>
                                              <HStack w="full">
                                                <Text fontWeight={"medium"}>
                                                  {name}
                                                </Text>
                                                <Text color={"gray"}>
                                                  ({quantity})
                                                </Text>
                                              </HStack>
                                            </Checkbox>
                                          </Stack>
                                        </AccordionPanel>
                                      </>
                                    )
                                  : ""}
                                {/* 4th */}
                                {/* for     title: "Rs.1000 to Rs.1499",
    discounted_price_gt: "1000",
    discounted_price_lt: "1499", */}
                                {params.discounted_price_gt === "1000" &&
                                params.discounted_price_lt === "1499"
                                  ? minPrice >= "1000" &&
                                    maxPrice <= "1499" && (
                                      <>
                                        <AccordionPanel p="5px">
                                          <Stack direction="col">
                                            <Checkbox
                                              _hover={{
                                                color: "#0076be",
                                                fontWeight: "bold",
                                              }}
                                              w="full"
                                              isChecked={brandParam[name]}
                                              onChange={() =>
                                                handleBrandParamChange(name)
                                              }>
                                              <HStack w="full">
                                                <Text fontWeight={"medium"}>
                                                  {name}
                                                </Text>
                                                <Text color={"gray"}>
                                                  ({quantity})
                                                </Text>
                                              </HStack>
                                            </Checkbox>
                                          </Stack>
                                        </AccordionPanel>
                                      </>
                                    )
                                  : ""}
                                {/* 4th */}
                                {/* for         title: "Above Rs.1500",
    discounted_price_gt: "1500",
    discounted_price_lt: null, */}
                                {params.discounted_price_gt === "1500" &&
                                params.discounted_price_lt === "null"
                                  ? minPrice >= "1500" && (
                                      <>
                                        <AccordionPanel p="5px">
                                          <Stack direction="col">
                                            <Checkbox
                                              _hover={{
                                                color: "#0076be",
                                                fontWeight: "bold",
                                              }}
                                              w="full"
                                              isChecked={brandParam[name]}
                                              onChange={() =>
                                                handleBrandParamChange(name)
                                              }>
                                              <HStack w="full">
                                                <Text fontWeight={"medium"}>
                                                  {name}
                                                </Text>
                                                <Text color={"gray"}>
                                                  ({quantity})
                                                </Text>
                                              </HStack>
                                            </Checkbox>
                                          </Stack>
                                        </AccordionPanel>
                                      </>
                                    )
                                  : ""}
                              </Box>
                            )
                          )}
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
          <Accordion
            flex="1"
            allowToggle
            defaultIndex={params.priceValue ? [0] : []}>
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

              <PriceRadio
                priceRanges={price}
                discounted_price_gt={params.discounted_price_gt}
                discounted_price_lt={params.discounted_price_lt}
                dispatch={dispatch}
                params={params}
                getProducts={getProducts}
              />
            </AccordionItem>
          </Accordion>
        </Box>
        <Box as="span" flex="1" textAlign="left">
          <Flex>
            <Text
              _hover={{ color: "#0076be", fontWeight: "black" }}
              cursor={"pointer"}
              fontWeight={"bold"}
              onClick={() => {
                HandleCLearParams();
              }}>
              Clear All
            </Text>
          </Flex>
        </Box>
      </VStack>
    );
  }
}

export default Filters;
