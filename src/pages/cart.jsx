import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../redux/cart/cart.actions'
import Item from '../components/Cart/Item'
import { Flex, Text, Divider } from '@chakra-ui/react'

const Cart = () => {
    const dispatch = useDispatch()
    const {items, total, loading, error} = useSelector(store=>store.cartManager)
    React.useEffect(()=>{
        dispatch(getCartItems())
    }, [])
    console.log(items)
  return (
    total.count && 
    <Flex pt="140px" w="80%" m="auto" direction={'column'} fontFamily={'Arial'}>
        <Text fontSize={'18px'} color="#222222" mb="10px">My Bag</Text>
        <Flex w="100%"  gap="35px">
            <Flex direction={'column'} borderRadius={'10px'} p="1em" bgColor={'#f5f5f5'} flexGrow={1}>
                <Text fontSize={'18px'} color="#222222">Shipping by Belk</Text>
                <Text color='#767676' fontSize={'14px'}>{total.items} items</Text>
                <Flex direction={'column'}  gap="20px" mt="20px">
                    {items.map(item=><Item key={item._id} cartItem={item}/>)}
                </Flex>   
            </Flex>
            <Flex direction={'column'} w="50%">
                <Flex borderRadius={'10px'} w="100%" border="1px solid #e4e4e4" p="1em" direction={'column'} fontSize={'14px'}>
                    <Text fontSize={'18px'} color="#222222" mb="10px">Order Summary</Text>
                    <Flex gap="5px">
                        <Text>Coupons & Belk Bucks </Text>
                        <Text borderBottom={'1px solid #0076be'}  _hover={{borderBottom:'none'}} color='#0076be'> Add</Text>
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
                    <Text mt="40px">or 4 interest-free payments of <bold>$63.75</bold> with</Text>
                </Flex>
            </Flex>
            
    </Flex>
    </Flex>
  )
}

export default Cart