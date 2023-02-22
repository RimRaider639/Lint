import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData, getProducts } from "../redux/products/products.action";

const ProductsPage = () => {
  let { productsData, allData, params, filters } = useSelector(
    (store) => store.ProductsManager
  );
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllData());
  }, [allData.length]);

  useEffect(() => {
    dispatch(getProducts(params));
  }, [productsData.length, dispatch, params]);
  console.log("filters", filters);
  return (
    <>
      <Box width={"80%"} border="1px solid red" margin="auto">
        <Grid gridTemplateColumns={"25% 75%"} gap={"5px"}>
          <HStack>
            <Heading>Filters</Heading>
          </HStack>
          <HStack justify={"space-between"}>
            <Heading>Products</Heading>
            <HStack>
              <Text>Sort</Text>
              <Select placeholder="Select option">
                <option value="option1">Price: Low to High</option>
                <option value="option2">Price: High to low</option>
              </Select>
            </HStack>
          </HStack>
        </Grid>
      </Box>
    </>
  );
};

export default ProductsPage;
