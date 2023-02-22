import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Flex,
  } from '@chakra-ui/react'
import { useRef } from 'react'

  const DrawerMenu = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <>
        <Button ref={btnRef} display={{md:'none'}}
        colorScheme='blue' onClick={onOpen}>
          <HamburgerIcon/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
  
            <DrawerBody>
                <Flex direction={'column'} gap={10}>
                    <Button onClick={onClose}>Home</Button>
                    <Button onClick={onClose}>Inventory</Button>
                    <Button onClick={onClose}>Sales</Button>
                    <Button onClick={onClose}>Settings</Button>
                    <Button onClick={onClose}>Profile</Button>
                </Flex>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Logout</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerMenu;