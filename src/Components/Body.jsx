import { Box, Flex } from "@chakra-ui/react";
import CardsBox from "./CardsBox";
import SidePannel from "./SidePannel";

const Body = ()=>{
    return <>
    <Box w={'80%'} boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
    m={'auto'} mt='8' h={'auto'} p={4}>
        <Flex justify={'space-between'} align='center'>
            <SidePannel/>
            <CardsBox/>
        </Flex>
    </Box>
    </>
}

export default Body;