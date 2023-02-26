import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../redux/products/products.action";
import { useDispatch, useSelector } from "react-redux";
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

const NotAvailable = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let { params } = useSelector((store) => store.ProductsManager);
  const handleGoBack = () => {
    navigate(-1);
    dispatch(getProducts(params));
  };
  return (
    <Box textAlign="center">
      <Image
        src={
          "https://cdn.dribbble.com/users/721524/screenshots/4117132/media/6dff4135f851cd4af82839d83e00d1d6.png?compress=1&resize=400x300&vertical=top"
        }
        alt="Product Not Available"
        mb="20px"
        maxWidth="80%"
        mx="auto"
      />
      <Text fontSize="xl" mb="20px" fontWeight="bold">
        Sorry, this Category is currently not available
      </Text>
      <Box>
        <Text fontSize="lg" mb="20px">
          The Category you are looking for is currently not available.
        </Text>
        <Button onClick={handleGoBack} mt="20px" size="lg">
          Go Back
        </Button>
      </Box>
    </Box>
  );
};

export default NotAvailable;
