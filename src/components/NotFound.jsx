import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ProductNotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <Box textAlign="center" mt="40px">
      <Heading as="h1" size="2xl" mb="10px">
        404
      </Heading>
      <Text fontSize="xl" mb="20px">
        Out of Stock
      </Text>
      <Box>
        <Text fontSize="lg">
          The product you are looking for is out of Stock.
        </Text>
        <Button onClick={handleGoBack} mt="20px">
          Go Back
        </Button>
      </Box>
    </Box>
  );
};

export default ProductNotFound;
