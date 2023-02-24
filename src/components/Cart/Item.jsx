import React from 'react'
import {Flex, Text, Image, Select} from "@chakra-ui/react"
import fallbackSrc from '../../assets/default-image.jpg'
import { updateCartItem } from '../../redux/cart/cart.actions'
import { useDispatch } from 'react-redux'

const Item = ({cartItem}) => {
    const {productID:item, count, _id} = cartItem
    const dispatch = useDispatch()
    const [qtd, setQtd] = React.useState(count)
    React.useEffect(()=>{
        dispatch(updateCartItem(_id, qtd))
    }, [qtd])
  return (
    <Flex border="1px solid #e4e4e4" gap="25px" p="1em 2em" bgColor={'white'}>
        <Flex w="15%" minH="150px" align={'center'}>
            <Image src={item.image[0]} alt={item.product_name} w="100%" h="fit-content" fallbackSrc={fallbackSrc}/>
        </Flex>
        <Flex flexGrow={1} justify={'space-between'} fontSize={'14px'} h="65%">
            <Flex w="40%" direction={'column'} justify={'space-between'}>
                <Flex direction={'column'}>
                    <Text  fontWeight={'700'}>{item.product_name}</Text>
                    <Text>PID: {item.pid}</Text>
                    <Text>₹{item.discounted_price.toFixed(2)}</Text>
                </Flex>
                <Flex>
                    <Text borderBottom={'1px solid #0076be'}  _hover={{borderBottom:'none'}} color='#0076be'>Edit</Text>
                </Flex>
                
            </Flex>
            <Flex w="40%"  h="65%" direction={'column'} align={'flex-end'} gap="10px" fontWeight={'700'}>
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
                <Text>Item Total: ₹{(item.discounted_price*qtd).toFixed(2)}</Text>
                <Flex gap={"10px"} justify={'space-between'} fontWeight={'400'} color='#0076be'>
                    <Text borderBottom={'1px solid #0076be'}  _hover={{borderBottom:'none'}}>Remove</Text>
                    <Text borderBottom={'1px solid #0076be'}  _hover={{borderBottom:'none'}}>Move to Wish List</Text>
                </Flex>
                
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Item