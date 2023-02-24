import { Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SidePannel = () => {
  const navigate = useNavigate()

  return (
    <>
      <Box w={{md:'30%', xl:'20%'}}
      p={4} display={{base:'none', md:"block"}} h={{ md:'60vh'}}
      boxShadow= 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'>
        <Flex direction={"column"} gap={10}>
          <Button onClick={()=>navigate('/')}>Home</Button>
          <Button onClick={()=>navigate('/inventory')}>Inventory</Button>
          <Button onClick={()=>navigate('/add')}>Add Products</Button>
          <Button>Settings</Button>
          <Button>Profile</Button>
        </Flex>
      </Box>
    </>
  );
};

export default SidePannel;
