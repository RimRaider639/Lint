import React from 'react'

import { useSelector } from 'react-redux'
import { Flex, Text, Divider, Image } from '@chakra-ui/react'

const OrderSummary = () => {
    const {total} = useSelector(store=>store.cartManager)
  return (
    <Flex borderRadius={'10px'} w="100%" border="1px solid #e4e4e4" p="1em" direction={'column'} fontSize={'14px'}>
                    <Text fontSize={'18px'} color="#222222" mb="10px">Order Summary</Text>
                    <Flex gap="5px">
                        <Text>Coupons & Belk Bucks </Text>
                        <Text borderBottom={'1px solid #0076be'}  _hover={{borderBottom:'1px solid white'}} color='#0076be'> Add</Text>
                    </Flex>
                    
                    <Divider color={'#e4e4e4'} m="10px 0"/>
                    <Flex justify={'space-between'}>
                        <Text>Subtotal (x{total.items} items)</Text>
                        <Text>₹{total.price.toFixed(2)}</Text>
                    </Flex>
                    <Flex justify={'space-between'}>
                        <Text>Est. Shipping (Belk)</Text>
                        <Text>FREE</Text>
                    </Flex>
                    <Divider color={'#e4e4e4'} m="10px 0"/>
                    <Flex justify={'space-between'}>
                        <Text fontSize={'16px'} fontWeight={'700'}>Estimated Total</Text>
                        <Text>₹{total.price.toFixed(2)}</Text>
                    </Flex>
                    <Text mt="40px">or 4 interest-free payments of <b>$63.75</b> with</Text>
                    <Image src="afterpay_logo.png" h="20px" w="fit-content"/>
                </Flex>
  )
}

export default OrderSummary