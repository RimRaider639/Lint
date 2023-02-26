import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Flex} from "@chakra-ui/react"
import { getCartItems } from "../../redux/cart/cart.actions";
import {Link, useLocation} from "react-router-dom"
import {BsBagFill} from "react-icons/bs"
const Bag = ({...styles}) => {
    
  const dispatch = useDispatch()
  const {total} = useSelector(store=>store.cartManager)
  const loc = useLocation()
  React.useEffect(()=>{
    dispatch(getCartItems())
  }, [loc.pathname])
  React.useEffect(()=>{
    console.log(total)
  }, [total.items, total.price])
  return (
    <Flex direction={"column"}>
    <Link to="/cart">
            <Flex position="absolute" color="white"  w="30px" h="35px" justify={'center'} align="center">{total.items}</Flex>
              <BsBagFill {...styles}/>
            </Link>
            <Flex>₹{total.price}</Flex>
    </Flex>
  )
}

export default Bag