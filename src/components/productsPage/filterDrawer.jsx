import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Heading } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
} from "@chakra-ui/modal";

import Filters from "./filters";

function FilterDrawer({ filterHeading, filterBrands, price }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button colorScheme="blue" onClick={onOpen}>
        <Heading fontWeight={"medium"} fontSize="25px">
          Filters
        </Heading>
      </Button>

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <Filters
            filterHeading={filterHeading}
            filterBrands={filterBrands}
            price={price}
          />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
export default FilterDrawer;
