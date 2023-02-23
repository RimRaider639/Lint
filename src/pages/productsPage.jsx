import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Divider,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Grid,
  Heading,
  HStack,
  Image,
  Select,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Filters from "../components/productsPage/filters";
import ProductCard from "../components/productsPage/productCard";
import FilterDrawer from "../components/productsPage/filterDrawer";

import { getAllData, getProducts } from "../redux/products/products.action";
import { useParams } from "react-router-dom";
const price = [
  "Under Rs.499",
  "RS.500 to Rs.999",
  "RS.1000 to Rs.1499",
  "Above Rs.1500",
];

const ProductsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { path } = useParams();

  let { loading, productsData, allData, params, filters } = useSelector(
    (store) => store.ProductsManager
  );

  let dispatch = useDispatch();

  useEffect(() => {
    params.subCategory_like = path;
    dispatch(getProducts(params));
  }, [productsData.length, dispatch, params, path]);

  useEffect(() => {
    let subCategory_like = path;

    dispatch(getAllData(subCategory_like));
  }, [allData.length, path, dispatch]);

  // { filterHeading: [], filterCategory: [], filterBrands: [] }

  if (productsData.length === 0) {
    return (
      <Image src="https://media0.giphy.com/media/hWZBZjMMuMl7sWe0x8/giphy.gif?cid=ecf05e47miq5cngzblyhk1rx2cq7qjkem5ilbc3fg1fvkbkc&rid=giphy.gif&ct=g" />
    );
  } else {
    return (
      <>
        <Box width={"90%"} margin="auto" mt={"40px"}>
          <Grid gridTemplateColumns={{ sm: "100%", md: "25% 75%" }} gap={"5px"}>
            {/* filters section start */}
            {/* for large screen */}
            <Box display={{ base: "none", sm: "none", md: "block" }}>
              <Filters
                filterHeading={filters.filterHeading}
                filterBrands={filters.filterBrands}
                price={price}
              />
            </Box>
            {/* for small screen */}
            <Box display={{ base: "block", sm: "block", md: "none" }}>
              <FilterDrawer
                filterHeading={filters.filterHeading}
                filterBrands={filters.filterBrands}
                price={price}
              />
            </Box>

            {/* products section start */}
            <VStack justify={"space-between"} p="10px">
              <HStack justify={"space-between"} w="full">
                <Heading
                  fontWeight={"medium"}
                  fontSize={{
                    base: "20px",
                    sm: "30px",
                    md: "30px",
                    lg: "35px",
                  }}>
                  Products
                </Heading>
                <HStack
                  w={{ sm: "60%", md: "50%", lg: "40%" }}
                  justify={"space-between"}>
                  <Text fontSize={"xl"}>Sort</Text>
                  <Select placeholder="Select option" w="80%">
                    <option value="option1">Price: Low to High</option>
                    <option value="option2">Price: High to low</option>
                  </Select>
                </HStack>
              </HStack>
              <Divider borderColor={"black"} />
              <Grid
                gridTemplateColumns={{
                  sm: "repeat(2,1fr)",
                  md: "repeat(3,1fr)",
                  lg: "repeat(4,1fr)",
                }}
                gap="5">
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
