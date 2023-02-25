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
import { useNavigate } from 'react-router-dom';
import DarkModeButton from "./DarkModeButton";

  const DrawerMenu = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const navigate = useNavigate()
  
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
                    <Button onClick={()=>{
                      navigate('/')
                      onClose()
                    }}>Home</Button>
                    <Button onClick={()=>{
                      navigate('/inventory')
                      onClose()
                    }}>Inventory</Button>
                    <Button onClick={()=>{
                      navigate('/add')
                      onClose()
                    }}>Add Products</Button>
                    
                    <Button onClick={()=>{
                      navigate('/users')
                      onClose()
                    }}>Users</Button>
                </Flex>
            </DrawerBody>
  
            <DrawerFooter gap={10}>
              <DarkModeButton/>
              <Button colorScheme='blue'>Logout</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerMenu;