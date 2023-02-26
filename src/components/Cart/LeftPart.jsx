import React from 'react'
import Item from './Item'

import { Flex, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const LeftPart = () => {
    const {items, total } = useSelector(store=>store.cartManager)

  return (
    <Flex direction={'column'} borderRadius={'10px'} p="1em" bgColor={'#f5f5f5'} overflowY={'scroll'} maxH={{base:"200vh",md:"80vh"}} maxW={{base:"100%",md:"70%"}}>
                <Text fontSize={'18px'} color="#222222">Shipping by Belk</Text>
                <Text color='#767676' fontSize={'14px'}>{total.items} items</Text>
                <Flex direction={'column'}  gap="20px" mt="20px">
                    {items.map(item=><Item key={item._id} cartItem={item}/>)}
                </Flex>   
            </Flex> 
  )
}

export default LeftPart