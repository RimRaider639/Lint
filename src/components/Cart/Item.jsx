import React from 'react'
import fallbackSrc from '../../assets/default-image.jpg'

import {Flex, Text, Image, Select, Switch, Divider, RadioGroup, Radio} from "@chakra-ui/react"
import { updateCartItem, removeCartItem } from '../../redux/cart/cart.actions'
import { useDispatch } from 'react-redux'

//colors
const blue = `rgb(0,118,190)`
const red = `#cc0000`

const Item = ({cartItem}) => {
    const {productID:item, count, _id} = cartItem
    const dispatch = useDispatch()
    const [qtd, setQtd] = React.useState(count)
    const [days, setDays] = React.useState("60 Days (Recommended)")
    const handleRemove = () => {
        dispatch(removeCartItem(_id))
    }
    React.useEffect(()=>{
        dispatch(updateCartItem(_id, qtd))
    }, [qtd])
  return (
    <Flex border="1px solid #e4e4e4"  p="1em 2em" bgColor={'white'} direction={'column'} minH="300px">
        <Flex w="100%" gap="25px">
            <Flex w="15%" h="150px" align={'center'}>
                <Image src={item.image[0]} alt={item.product_name} w="100%" h="fit-content" fallbackSrc={fallbackSrc}/>
            </Flex>
            <Flex direction={'column'} flexGrow={1} gap="20px">
                <Flex flexGrow={1} justify={'space-between'} fontSize={'14px'} h="65%">
                    <Flex w="40%" direction={'column'} justify={'space-between'}>
                        <Flex direction={'column'}>
                            <Text  fontWeight={'700'}>{item.product_name}</Text>
                            <Text>PID: {item.pid}</Text>
                            <Text>₹{item.discounted_price.toFixed(2)}</Text>
                        </Flex>
                        <Flex>
                            <Text borderBottom={'1px solid #0076be'}  _hover={{borderBottom:'none'}} color='#0076be' cursor='pointer'>Edit</Text>
                        </Flex>
                        
                    </Flex>
                    <Flex w="40%" direction={'column'} align={'flex-end'} justify={'space-between'} fontWeight={'700'}>
                        <Flex gap="10px" w="100px" align={'center'}>
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
                            <Text borderBottom={'1px solid #0076be'}  _hover={{borderBottom:'none'}} cursor='pointer' onClick={handleRemove}>Remove</Text>
                            <Text borderBottom={'1px solid #0076be'}  _hover={{borderBottom:'none'}} cursor='pointer'>Move to Wish List</Text>
                        </Flex>
                        
                    </Flex>
                </Flex>
                <Flex direction={'column'} fontSize={'14px'} gap="5px">
                    <Flex align={'center'} gap="5px">
                        <Switch id='email-alerts' size={"sm"}/>
                        <Text fontWeight='700'>Auto-Replenish: FREE shipping on all orders</Text>
                    </Flex>
                    <Text ml="20px">Sign up for Auto-Replenish and save 15% on your upcoming shipments, and 20% off your 3rd shipment. Savings will be applied to the item's list price of $28.00.</Text>
                    <Flex w="400px" align={'center'}>
                        <Text w="50%" pl="20px" fontWeight={'700'}>Send every:</Text>
                        <Select borderRadius={0} size={'sm'} value={qtd} onChange={e=>setDays(+e.target.value)}>
                                <option value={"60 Days (Recommended)"}>60 Days (Recommended)</option>
                                <option value={"90 Days"}>90 Days</option>
                                <option value={"120 Days"}>120 Days</option>
                                <option value={"180 Days"}>180 Days</option>
                        </Select>
                    </Flex>
                    <Divider m="10px 0"/>
                    <Flex gap="5px">
                        <Text color={red}>Free Gift Available</Text>
                        <Text color={red} borderBottom={'1px solid #cc0000'}  _hover={{borderBottom:'1px solid white'}} cursor='pointer'>Add Free Gift</Text>
                    </Flex>
                    <Divider  m="10px 0"/>
                    <Text fontWeight={'700'}>How to get it</Text>
                        <RadioGroup defaultValue='1'>
                            <Flex gap={2} direction='column'>
                                <Radio colorScheme='black' value='1'>
                                <Text fontSize={'14px'}><b>Ship It</b> - Arrives in 3 to 10 days </Text>
                                In stock.
                                </Radio>
                                <Radio colorScheme='black' value='2'>
                                <Text fontSize={'14px'} fontWeight="700">FREE Store Pickup Today </Text>
                                </Radio>
                            </Flex>
                        </RadioGroup>
                </Flex>
            </Flex>
            
        </Flex>
       
    </Flex>
  )
}

export default Item