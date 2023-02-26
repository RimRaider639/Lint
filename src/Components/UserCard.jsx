import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
  Avatar,
  VStack,
  Badge,
} from "@chakra-ui/react";


const UserCard = ({name,email,role}) => {
  return (
    <>
      <Card>
        <CardHeader>
          <VStack>
            <Avatar  name={name}/>
            <Heading size="md"> {name}</Heading>
            <Badge colorScheme="green">{role}</Badge>
          </VStack>
        </CardHeader>
        <CardBody>
          <Text>{email}</Text>
          <Text color={"tomato"}>+91 925xxxx099</Text>
        </CardBody>
        <CardFooter>
          <Button>Delete</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default UserCard;
