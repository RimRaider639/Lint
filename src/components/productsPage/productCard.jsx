import {
  Box,
  HStack,
  VStack,
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import RatingSystem from "./ratingSystem";
import ImageHover from "./imageCarousel";
import { useLocation, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

function ProductCard(props) {
  const {
    id,
    image,
    product_name,
    retail_price,
    discounted_price,
    rating,
    path,
    params,
  } = props;
  const navigate = useNavigate();
  const location = useLocation();
  function HandleSingleProductPath() {}
  // console.log("ProductCard", params);
  // const path = `${location.pathname}/${category}`;
  // navigate(path);
  return (
    <Link
      to={`/products/${path}/${
        params.category === "" ? params.subCategory_like : params.category
      }/${id}/single`}>
      <Card maxW="sm">
        <CardBody p={"5px"}>
          <VStack p="10px">
            <Box h="300px" overflow="hidden">
              <ImageHover image={image} />
            </Box>

            <Stack mt="6" spacing="1">
              <Heading size="sm">{product_name}</Heading>
              <RatingSystem rating={rating} />
              <HStack>
                <Text fontSize="2xl" fontWeight="bold" mb={3} color={"#0076be"}>
                  Rs.{discounted_price}
                </Text>
                <Text
                  textDecorationLine={"line-through"}
                  color="gray.500"
                  fontSize="xl">
                  Rs.{retail_price}
                </Text>
              </HStack>
            </Stack>
          </VStack>
        </CardBody>
      </Card>
    </Link>
  );
}

export default ProductCard;
