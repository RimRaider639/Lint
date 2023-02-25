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
import tejas from '../Images/tejas.png'
const Users = () => {
  return (
    <Box p="6">
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
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
        <Card>
          <CardHeader>
            <VStack>
              <Avatar />
              <Heading size="md"> User Name</Heading>
              <Badge colorScheme='green'>Admin</Badge>
            </VStack>
          </CardHeader>
          <CardBody>
            <Text>
              user@email.com
            </Text>
            <Text color={'tomato'}>
              +91 785xxxx040
            </Text>
          </CardBody>
          <CardFooter>
            <Button>Delete</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <VStack>
              <Avatar />
              <Heading size="md"> User Name</Heading>
              <Badge colorScheme='red'>User</Badge>
            </VStack>
          </CardHeader>
          <CardBody>
            <Text>
              user@email.com
            </Text>
            <Text color={'tomato'}>
              +91 897xxxx095
            </Text>
          </CardBody>
          <CardFooter>
            <Button>Delete</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Users;
