import { Box, Button, Flex, Image, useDisclosure } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import brand from "../Images/brand_img.png";
import DrawerMenu from "./DrawerMenu";
import DarkModeButton from "./DarkModeButton";
import AdminAccount from "./AdminAccount";
import { useRef } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef();

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
          <Button>
            <a href="https://lint-lovat.vercel.app/">Main Website</a>
          </Button>
          <DarkModeButton />
          <Button onClick={onOpen}>Logout</Button>
          <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Logout
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You will be redirected to main website.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3}>
                <a href="https://lint-lovat.vercel.app/">Logout</a>
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

          <AdminAccount />
        </Flex>
        {/* ========== Drawer Menu Here ======== */}
        <DrawerMenu />
      </Flex>
    </Box>
  );
};

export default Navbar;
