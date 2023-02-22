import { Box, Button, Flex } from "@chakra-ui/react";

const SidePannel = () => {
  return (
    <>
      <Box w={{md:'30%', xl:'20%'}}
      p={4} display={{base:'none', md:"block"}} h={"70vh"}
      boxShadow= 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'>
        <Flex direction={"column"} gap={10}>
          <Button >Home</Button>
          <Button >Inventory</Button>
          <Button >Sales</Button>
          <Button >Settings</Button>
          <Button >Profile</Button>
        </Flex>
      </Box>
    </>
  );
};

export default SidePannel;
