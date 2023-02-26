import React from 'react'
import OrderSummary from './OrderSummary'

import { Flex, Text, Divider, Image, Button } from '@chakra-ui/react'
import {FaShippingFast} from 'react-icons/fa'
import {AiOutlineLock} from 'react-icons/ai'
import { blue, red, darkBlue } from './colors'

const RightPart = () => {
  return (
    <Flex direction={'column'} w={{base:"100%",md:"30%"}}>
                
                <OrderSummary/>
                <Flex direction={'column'} h="120px" justify={'space-evenly'} align="center" fontSize={"14px"}>
                    <Flex justify={'center'} align="center" gap="5px" w="100%">
                        <Divider h="5px" bgColor="rgb(0,118,190)" borderRadius={'3px'}/>
                        <FaShippingFast fontSize={"30px"}/>                    
                    </Flex>
                    <Text color="#222222">Congrats! You’ve earned FREE Shipping.</Text>
                    <Text color={red}>Don’t forget your free gift ... you earned it!</Text>
                </Flex>
                <Button h="50px" bgColor={blue} color="white" m="5px 0" _hover={{bgColor:darkBlue}} leftIcon={<AiOutlineLock/>}>Secure Checkout</Button>
                <Button h="50px" bgColor="white" m="5px 0" border="1px solid black"><Image src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png" alt="PayPal Logo"/></Button>
                <Button h="50px" bgColor="white" m="5px 0" border="1px solid black"><Image src="afterpay_logo.png" alt="AfterPay Logo" maxH="70%"/></Button>
            </Flex>
  )
}

export default RightPart