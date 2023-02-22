import { Box, Button, Flex, HStack, Image, Text, useColorMode} from "@chakra-ui/react";
import { Avatar, AvatarBadge } from '@chakra-ui/react'
import user from '../Images/tejas.png'
import brand from '../Images/brand_img.png'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Navbar = ()=>{
    const { colorMode, toggleColorMode } = useColorMode()

    return <Box border={'1px'} borderColor="grey">
        <Flex justify='space-between' align='center' p={2}>
        <Box>
            <Image src={brand} w={100}/>
        </Box>

        <Flex justify='space-between' 
        align='center'  w={'35%'}>
            <Button>Main Website</Button>

            <Button onClick={toggleColorMode}>
                 {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
            </Button>

            <Button>Logout</Button>

            <HStack>
                <Avatar name="Tejas Bishnoi" src={user}>
                    <AvatarBadge boxSize='1em' bg='green.500' />
                </Avatar>

                <Text>Tejas Bishnoi</Text>
            </HStack>

        </Flex>

        </Flex>
    </Box>
}

export default Navbar;