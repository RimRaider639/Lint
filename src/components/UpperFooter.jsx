import { Grid, Stack } from '@chakra-ui/layout'
import React from 'react'
import { Box, Divider, Flex, InputRightElement, Input, HStack, InputGroup, Text, Button, GridItem } from "@chakra-ui/react"
import { ImFacebook2 } from "react-icons/im"
import { FaTwitterSquare, FaPinterestSquare, FaInstagram } from "react-icons/fa"
import { IconButton } from "@chakra-ui/react";
import LowerFooter from './LowerFooter'
const foot = [
    {
        id: 1, title: "Customer Service",
        children: {
            'category': [
                'Contact Us',
                'Find My Orders',
                'Returns & Refunds',
                'Find a Store',
                'Find a Registry',
                'Find a Wish List',
                'Shipping Info',
                'Pickup & Delivery',
                'Policies & Guidelines',
                'FAQs'
            ]


        }
    },
    {
        id: 2, title: "Belk Rewards+Credit Card",
        children: {
            'category': [
                'Pay My Bills',
                'Manag My Account',
                'Belk Rewards+Credit Card Benifits',

            ]


        }
    },
    {
        id: 3, title: "About Belk",
        children: {

            'category': [
                'Career',
                'Catalogs & Ads',
                'Brands We Carry',
                'Newsroom',
                'Behind the Brand',
                'Vendor Resources',
                'Store Events',

            ]


        }
    }
]

const Footer = () => {
    return (
        <>
            <Divider borderColor="gray.500" borderWidth="2px" mt='2rem' w='99%' />

            <Grid w="80%" margin={'auto'} mt='2rem' textAlign='center' templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)' }} justifyContent={"space-evenly"} gap={{ sm: 5, md: 15, lg: 15 }}>
                {
                    foot?.map(el => <GridItem key={el.id} textAlign='left' >
                        <Text w='auto' textAlign={'center'} fontWeight='400' fontSize={{ sm: "18px", lg: "25px" }}>{el.title}</Text>
                        <Divider borderColor="gray.700" orientation='horizontal' borderWidth="1px" />
                        <Box mt='20px' ml='50px'>
                            {
                                el.children.category?.map(item => {
                                    return <Box key={item} w='50%' textAlign={'center'} m='auto' >
                                        <Text textAlign={'left'} pl={{ sm: '20px', lg: '20px' }} lineHeight={'30px'}>{item}</Text>

                                    </Box>

                                }
                                )
                            }
                        </Box>
                    </GridItem>

                    )

                }
            </Grid>
            <Stack id='stay_mail' w="80%" margin={'auto'} mt='30px'>
                <HStack margin='auto'>
                    <Text textAlign={'center'} fontWeight='400' fontSize={{ sm: "18px", lg: "25px" }}>Stay Connnect</Text>
                    <IconButton icon={<ImFacebook2 />}
                        isRound={true}
                        fontSize={{sm:"5px",md:"30px",lg:"'57px'"}}
                        hover={{ cursor: "pointer", color: "blackAlpha.700" }} />
                    <IconButton icon={<FaTwitterSquare />}
                        isRound={true}
                        fontSize={{sm:"5px",md:"30px",lg:"'57px'"}}
                        hover={{ cursor: "pointer", color: "blackAlpha.700" }} />
                    <IconButton icon={<FaPinterestSquare />}
                        isRound={true}
                        fontSize={{sm:"5px",md:"30px",lg:"'57px'"}}
                        hover={{ cursor: "pointer", color: "blackAlpha.700" }} />
                    <IconButton icon={<FaInstagram />}
                        isRound={true}
                        fontSize={{sm:"5px",md:"30px",lg:"'57px'"}}
                        hover={{ cursor: "pointer", color: "blackAlpha.700" }} />
                </HStack>
                <HStack>
                    <Text>Get $10 off with email sign-up! Use on top of coupons.</Text>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            placeholder='Enter password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' backgroundColor={'blackAlpha.900'} color='whiteAlpha.900' _hover={{ backgroundColor: 'blackAlpha.700' }}>Join
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </HStack>
            </Stack>
            <LowerFooter />
        </>
    )
}

export default Footer