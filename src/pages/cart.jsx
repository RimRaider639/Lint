import React from 'react'
import RightPart from '../components/Cart/RightPart'
import LeftPart from '../components/Cart/LeftPart'
import OverlayLoader from '../components/Cart/OverlayLoader'
import Default from '../components/Cart/Default'

import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../redux/cart/cart.actions'
import { Flex, Text } from '@chakra-ui/react'
import { cart } from '../redux/cart/cart.actionTypes'

const Cart = () => {
    const dispatch = useDispatch()
    const {items, total, loading, error, message} = useSelector(store=>store.cartManager)
    // const handleCheckout = () => {
    //     dispatch({type:cart.RESET})
    // }
    React.useEffect(()=>{
        if (!items.length) dispatch(getCartItems())
    }, [total.items, total.price])
    console.log(items)
  return (
    <Flex minH="100vh">
        {
            total.count ? 
            <Flex pt="140px" w="80%" m="auto" direction={'column'} fontFamily={'Arial'}>
                <OverlayLoader isOpen={loading}/>
                
                <Text fontSize={'18px'} color="#222222" mb="10px">My Bag</Text>
        
                <Flex w="100%"  gap="35px" direction={{base:"column", md:"row"}}>
                    <LeftPart/>
                    <RightPart/>     
                </Flex>
            </Flex>:<Default/>
        }
    </Flex>
  )
}

export default Cart