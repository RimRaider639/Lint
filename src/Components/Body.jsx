import { Box, Flex } from "@chakra-ui/react";
import MainRoutes from "../Pages/MainRoutes";

import SidePannel from "./SidePannel";

// let admin;
// admin = JSON.parse(localStorage.getItem("admin"));
// console.log(admin);

const Body = () => {

//   if (admin) {
    return (
      <>
        <Box
          w={"95%"}
          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
          m={"auto"}
          mt="8"
          h={"78vh"}
          p={4}
        >
          <Flex justify={"space-between"} align="center">
            <SidePannel />

            {/* Right Side Panel */}
            <Box
              w={{ base: "100%", md: "85%" }}
              align={"center"}
              h="70vh"
              overflowX={"hidden"}
            >
              <MainRoutes />
            </Box>
          </Flex>
        </Box>
      </>
    );
//   }
//   else{
//     // onOpen()
//     return <Box>
//         <Text> You are not logged in</Text>
//     </Box>
//   }
};

export default Body;
