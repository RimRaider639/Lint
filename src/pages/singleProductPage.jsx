import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  useToast,
  VStack,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link, useParams, useNavigate } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import React from "react";
import axios from "axios";

import Loader from "../components/Loader";

function SingleProductPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const toast = useToast();
  const { id } = useParams();

  const [product, setProduct] = React.useState([]);
  const [currentImage, setCurrentImage] = React.useState("");
  const [imageHeight, setImageHeight] = React.useState("100");

  React.useEffect(() => {
    axios
      .get(`https://wide-eyed-pinafore-duck.cyclic.app/products/${id}`)
      .then(function (response) {
        let data = response.data;
        setProduct(data);
        setCurrentImage(data.image[0]);
        if (data.image.length === 1) {
          setImageHeight("600");
        } else if (data.image.length === 2) {
          setImageHeight("600");
        } else if (data.image.length === 3) {
          setImageHeight("266");
        } else if (data.image.length === 4) {
          setImageHeight("200");
        } else if (data.image.length === 5) {
          setImageHeight("160");
        } else {
          setImageHeight("100");
        }
      })
      .catch(function (error) {
        console.log("error in getting single product data" + error);
      });
  }, [id]);

  // Handle add to cart button click
  const handleAddToCart = () => {
    // Add logic to add product to cart
    toast({
      position: "top-right",
      title: "Product added to cart",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  // React.useEffect(() => {
  //   console.log("product.image.length=", product.image.length);

  // }, [product.image.length]);

  if (product.length === 0) {
    return (
      <Box pt={"23%"} pb="15%">
        <Loader />
      </Box>
    );
  } else {
    return (
      <Box
        display={{ base: "grid", md: "flex" }}
        bg="gray.100"
        py={10}
        pt={"140px"}>
        <Flex ml="20px">
          <Button onClick={handleGoBack}>Go Back</Button>
        </Flex>
        {/* Top section for image and prices */}
        <Container maxW="container.xl">
          <Grid
            gridTemplateColumns={{ base: "100%", md: "60% 40%" }}
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between">
            {/* images left section */}
            <Box p="10px">
              {/* for larger screen */}
              <Box display={{ base: "none", md: "block" }}>
                <HStack justify={"space-between"}>
                  {/* left multiple images */}

                  <VStack align="flex-start" w={{ base: "20%", md: "30%" }}>
                    {product &&
                      product.image
                        .slice(1, 7) // only map the first 6 elements, starting from index 1
                        .map((e, i) => (
                          <Box
                            key={e + i}
                            h={`${imageHeight}`}
                            overflow="hidden">
                            <Image
                              src={e}
                              alt={`Image${i}`}
                              objectFit="contain"
                              onClick={() => {
                                setCurrentImage(e);
                              }}
                            />
                          </Box>
                        ))}
                  </VStack>

                  {/* Right main Image */}
                  <Box
                    w={{ base: "100%", md: "80%" }}
                    overflow="hidden"
                    h={{
                      md: `${
                        (product.image.length - 1) * imageHeight +
                        (product.image.length - 1) * 7
                      }`,
                      lg: `${
                        (product.image.length - 1) * imageHeight +
                        (product.image.length - 1) * 7
                      }`,
                    }}>
                    {currentImage ? (
                      <Image
                        src={currentImage}
                        alt={product.name}
                        objectFit="contain"
                      />
                    ) : (
                      ""
                    )}
                  </Box>
                </HStack>
              </Box>
              {/* for small screen */}
              <Box display={{ base: "block", md: "none" }}>
                <VStack>
                  <Box
                    overflow="hidden"
                    maxH={`${
                      (product.image.length - 1) * 100 +
                      (product.image.length - 1) * 7
                    }px`}>
                    {currentImage ? (
                      <Image
                        src={currentImage}
                        alt={product.name}
                        objectFit="cover"
                      />
                    ) : (
                      ""
                    )}
                  </Box>
                  <HStack align="flex-start">
                    {product &&
                      product.image.map(
                        (e, i) =>
                          i > 0 && (
                            <Box key={i + e} h="100px" overflow="hidden">
                              <Image
                                src={e}
                                alt={`Image${i}`}
                                objectFit="cover"
                                onClick={() => {
                                  setCurrentImage(e);
                                }}
                              />
                            </Box>
                          )
                      )}
                  </HStack>
                </VStack>
              </Box>
            </Box>

            {/* Right sections */}
            <Box py={{ base: 6, md: 0 }} pl={{ md: 6 }}>
              <Heading size="lg" mb={3}>
                {product.product_name}
              </Heading>
              <Box d="flex" alignItems="center" mb={3}>
                <HStack>
                  <Text>
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <>
                          <StarIcon
                            key={i}
                            color={
                              i < Math.floor(product.rating)
                                ? "yellow.500"
                                : "gray.300"
                            }
                          />
                        </>
                      ))}
                  </Text>
                  <Text ml={2} color="gray.500">
                    ({product.rating})
                  </Text>
                  <Text color={"#0076be"} fontWeight="medium">
                    | <Link>Write a Review</Link>
                  </Text>
                </HStack>
              </Box>
              <HStack>
                <Text fontSize="2xl" fontWeight="bold" mb={3} color={"#e53e3e"}>
                  Rs.{product.discounted_price}
                </Text>
                <Text
                  textDecoration={"line-through"}
                  fontSize="xl"
                  mb={3}
                  color="gray.500">
                  Rs.{product.retail_price}
                </Text>
              </HStack>
              <Box>
                <VStack>
                  <HStack spacing={0}>
                    <Text w="100%" fontSize={{ base: "16", md: "18px" }}>
                      or 4 interest-free payments of Rs.17.24 with
                    </Text>
                    <Box w="35%" h={"100%"}>
                      <Image
                        objectFit={"cover"}
                        src="./afterpay_logo.png"></Image>
                    </Box>
                  </HStack>
                  <Divider borderColor={"black"}></Divider>
                  <Box w="full">
                    <Text
                      fontWeight={"medium"}
                      w="full"
                      fontSize={{ base: "16", md: "20px" }}>
                      Special Offers:{" "}
                    </Text>
                    <Text
                      color={"#e53e3e"}
                      fontWeight="medium"
                      w="full"
                      fontSize={{ base: "16", md: "18px" }}>
                      Bobbi Brown Must Haves Set, $15 with Belk purchase
                    </Text>
                  </Box>
                  <Divider borderColor={"black"}></Divider>
                </VStack>
              </Box>
              <Box mt={3}>
                <Text
                  fontWeight={"medium"}
                  w="full"
                  fontSize={{ base: "16", md: "20px" }}>
                  Apply Coupon
                </Text>
                <Input
                  w="full"
                  placeholder="Enter coupon code"
                  size="lg"
                  mt={3}
                />
                <Button colorScheme="blue" size="md" mt={3} mb="3">
                  Apply
                </Button>
              </Box>
              <Divider borderColor={"black"}></Divider>
              <HStack fontSize={{ base: "16", md: "18px" }} mt="20px" mb="20px">
                <Icon
                  as={TbTruckDelivery}
                  fontSize={{ base: "35px", lg: "35px" }}></Icon>
                <Text fontWeight={"medium"}>Same Day Delivery</Text>
                <Icon as={AiOutlineQuestionCircle}></Icon>
                <Text color={"#0076be"} fontWeight={"medium"} cursor="pointer">
                  Check My Area
                </Text>
              </HStack>
              <Divider borderColor={"black"}></Divider>

              <VStack spacing={3}>
                <Button
                  w="full"
                  colorScheme="blue"
                  size="lg"
                  onClick={handleAddToCart}>
                  Add to cart
                </Button>
                <HStack>
                  <Text
                    color={"#0076be"}
                    fontWeight={"medium"}
                    cursor="pointer">
                    Add to Registry
                  </Text>
                  <Text>|</Text>
                  <Text
                    color={"#0076be"}
                    fontWeight={"medium"}
                    cursor="pointer">
                    Add to Wish List
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </Grid>
          {/* Bottom section for description */}
          <Box mt="30px">
            <Accordion defaultIndex={[0]} allowMultiple>
              {/* description */}
              <AccordionItem>
                <h2>
                  <AccordionButton
                    borderBottom={"1px solid black"}
                    borderTop={"1px solid black"}>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={{ base: "16", md: "20px" }}
                      fontWeight="bold">
                      Description
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box fontSize={{ base: "16", md: "18px" }}>
                    {product.description}
                  </Box>
                  <Box>
                    <Text
                      fontWeight="medium"
                      mb={{ base: "2", md: "3" }}
                      mt={{ base: "2", md: "3" }}
                      fontSize={{ base: "16", md: "20px" }}>
                      Product Specifications:
                    </Text>
                    <List spacing="1">
                      {product &&
                        product.product_specifications.product_specification.map(
                          (spec, index) => (
                            <>
                              {" "}
                              <ListItem key={index + spec}>
                                <Text
                                  fontSize={{ base: "16", md: "18px" }}
                                  fontWeight="medium"
                                  display="inline-block"
                                  w="35%">
                                  {spec.key}:
                                </Text>
                                <Text display="inline-block">{spec.value}</Text>
                              </ListItem>
                            </>
                          )
                        )}
                    </List>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              {/* Shipping and Returns */}
              <AccordionItem>
                <h2>
                  <AccordionButton borderBottom={"1px solid black"}>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={{ base: "16", md: "20px" }}
                      fontWeight="bold">
                      Shipping & Returns
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text
                    fontWeight="medium"
                    mb={{ base: "2", md: "3" }}
                    mt={{ base: "2", md: "3" }}
                    fontSize={{ base: "16", md: "20px" }}>
                    Shipping Details
                  </Text>

                  <Text fontSize={{ base: "16", md: "18px" }}>
                    Shipping your purchase is easy at belk.com. Depending on
                    your shipping method and the destination of your package,
                    you can expect it to arrive within 3-10 business days
                    Details
                  </Text>
                  <Text
                    fontWeight="medium"
                    mb={{ base: "2", md: "3" }}
                    mt={{ base: "2", md: "3" }}
                    fontSize={{ base: "16", md: "20px" }}>
                    Return Details
                  </Text>
                  <Text fontSize={{ base: "16", md: "18px" }}>
                    Returns are easy at belk.com. Easy returns
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Container>
      </Box>
    );
  }
}

export default SingleProductPage;
