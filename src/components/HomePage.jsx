import React from 'react'
import { Stack, Box, Divider, Flex, VStack, Image, Grid, HStack, Center, Text, Button, GridItem } from "@chakra-ui/react"
import Carousel from "better-react-carousel"
import "../styles/Hamburger.css"
const HomePage = () => {
    const items = [
        { id: 1, title: "Item 1", imageUrl: "https://belk.scene7.com/is/image/Belk/wk04_022123_hp_4c_carl2?$DWP_PHOTO$" },
        { id: 2, title: "Item 2", imageUrl: "https://belk.scene7.com/is/image/Belk/wk04_022123_hp_4c_carl3?$DWP_PHOTO$" },
        { id: 3, title: "Item 3", imageUrl: "https://belk.scene7.com/is/image/Belk/wk04_022123_hp_4c_carl4?$DWP_PHOTO$" },
        { id: 4, title: "Item 4", imageUrl: "https://belk.scene7.com/is/image/Belk/wk04_022123_hp_4c_carl5?$DWP_PHOTO$" },
        { id: 5, title: "Item 5", imageUrl: "https://belk.scene7.com/is/image/Belk/wk04_022123_hp_4c_carl1?$DWP_PHOTO$" },
        { id: 6, title: "Item 6", imageUrl: "https://belk.scene7.com/is/image/Belk/wk04_022123_hp_4c_carl2?$DWP_PHOTO$" },
        { id: 7, title: "Item 7", imageUrl: "https://belk.scene7.com/is/image/Belk/wk04_022123_hp_4c_carl3?$DWP_PHOTO$" },
        { id: 8, title: "Item 8", imageUrl: "https://belk.scene7.com/is/image/Belk/wk04_022123_hp_4c_carl4?$DWP_PHOTO$" },

    ];

    const images = [
        { id: 1, title: "Item 1", imageUrl: "https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh5_carl2?$DWP_PHOTO$" },
        { id: 2, title: "Item 2", imageUrl: "https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh5_carl3?$DWP_PHOTO$" },
        { id: 3, title: "Item 3", imageUrl: "https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh5_carl1?$DWP_PHOTO$" }

    ]

    const categories = [
        { id: 1, title: "Item 1", imageUrl: "https://belk.scene7.com/is/image/Belk/wk03_021523_hp_6c_carl2?$DWP_PHOTO$" },
        { id: 2, title: "Item 2", imageUrl: "https://belk.scene7.com/is/image/Belk/wk03_021523_hp_6c_carl3?$DWP_PHOTO$" },
        { id: 3, title: "Item 3", imageUrl: "https://belk.scene7.com/is/image/Belk/wk03_021523_hp_6c_carl4?$DWP_PHOTO$" },
        { id: 4, title: "Item 4", imageUrl: "https://belk.scene7.com/is/image/Belk/wk03_021523_hp_6c_carl5?$DWP_PHOTO$" },
        { id: 5, title: "Item 5", imageUrl: "https://belk.scene7.com/is/image/Belk/wk03_021523_hp_6c_carl6?$DWP_PHOTO$" },
        { id: 6, title: "Item 6", imageUrl: "https://belk.scene7.com/is/image/Belk/wk03_021523_hp_6c_carl7?$DWP_PHOTO$" },
        { id: 7, title: "Item 7", imageUrl: "https://belk.scene7.com/is/image/Belk/wk03_021523_hp_6c_carl8?$DWP_PHOTO$" },
        { id: 8, title: "Item 8", imageUrl: "https://belk.scene7.com/is/image/Belk/wk04_022123_hp_6c_carl1?$DWP_PHOTO$" },
    ]

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
    const btn1 = [
        { id: 1, title: "Men's" },
        { id: 2, title: "Women's Shoes" },
        { id: 3, title: "Perfume" },
        { id: 4, title: "Men's Suits" },
        { id: 5, title: "Women's Boots" },
        { id: 6, title: "Luggage Sets" },
        { id: 7, title: "Women's Watches" },
        { id: 8, title: "Girls Dresses" },
        { id: 9, title: "Comforters" },
    ]

    return (
        <Stack >
            <VStack w={"88%"} margin="auto" mt={'25px'}>
                <Image align={"center"} w="100%" mx="auto" src='https://belk.scene7.com/is/image/Belk/wk01_2023_clinique_gwp_hp?$DWP_PHOTO$' />
                <VStack w={"100%"} >
                    <Box mt={'20px'} w={"100%"}>
                        <Image w="100%" src='https://belk.scene7.com/is/image/Belk/wk04_ws_themed_denim_blue_trans_fh1?$DWP_PHOTO$' />
                        <Image w="100%" src='https://belk.scene7.com/is/image/Belk/wk04_ws_themed_denim_blue_trans_fh2?$DWP_PHOTO$' />
                    </Box>
                </VStack>
                <VStack>
                    <Box w={"100%"} mt={'22px'} >
                        <Carousel cols={4} gap={1} scrollSnap={true} loop={true}
                            mobileBreakpoint={[
                                { width: 500, itemsToShow: 5 },
                                { width: 768, itemsToShow: 2 },
                                { width: 1200, itemsToShow: 3 },
                            ]}
                        >
                            {items.map((item) => (
                                <Carousel.Item key={item}>
                                    <Image margin='auto' w="100%" src={item.imageUrl} alt={item.title} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Box>
                </VStack>
                <VStack w={"100%"}>
                    <Box mt={'20px'} w={"100%"}>
                        <Image mt='25px' w="100%" src='https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh1?$DWP_PHOTO$' alt='logo' /></Box>
                </VStack>
                <VStack w={"100%"} >
                    <Box mt={'20px'} w={"100%"}>
                        <Image w="100%" src='https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh2?$DWP_PHOTO$' />
                        <Image w="100%" src='https://belk.scene7.com/is/image/Belk/wk04_022123_hp_fh3?$DWP_PHOTO$' />
                    </Box>
                </VStack>
                <VStack w={"100%"} >
                    <Grid templateColumns='repeat(3, 1fr)' mt={'20px'} w={"100%"}>
                        <Image w="100%" src='https://belk.scene7.com/is/image/Belk/wk04_2023_ws_general_3c_1?$DWP_PHOTO$' />
                        <Image w="100%" src='https://belk.scene7.com/is/image/Belk/wk04_2023_ws_general_3c_2?$DWP_PHOTO$' />
                        <Image w="100%" src='https://belk.scene7.com/is/image/Belk/wk04_2023_ws_general_3c_3?$DWP_PHOTO$' />
                    </Grid>
                </VStack>
                <VStack w={"100%"}>
                    <Box mt={'15px'} w={"100%"}>
                        <Image mt='25px' w="100%" src='https://belk.scene7.com/is/image/Belk/wk04_2023_haircare_tools_hp?$DWP_PHOTO$' alt='logo' />
                    </Box>
                </VStack>
                <VStack w={"100%"}>
                    <Box w={"100%"}>
                        <Image mt='25px' w="100%" src='https://belk.scene7.com/is/image/Belk/wk04_2023_coupons_hp_fh?$DWP_PHOTO$' alt='logo' />
                    </Box>
                </VStack>
                <VStack w={"100%"}>
                    <Box w={"100%"}>
                        <Image mt='25px' w="100%" src='https://belk.scene7.com/is/image/Belk/wk03_021523_hp_fh3?$DWP_PHOTO$' alt='logo' />
                    </Box>
                </VStack>
                <VStack>
                    <Box w={"100%"} mt={'22px'} >
                        <Carousel cols={1} gap={1} scrollSnap={true} loop={true}
                            mobileBreakpoint={[
                                { width: 500, itemsToShow: 5 },
                                { width: 768, itemsToShow: 2 },
                                { width: 1200, itemsToShow: 3 },
                            ]}
                        >
                            {images.map((item) => (
                                <Carousel.Item key={item}>
                                    <Image margin='auto' src={item.imageUrl} alt={item.title} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Box>
                </VStack>
                <VStack>
                    <Box w={"100%"} mt={'22px'} >
                        <Carousel cols={4} gap={1} scrollSnap={true} loop={true}
                            mobileBreakpoint={[
                                { width: 500, itemsToShow: 5 },
                                { width: 768, itemsToShow: 2 },
                                { width: 1200, itemsToShow: 3 },
                            ]}
                        >
                            {categories.map((item) => (
                                <Carousel.Item key={item}>
                                    <Image margin='auto' w="70%" src={item.imageUrl} alt={item.title} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Box>
                </VStack>
                <VStack w={"100%"} >
                    <Grid templateColumns='repeat(2, 1fr)' mt={'20px'} w={{ sm: "60%", md: "80%", lg: "100%" }}>
                        <Image w="100%" src='https://belk.scene7.com/is/image/Belk/wk33_2022_brplus_combo_nonch_2c1?$DWP_PHOTO$' />
                        <Image w="100%" src='https://belk.scene7.com/is/image/Belk/wk33_2022_brplus_combo_nonch_2c2?$DWP_PHOTO$' />
                    </Grid>
                </VStack>
                <VStack w={"100%"}>
                    <Box w={"100%"}>
                        <Image mt='25px' w="100%" src='https://belk.scene7.com/is/image/Belk/wk36_2022_spec_clearance_bopis_ch_fh1?$DWP_PHOTO$' alt='logo' />
                    </Box>
                </VStack>
                <VStack w={"100%"} >
                    <Grid templateColumns='repeat(4, 1fr)' mt={'20px'} w={"100%"}>
                        <Image w="100%" src='https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_1?$DWP_PHOTO$' />
                        <Image w="100%" src='https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_2?$DWP_PHOTO$' />
                        <Image w="100%" src='https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_3?$DWP_PHOTO$' />
                        <Image w="100%" src='https://belk.scene7.com/is/image/Belk/wk03_2022_services_4c_4?$DWP_PHOTO$' />
                    </Grid>
                </VStack>
                <VStack w={'100%'}>
                    <Text fontSize="24px" textAlign={'left'} mt={'20px'}>Top Sellers</Text>
                    <Divider borderColor="blue.500" borderWidth="2px" />
                </VStack>
                <VStack>
                    <Box mt={'22px'} >
                        <Carousel cols={3} gap={5} scrollSnap={true} loop={true}
                            mobileBreakpoint={[
                                { width: 500, itemsToShow: 5 },
                                { width: 768, itemsToShow: 2 },
                                { width: 1200, itemsToShow: 3 },
                            ]}
                        >
                            {topSellers.map((item) => (
                                <Carousel.Item key={item}>
                                    <VStack boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}>
                                        <Image border={'1px solid gray'} margin='auto' w="50%" src={item.imageUrl} alt={item.title} />
                                        <Text >{item.desc}</Text>
                                        <Text fontWeight={'bold'}>{item.price}</Text>
                                        <Text fontWeight={'bold'} color={'red.900'}>{item.coupon} {"after Coupon"}</Text>
                                    </VStack>

                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Box>
                </VStack>
                <VStack w={'100%'}>
                    <Text fontSize="24px" align="left" mt={'20px'}> Belk - Shop & Save Today</Text>
                    <Divider borderColor="blue.500" borderWidth="2px" />
                </VStack>
                <VStack>
                    <Text mt={'20px'} align="left">
                        From luggage sets to crossbody bags and fine jewelry, you'll find what you're shopping for (and so much more!) on belk.com. Shop designer handbags from many brands including Brahmin and Michael Kors, skincare and makeup from your favorites like Estée Lauder and Clinique or men's suits and sport coats from stylish brands like Tommy Hilfiger. Get chic in a variety of shoes for women, get active in Nike® or get outdoors in Columbia and Sperry®. Update your home with bedspreads, comforter sets and new cookware. Create picture-perfect looks with our large selection of kid's and baby clothes. Treat yourself to something new with our wide variety of purses, jewelry and accessories. If you're searching for luxury gifts, shop our selection of designer watches and Le Vian® jewelry. No matter your style or your lifestyle, you'll find something you love at Belk. Happy shopping!
                    </Text>
                </VStack>
                <VStack w={'100%'}>
                    <Text fontSize="24px" align="left" mt={'20px'}>Trending Categories</Text>
                    <Divider borderColor="blue.500" borderWidth="2px" />
                </VStack>
                {/* <Grid  >
                    {
                        btn1?.map(el=><GridItem key={el.id} templateColumns={{sm:'repeat(2, 1fr)',md:'repeat(5, 1fr)',lg:'repeat(9, 1fr)'}}>
                             {el.title}
                          
                        </GridItem>)
                    }
                </Grid> */}
            </VStack>
        </Stack>
    )
}

export default HomePage