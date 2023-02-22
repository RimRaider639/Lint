import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Divider,
  Grid,
  Heading,
  HStack,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/productCard";

import { getAllData, getProducts } from "../redux/products/products.action";
const price = [
  "Under Rs.499",
  "RS.500 to Rs.999",
  "RS.1000 to Rs.1499",
  "Above Rs.1500",
];

const ProductsPage = () => {
  let { loading, productsData, allData, params, filters } = useSelector(
    (store) => store.ProductsManager
  );

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(params));
  }, [productsData.length, dispatch, params]);

  useEffect(() => {
    dispatch(getAllData());
  }, [allData.length]);

  let category = [];
  Object.entries(filters.category).map(([name, quantity]) =>
    category.push([name, quantity])
  );

  let brands = [];
  Object.entries(filters.brands).map(([name, quantity]) =>
    brands.push([name, quantity])
  );

  if (productsData.length === 0) {
    return "please wait... ";
  } else {
    return (
      <>
        {console.log(loading)}
        {console.log("productsData", productsData)}
        <Box width={"90%"} margin="auto">
          <Grid
            border="2px solid black"
            gridTemplateColumns={"25% 75%"}
            gap={"5px"}>
            <VStack p="10px" border="2px solid green">
              <Heading>Filters</Heading>
              <Divider></Divider>
              {/* Category 1 */}
              <Box maxH="400px" overflowY="scroll" w="full">
                <Accordion defaultIndex={[0]} flex="1" allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontWeight={"bold"}>
                          {""}
                          Category
                          {""}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    {category &&
                      category.map((e, i) => (
                        <Box key={i}>
                          {" "}
                          <AccordionPanel mb={-3}>
                            <HStack borderBottom={"1px solid black"}>
                              <Text fontWeight={"medium"}>{e[0]}</Text>
                              <Text color={"gray"}>({e[1]})</Text>
                            </HStack>
                          </AccordionPanel>
                        </Box>
                      ))}
                  </AccordionItem>
                </Accordion>
              </Box>

              {/* Category 2 by brands */}
              <Box maxH="400px" overflowY="scroll" w="full">
                <Accordion defaultIndex={[0]} flex="1" allowMultiple>
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

                    {brands &&
                      brands.map((e, i) => (
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
                <Accordion defaultIndex={[0]} flex="1" allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontWeight={"bold"}>
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
            <VStack border="2px solid red" justify={"space-between"} p="10px">
              <HStack
                border="1px solid yellow"
                justify={"space-between"}
                w="full">
                <Heading>Products</Heading>
                <HStack>
                  <Text>Sort</Text>
                  <Select placeholder="Select option">
                    <option value="option1">Price: Low to High</option>
                    <option value="option2">Price: High to low</option>
                  </Select>
                </HStack>
              </HStack>
              <Divider></Divider>
              <Grid
                gridTemplateColumns={{
                  sm: "repeat(2,1fr)",
                  md: "repeat(3,1fr)",
                  lg: "repeat(4,1fr)",
                }}>
                {productsData &&
                  productsData.map((e) => (
                    <ProductCard
                      key={e.id}
                      id={e.id}
                      image={e.image}
                      product_name={e.product_name}
                      retail_price={e.retail_price}
                      discounted_price={e.discounted_price}
                      rating={e.rating}
                    />
                  ))}
              </Grid>
            </VStack>
          </Grid>
        </Box>
      </>
    );
  }
};

export default ProductsPage;
