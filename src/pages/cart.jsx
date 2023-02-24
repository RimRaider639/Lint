import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../redux/cart/cart.actions'
import Item from '../components/Cart/Item'
import { Flex } from '@chakra-ui/react'

const Cart = () => {
    const dispatch = useDispatch()
    const {items, count, loading, error} = useSelector(store=>store.cartManager)
    React.useEffect(()=>{
        dispatch(getCartItems())
    }, [])
    console.log(items)
  return (
    count && <Flex direction={'column'}>
        {items.map(item=><Item key={item._id} cartItem={item}/>)}
    </Flex>
  )
}

export default Cart