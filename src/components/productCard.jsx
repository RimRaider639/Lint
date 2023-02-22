import {
  Box,
  HStack,
  VStack,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import RatingSystem from "./ratingSystem";
import ImageHover from "./imageCarousel";

import {} from "@chakra-ui/react";

function ProductCard(props) {
  const { id, image, product_name, retail_price, discounted_price, rating } =
    props;

  return (
    <Card maxW="sm" border={"2px solid blue"}>
      <CardBody p={"5px"}>
        <VStack border={"1px solid red"}>
          <Box border={"1px solid green"}>
            <ImageHover image={image} />
          </Box>

          <Stack mt="6" spacing="3">
            <Heading size="sm">{product_name}</Heading>
            <RatingSystem rating={rating} />
            <HStack>
              <Text color="blue.600" fontSize="2xl">
                Rs.{retail_price}
              </Text>
              <Text textDecorationLine={"line-through"}>
                Rs.{discounted_price}
              </Text>
            </HStack>
          </Stack>
        </VStack>
      </CardBody>
      <Divider />
    </Card>
  );
}

export default ProductCard;
