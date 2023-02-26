import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Alert,
    AlertIcon,
    Text,
    Flex,
    Image,
    Divider,
    Stack,
  } from '@chakra-ui/react'
import Carousel from "better-react-carousel"
import useFetch from '../../Hooks/useFetch'
import fallbackSrc from '../../assets/default-image.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { FaShippingFast } from 'react-icons/fa'
import { getCartItems } from '../../redux/cart/cart.actions'
import { useNavigate } from 'react-router-dom'
import { blue, red, darkBlue } from './colors'

const topSellers = [
    { id: 1, title: "Item 1", imageUrl: "https://belk.scene7.com/is/image/Belk?layer=0&src=1804530_13023HOK000012_A_340&$DWP_PRODUCT_REC_DESKTOP$", desc: "Wonderly Women's Long Sleeve Shirred Yoke Top", price: "$49.50", coupon: "$24.75" },
    { id: 2, title: "Item 2", imageUrl: "https://belk.scene7.com/is/image/Belk?layer=0&src=5900053_6MNY_A_266_T10L00&layer=comp&$DWP_PRODUCT_REC_DESKTOP$", desc: "Wonderly Women's Long Sleeve Drapey Side Slit Top", price: "$34.50", coupon: "$28.75" },
    { id: 3, title: "Item 3", imageUrl: "https://belk.scene7.com/is/image/Belk?layer=0&src=2900856_25034586_A_410_T10L00&layer=comp&$DWP_PRODUCT_REC_DESKTOP$", desc: "Wonderly Women's Long Sleeve Drapey Side Slit Top", price: "$51.50", coupon: "$24.75" },
    { id: 4, title: "Item 4", imageUrl: "https://belk.scene7.com/is/image/Belk?layer=0&src=1804303_30182395_A_460&$DWP_PRODUCT_REC_DESKTOP$", desc: "Kim Rogers Women's Pull Drapey Side On Denim Jeans", price: "$51.75", coupon: "$24.75" },
    { id: 5, title: "Item 5", imageUrl: "https://belk.scene7.com/is/image/Belk?layer=0&src=1804530_13023HOK000023_A_130&$DWP_PRODUCT_REC_DESKTOP$", desc: "Wonderly Women's Blouson Sleeve Textured Top", price: "$49.50", coupon: "$24.75" },
    { id: 6, title: "Item 6", imageUrl: "https://belk.scene7.com/is/image/Belk?layer=0&src=2900637_40R8STFR1L_A_230_T10L00&layer=comp&$DWP_PRODUCT_REC_DESKTOP$", desc: "MICHAEL Michael Kors Women's Sutton Moc Flats", price: "$115.50", coupon: "$89.75" },
    { id: 7, title: "Item 7", imageUrl: "https://belk.scene7.com/is/image/Belk?layer=0&src=1804530_13023HOK000000_A_218&$DWP_PRODUCT_REC_DESKTOP$", desc: "Wonderly Women's Long Sleeve Drapey Side Slit Top", price: "$34.50", coupon: "$17.75" },
    { id: 8, title: "Item 8", imageUrl: "https://belk.scene7.com/is/image/Belk?layer=0&src=2601173_U20652H_A_001&$DWP_PRODUCT_REC_DESKTOP$", desc: "HUE Hue Women's Ultra Soft Denim Leggings", price: "$38.50", coupon: "$33.75" },
    { id: 3, title: "Item 3", imageUrl: "https://belk.scene7.com/is/image/Belk?layer=0&src=2900856_25034586_A_410_T10L00&layer=comp&$DWP_PRODUCT_REC_DESKTOP$", desc: "Wonderly Women's Long Sleeve Drapey Side Slit Top", price: "$51.50", coupon: "$24.75" }
]

