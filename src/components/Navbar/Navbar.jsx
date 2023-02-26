import React from 'react'
import MobileNav from './MobileNav'
import NavTop from './NavTop'
import NavBottom from './NavBottom'
import {Flex} from "@chakra-ui/react"
import "../../styles/NavTop.css"
const Navbar = () => {
  return (
    <Flex w="100%">
        <MobileNav/>
        <Flex display={{base:"none", md:"flex"}} direction={"column"} id="maindiv">
            <NavTop/>
            <NavBottom/>
        </Flex>
    </Flex>
  )
}

export default Navbar