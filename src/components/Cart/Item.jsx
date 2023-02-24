import React from 'react'
import {Box, Flex, Text, Image} from "@chakra-ui/react"

const Item = ({cartItem}) => {
    const {productID:item, count} = cartItem
  return (
    <Flex>
        <Flex>
            <Image src={item.image[0]} alt={item.product_name}/>
        </Flex>
        <Flex>
            <Flex>
                <Text>{item.product_name}</Text>
            </Flex>
            <Flex>
                Qtd: {count}
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Item