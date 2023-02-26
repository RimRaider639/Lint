import React from 'react'
import {Flex, Text, Button} from "@chakra-ui/react"
import { blue, darkBlue } from './colors'
import {useNavigate} from "react-router-dom"
const Default = () => {
  const navigate = useNavigate()
  return (
    <Flex direction="column" align={'center'} justify={'center'} w="100%" h="100%" pt="300px" gap="10px">
        <Text fontWeight={'700'}>Your bag is empty & could use some love.</Text>
        <Text>Sign in to see items you may have added to your bag.</Text>
        <Button onClick={()=>navigate("/signin")} bgColor={blue} _hover={{bgColor:darkBlue}} color="white" w="200px">Sign In</Button>
        <Button onClick={()=>navigate("/")} w="200px">Start Shopping</Button>
    </Flex>
  )
}

export default Default