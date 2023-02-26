import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../redux/cart/cart.actions'
import Item from '../components/Cart/Item'
import { Flex, Text, Divider, Image, Button } from '@chakra-ui/react'
import {FaShippingFast} from 'react-icons/fa'
import {AiOutlineLock} from 'react-icons/ai'

//colors
const blue = `rgb(0,118,190)`
const red = `#cc0000`

const Cart = () => {
    const dispatch = useDispatch()
    const {items, total, loading, error, message} = useSelector(store=>store.cartManager)
    React.useEffect(()=>{
        dispatch(getCartItems())
    }, [])
    console.log(items)
  return (
    total.count && 
    <Flex pt="140px" w="80%" m="auto" direction={'column'} fontFamily={'Arial'}>
        <Text fontSize={'18px'} color="#222222" mb="10px">My Bag</Text>

        <Flex w="100%"  gap="35px" >

            <Flex direction={'column'} borderRadius={'10px'} p="1em" bgColor={'#f5f5f5'} flexGrow={1} overflowY={'scroll'} maxH="80vh">
                <Text fontSize={'18px'} color="#222222">Shipping by Belk</Text>
                <Text color='#767676' fontSize={'14px'}>{total.items} items</Text>
                <Flex direction={'column'}  gap="20px" mt="20px">
                    {items.map(item=><Item key={item._id} cartItem={item}/>)}
                </Flex>   
            </Flex>

            <Flex direction={'column'} w="60%">
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
                
                <Flex direction={'column'} h="120px" justify={'space-evenly'} align="center" fontSize={"14px"}>
                    <Flex justify={'center'} align="center" gap="5px" w="100%">
                        <Divider h="5px" bgColor="rgb(0,118,190)" borderRadius={'3px'}/>
                        <FaShippingFast fontSize={"30px"}/>                    
                    </Flex>
                    <Text color="#222222">Congrats! You’ve earned FREE Shipping.</Text>
                    <Text color={red}>Don’t forget your free gift ... you earned it!</Text>
                </Flex>
                <Button h="50px" bgColor={blue} color="white" m="5px 0" leftIcon={<AiOutlineLock/>}>Secure Checkout</Button>
                <Button h="50px" bgColor="white" m="5px 0" border="1px solid black"><Image src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png" alt="PayPal Logo"/></Button>
                <Button h="50px" bgColor="white" m="5px 0" border="1px solid black"><Image src="afterpay_logo.png" alt="AfterPay Logo" maxH="70%"/></Button>
            </Flex>
            
    </Flex>
    </Flex>
  )
}

export default Cart