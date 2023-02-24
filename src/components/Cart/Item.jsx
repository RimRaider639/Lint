import React from 'react'
import {Flex, Text, Image, Select} from "@chakra-ui/react"
import fallbackSrc from '../../assets/default-image.jpg'
import { updateCartItem } from '../../redux/cart/cart.actions'
import { useDispatch } from 'react-redux'

const Item = ({cartItem}) => {
    const {productID:item, count} = cartItem
    const dispatch = useDispatch()
    const [qtd, setQtd] = React.useState(count)
    React.useEffect(()=>{
        dispatch(updateCartItem(item._id, qtd))
    }, [qtd])
  return (
    <Flex minH="200px" gap="20px" border="1px solid black" p="1em 2em" bgColor={'white'}>
        <Flex w="20%">
            <Image src={item.image[0]} alt={item.product_name} w="80px" h="fit-content" fallbackSrc={fallbackSrc}/>
        </Flex>
        <Flex flexGrow={1} justify={'space-between'} fontSize={'14px'}>
            <Flex w="40%" direction={'column'}>
                <Text  fontWeight={'700'}>{item.product_name}</Text>
                <Text>PID: {item.pid}</Text>
                <Text>₹{item.discounted_price}</Text>
            </Flex>
            <Flex w="40%" direction={'column'} align={'flex-end'} gap="10px" fontWeight={'700'}>
                <Flex gap="10px" w="100px">
                    <Text>Qtd: </Text>
                    <Select borderRadius={0} size={'sm'} value={qtd} onChange={e=>setQtd(+e.target.value)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </Select>
                </Flex>
                <Text>Item Total: ₹{item.discounted_price*count}</Text>
                <Flex gap="10px" fontWeight={'400'} color='#0076be'>
                    <Text borderBottom={'1px solid #0076be'}  _hover={{borderBottom:'none'}}>Remove</Text>
                    <Text borderBottom={'1px solid #0076be'}  _hover={{borderBottom:'none'}}>Move to Wish List</Text>
                </Flex>
                
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Item