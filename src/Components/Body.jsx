import { Box, Flex } from "@chakra-ui/react";
import MainRoutes from "../Pages/MainRoutes";
import SidePannel from "./SidePannel";

const Body = ()=>{
    return <>
    <Box w={'92%'} boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px'
    m={'auto'} mt='8' h={'78vh'} p={4}>
        <Flex justify={'space-around'} align='center'>
            <SidePannel/>
            {/* Right Side Panel */}
            <Box  w={{base:'100%', md:'68%'}}
            align={'center'} h='70vh' overflowX={'hidden'}>
                <MainRoutes/>
            </Box>

        </Flex>
    </Box>
    </>
}

export default Body;