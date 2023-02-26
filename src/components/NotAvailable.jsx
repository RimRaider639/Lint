import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotAvailable = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
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
        Sorry, this product is currently not available
      </Text>
      <Box>
        <Text fontSize="lg" mb="20px">
          The product you are looking for is currently not available.
        </Text>
        <Button onClick={handleGoBack} mt="20px" size="lg">
          Go Back
        </Button>
      </Box>
    </Box>
  );
};

export default NotAvailable;
