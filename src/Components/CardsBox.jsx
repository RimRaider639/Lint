import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Flex } from '@chakra-ui/react'
import Sales from './Sales';
const CardsBox = ()=>{
    return <>
    <Flex w={{base:'100%', md:'68%'}}  
    flexDirection='column' justifyContent={'center'}
    p={2} gap='10'>
            <Card align='center'>
                <CardHeader>
                    <Heading size='md'> Sales Card</Heading>
                </CardHeader>
                <CardBody>
                    {/*==== Sales Component  === */}
                    <Sales/>
                    {/*==== Sales Component  === */}
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue'>View Detailed Sales</Button>
                </CardFooter>
            </Card>

            <Card align='center'>
                <CardHeader>
                    <Heading size='md'> Orders Status Card</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all customers orders over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue'>View here</Button>
                </CardFooter>
            </Card>
    </Flex>
    </>
}

export default CardsBox;