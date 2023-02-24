import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../redux/cart/cart.actions'
import Item from '../components/Cart/Item'
import { Flex, Text } from '@chakra-ui/react'

const Cart = () => {
    const dispatch = useDispatch()
    const {items, total, loading, error} = useSelector(store=>store.cartManager)
    React.useEffect(()=>{
        dispatch(getCartItems())
    }, [])
    console.log(items)
  return (
    total.count && 
    <Flex pt="140px" w="80%" m="auto" direction={'column'} border="2px solid black">
        <Text fontSize={'18px'} color="#222222" mb="10px">My Bag</Text>
        <Flex border="2px solid black" w="100%">
            <Flex direction={'column'} p="1em" bgColor={'#f5f5f5'} border="2px solid black" flexGrow={1}>
                <Text fontSize={'18px'} color="#222222">Shipping by Belk</Text>
                <Text color='#767676' fontSize={'14px'}>{total.items} items</Text>
                <Flex direction={'column'}  gap="20px" mt="20px">
                    {items.map(item=><Item key={item._id} cartItem={item}/>)}
                </Flex>   
            </Flex>
            <Flex w="30%" border="2px solid black" h="400px">

            </Flex>
    </Flex>
    </Flex>
  )
}

export default Cart