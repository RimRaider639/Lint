import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxDoubleArrowRight } from "react-icons/rx";

import Filters from "../components/productsPage/filters";
import ProductCard from "../components/productsPage/productCard";
import FilterDrawer from "../components/productsPage/filterDrawer";

import { getAllData, getProducts } from "../redux/products/products.action";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";

import Pagination from "../components/pagination";
import NotAvailable from "../components/NotAvailable";
const price = [
  {
    title: "Under Rs.499",
    discounted_price_gt: null,
    discounted_price_lt: "499",
    isChecked: false,
  },
  {
    title: "Rs.500 to Rs.999",
    discounted_price_gt: "500",
    discounted_price_lt: "999",
    isChecked: false,
  },
  {
    title: "Rs.1000 to Rs.1499",
    discounted_price_gt: "1000",
    discounted_price_lt: "1499",
    isChecked: false,
  },
  {
    title: "Above Rs.1500",
    discounted_price_gt: "1500",
    discounted_price_lt: null,
    isChecked: false,
  },
];
const initParams = {
  page: "",
  limit: 10,
  subCategory_like: "",
  category: "",
  sub2Category: {},
  brand: {},
  order: "",
  sort: null,
  discounted_price_gt: null,
  discounted_price_lt: null,
  priceValue: undefined,
};

const ProductsPage = () => {
  const { path, category, sub_category } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const urlPath = location.pathname.split("/");

  const handleGoBack = () => {
    navigate(-1);
  };

  let dispatch = useDispatch();
  let { loading, productsData, allData, params, filters } = useSelector(
    (store) => store.ProductsManager
  );
  const [sortingByPrice, setSortingByPrice] = React.useState({
    sort: "discounted_price",
    order: params.order,
  });

  useEffect(() => {
    if (category !== undefined) {
      params.category = category;
    }
    if (sub_category !== undefined) {
      params.sub2Category = { ...params.sub2Category, [sub_category]: true };
    }
    if (params.subCategory_like !== path) {
      params.page = initParams.page;
      params.limit = initParams.limit;
      params.subCategory_like = initParams.path;
      params.category = initParams.category;
      params.sub2Category = initParams.sub2Category;
      params.brand = initParams.brand;
      params.order = initParams.order;
      params.sort = initParams.sort;
      params.discounted_price_gt = initParams.discounted_price_gt;
      params.discounted_price_lt = initParams.discounted_price_lt;
      params.priceValue = initParams.priceValue;
    }
    params.subCategory_like = path;
    dispatch(getProducts(params));
  }, [navigate]);

  useEffect(() => {
    dispatch(getProducts(params));
  }, [params, sortingByPrice]);

  useEffect(() => {
    let subCategory_like = path;
    dispatch(getAllData(subCategory_like));
  }, []);

  if (loading) {
    return (
      <Box pt={"23%"} pb="15%">
        <Loader />
      </Box>
    );
  } else if (productsData.length === 0) {
    return (
      <Box pt={"10%"}>
        <NotAvailable />
      </Box>
    );
  } else {
    return (
      <>
        <Box
          width={"90%"}
          margin="auto"
          pt={{ base: "30px", sm: "90px", md: "80px", lg: "150px" }}>
          {/* <FilterTag title={appliedFilters.subCategory_like} /> */}
          <Flex
            alignItems={"center"}
            // mt={{ base: "10px", sm: "10px", md: "10px", lg: "0px" }}
            pb={{ base: "10px", sm: "5px" }}>
            <Breadcrumb separator="/" fontSize={{base:"16px", md:'18px'}}>
              {urlPath &&
                urlPath.map((path, i) =>
                  i > 1 && i<4 ? (
                    <BreadcrumbItem key={i}>
                      <BreadcrumbLink href="#">{path}</BreadcrumbLink>
                    </BreadcrumbItem>
                  ) : i==4?<BreadcrumbItem key={i}>
                  <Text>{path.split("%20").join(" ")}</Text>
                </BreadcrumbItem>:  null
                )}
            </Breadcrumb>
          </Flex>
          <Flex mb="10px" mt={{}}>
            {" "}
            <Button
              mr="2%"
              onClick={handleGoBack}
              display={{ base: "block", sm: "block", md: "none" }}>
              Go Back
            </Button>
            <Box display={{ base: "block", sm: "block", md: "none" }}>
              <FilterDrawer
                filterHeading={filters.filterHeading}
                filterBrands={filters.filterBrands}
                price={price}
              />
            </Box>
            <HStack
              display={{ base: "none", sm: "none", md: "block" }}></HStack>
          </Flex>
          <Grid gridTemplateColumns={{ sm: "100%", md: "25% 75%" }} gap={"5px"}>
            {/* filters section start */}
            {/* for large screen */}
            <Box display={{ base: "none", sm: "none", md: "block" }}>
              <Filters
                filterHeading={filters.filterHeading}
                filterBrands={filters.filterBrands}
                price={price}
                handleGoBack={handleGoBack}
              />
            </Box>
            {/* for small screen */}

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
                  <Select
                    placeholder="Select option"
                    w="80%"
                    value={sortingByPrice.order}
                    onChange={(e) => {
                      params.sort = "discounted_price";
                      params.order = e.target.value;
                      setSortingByPrice({
                        ...sortingByPrice,
                        order: e.target.value,
                      });
                    }}>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to low</option>
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
                      key={e._id}
                      id={e._id}
                      image={e.image}
                      product_name={e.product_name}
                      retail_price={e.retail_price}
                      discounted_price={e.discounted_price}
                      rating={e.rating}
                      path={path}
                      params={params}
                    />
                  ))}
              </Grid>
            </VStack>
          </Grid>
          <Box>
            <Flex justify={{ base: "center", md: "flex-end" }}>
              {productsData.length > 1 && (
                <Pagination
                  current={params.page}
                  total={Math.ceil(allData.length / params.limit)}
                  handlePageChange={(page) => {
                    params.page = page;
                    dispatch(getProducts(params));
                  }}
                />
              )}
            </Flex>
          </Box>
        </Box>
      </>
    );
  }
};

export default ProductsPage;
