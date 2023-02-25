import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import user from "../Images/tejas.png";
import brand from "../Images/brand_img.png";
import DrawerMenu from "./DrawerMenu";
import DarkModeButton from "./DarkModeButton";

const Navbar = () => {
  return (
    <Box boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px' p='6'>
      <Flex justify="space-between" align="center" >
        <Box>
          <Image src={brand} w={100} />
        </Box>

        <Flex
          justify="space-between"
          align="center"
          w={{ md: "55%", xl: "500px" }}
          display={{ base: "none", md: "flex" }}
        >
          <Button>Main Website</Button>
          <DarkModeButton />
          <Button>Logout</Button>
          <HStack>
            <Avatar name="Tejas Bishnoi" src={user}>
              <AvatarBadge boxSize="1em" bg="green.500" />
            </Avatar>
            <Text>Tejas Bishnoi</Text>
          </HStack>
        </Flex>
        {/* ========== Drawer Menu Here ======== */}
        <DrawerMenu />
      </Flex>
    </Box>
  );
};

export default Navbar;