function AddedToCartModal({isOpen, onClose, prodID}) {
    const {loading, error, data, fetch} = useFetch(`https://wide-eyed-pinafore-duck.cyclic.app/cart?productID=${prodID}`)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {total, items} = useSelector(store=>store.cartManager)
    React.useEffect(()=>{
        if (!items.length) dispatch(getCartItems())
        fetch({
            headers: {token:localStorage.getItem('token')}
        }, 2000)
    }, [items.length])
    React.useEffect(()=>{
        console.log("cartItem", data)
    }, [data])
    console.log("MODALLLALLAL", data)
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
            <Alert status='success' variant='subtle'>
                <AlertIcon/>
                <Text fontSize="18px" color="#4d7a39">1 Item Added to Your Bag</Text>
            </Alert>
            </ModalHeader>
            <ModalCloseButton mr="20px" mt="20px"/>
            <ModalBody>
                {loading ? (<Flex>
                please wait..    
                </Flex>)
                :error?(<Flex>
                    Something went wrong..    
                    </Flex>)
                :(<Flex direction={'column'}>
                    <Stack direction={'row'}>
                    <Flex gap="20px" w="50%" borderRight="1px solid #e9e9e9" p="5px">
                        <Flex w="30%">
                            <Image src={data[0]?.productID?.image[0]} alt={data[0]?.productID?.product_name} w="100%" h="fit-content" fallbackSrc={fallbackSrc}/>
                        </Flex>
                        <Flex direction={'column'}>
                                <Text _hover={{textDecoration:"underline"}} fontWeight={'700'}>{data[0]?.productID?.product_name}</Text>
                                <Text>PID: {data[0]?.productID?.pid}</Text>
                                <Text>Qtd: {data[0]?.count}</Text>
                                <Text><strike>₹{data[0]?.productID?.retail_price.toFixed(2)}</strike></Text>
                                <Text color={red} fontWeight={'700'}>₹{data[0]?.productID?.discounted_price.toFixed(2)}</Text>
                        </Flex>
                    </Flex>
                    <Flex flexGrow={1 } direction="column" p="5px">
                        <Flex justify={'space-between'} flexGrow={1}>
                            <Text>Bag Subtotal ({total.items} items):</Text>
                            <Text fontSize={'20px'} fontWeight='700'>₹{total.price.toFixed(2)}</Text>
                        </Flex>
                        <Flex direction="column" gap="10px" mt="10px" align={'center'}>
                            <Flex justify={'center'} align="center" gap="5px" w="100%">
                                <Divider h="5px" bgColor="rgb(0,118,190)" borderRadius={'3px'}/>
                                <FaShippingFast fontSize={"30px"}/>                    
                            </Flex>
                            <Text color="#222222">Congrats! You’ve earned FREE Shipping.</Text>
                            <Button onClick={()=>navigate("/cart")} h="50px" bgColor={blue} color="white" m="5px 0" fontWeight={'700'} w="100%" _hover={{bgColor:darkBlue}}>View Bag & Checkout</Button>
                            <Button h="50px" variant={'outline'} outline={'2px solid'} outlineColor={blue} _hover={{outlineWidth:"3px"}} color={blue} m="5px 0" fontWeight={'700'} w="100%">Continue Shopping</Button>
                        </Flex>
                    </Flex>
            </Stack>
            <Text fontSize={'18px'} color="black" mt="10px">Customers also bought</Text>
            <Divider m="5px 0 20px 0"/>
            <Carousel cols={5} gap={6} scrollSnap={true} loop={true}
                            mobileBreakpoint={[
                                { width: 500, itemsToShow: 5 },
                                { width: 768, itemsToShow: 2 },
                                { width: 1200, itemsToShow: 3 },
                            ]}
                        >
                            {topSellers.map((item) => (
                                <Carousel.Item key={item}>
                                    <Flex direction={'column'} fontSize={'14px'} w="130px">
                                        <Image border={'1px solid #e9e9e9'} margin='auto' w="100%" src={item.imageUrl} alt={item.title} />
                                        <Text>{item.desc}</Text>
                                        <Flex gap="5px" m="10px 0">
                                            <Text fontWeight={'bold'} color={red}>{item.coupon}</Text>
                                            <Text><strike>{item.price}</strike></Text>
                                        </Flex>
                                    </Flex>

                                </Carousel.Item>
                            ))}
            </Carousel>
            </Flex>)}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default AddedToCartModal