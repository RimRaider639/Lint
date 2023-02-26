import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    SimpleGrid,
    Heading,
    Button,
    Text,
    Box,
    Avatar,
    VStack,
    Badge,
  } from "@chakra-ui/react";

const UserCard=()=>{
    return <>
    <Card>
          <CardHeader>
            <VStack>
              <Avatar src={tejas}/> 
              <Heading size="md"> Tejas Bishnoi</Heading>
              <Badge colorScheme='green'>Admin</Badge>
            </VStack>
          </CardHeader>
          <CardBody>
            <Text>
              tejas@email.com
            </Text>
            <Text color={'tomato'}>
              +91 955xxxx099
            </Text>
          </CardBody>
          <CardFooter>
            <Button>Delete</Button>
          </CardFooter>
        </Card>
    </>
}

export default UserCard;