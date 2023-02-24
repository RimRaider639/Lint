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

import {} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { id, image, product_name, retail_price, discounted_price, rating } =
    props;

  return (
    <Link to={`/product/${id}`}>
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
