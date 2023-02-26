import { Box, Button, Flex, Image } from "@chakra-ui/react";

import brand from "../Images/brand_img.png";
import DrawerMenu from "./DrawerMenu";
import DarkModeButton from "./DarkModeButton";
import AdminAccount from "./AdminAccount";

const Navbar = () => {
  return (
    <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" p="6">
      <Flex justify="space-between" align="center">
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

          <AdminAccount />
        </Flex>
        {/* ========== Drawer Menu Here ======== */}
        <DrawerMenu />
      </Flex>
    </Box>
  );
};

export default Navbar;
