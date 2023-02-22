import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";


const DarkModeButton = ()=>{
    const { colorMode, toggleColorMode } = useColorMode();

    return <>
            <Button onClick={toggleColorMode} colorScheme='blue'>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
    </>
}

export default DarkModeButton;