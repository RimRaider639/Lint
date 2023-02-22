import { Box, Flex } from "@chakra-ui/react";
import CardsBox from "./CardsBox";
import SidePannel from "./SidePannel";

const Body = ()=>{
    return <>
    <Box w={'80%'} border="1px" borderColor={'tomato'}
    m={'auto'} mt='8' h={'80vh'} p={4}>
        <Flex justify={'space-between'} align='center'>
            <SidePannel/>
            <CardsBox/>
        </Flex>
    </Box>
    </>
}

export default Body;