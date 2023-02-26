import React from 'react'
import { Divider, Grid, GridItem, HStack, Stack, Text, Slide, Box, SimpleGrid, useDisclosure } from "@chakra-ui/react"
import {

    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    IconButton
} from '@chakra-ui/react';
import "../styles/Footer.css"
import { BiDownArrow, BiUpArrow } from "react-icons/bi"
interface StatsCardProps {
    title: string;
    stat: string;
}
function StatsCard(props: StatsCardProps) {
    const { title, stat } = props;
    return (
        <Stat
            px={{ base: 4, md: 8 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <StatLabel fontWeight={'medium'} isTruncated>
                {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {stat}
            </StatNumber>
        </Stat>
    );
}


const LowerFooter = () => {

    const { isOpen, onToggle } = useDisclosure()


    return (
        <>
            <Divider borderColor="gray.500" borderWidth="2px" mt='2rem' w='99%' />
            <Grid templateColumns={{ sm: 'repeat(4, 1fr)', md: 'repeat(6, 1fr)', lg: 'repeat(9, 1fr)' }} margin='auto' justifyContent={'space-evenly'} pb={'50px'}>
                <GridItem>
                    <Stack direction='row' h={{sm:"15px",md:"25px",lg:"80px"}} p={4}>
                        <Text>Terms of Use</Text>
                        <Divider orientation='vertical' borderColor="gray.500" borderWidth="1px" />
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack direction='row' h='80px' p={4}>
                        <Text>Privacy Policy</Text>
                        <Divider orientation='vertical' borderColor="gray.500" borderWidth="1px" />
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack direction='row' h='80px' p={4}>
                        <Text>State-Specific Privacy Notice</Text>
                        <Divider orientation='vertical' borderColor="gray.500" borderWidth="1px" />
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack direction='row' h='80px' p={4}>
                        <Text>Enable Accessibility</Text>
                        <Divider orientation='vertical' borderColor="gray.500" borderWidth="1px" />
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack direction='row' h='80px' p={4}>
                        <Text>Accessibility Statement</Text>
                        <Divider orientation='vertical' borderColor="gray.500" borderWidth="1px" />
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack direction='row' h='80px' p={4}>
                        <Text>Do Not Sell or Share My Personal Info</Text>
                        <Divider orientation='vertical' borderColor="gray.500" borderWidth="1px" />
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack direction='row' h='80px' p={4}>
                        <Text>CA Transparency in Supply Chain</Text>
                        <Divider orientation='vertical' borderColor="gray.500" borderWidth="1px" />
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack direction='row' h='80px' p={4}>
                        <Text>Site Map</Text>
                        <Divider orientation='vertical' borderColor="gray.500" borderWidth="1px" />
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack direction='row' h='80px' p={4}>
                        <Text>Feedback</Text>
                        {/* <Divider orientation='vertical' borderColor="gray.500" borderWidth="1px" /> */}
                    </Stack>
                </GridItem>
            </Grid>
            <Text color={'gray.500'} textAlign={'center'} mt={'5px'} >© 2023 LINT, Inc. & LINT eCommerce LLC. All Rights Reserved.</Text>

            <HStack id='bottom_pop'
                boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}

            >
                {/* <Button onClick={onToggle} bg={'blue.400'} color={'white'}>See one more cool! feature</Button> */}
                <Grid templateColumns={'repeat(1, 1fr)'} margin={'auto'} gap={0} alignItems='center'>
                    <GridItem alignItems={'center'} >
                        <IconButton icon={<BiUpArrow />}
                            isRound={true}
                            ml='20px'
                            fontSize='25px'
                            hover={{ cursor: "pointer", color: "blackAlpha.700" }} onClick={onToggle} />
                        {/* <Text ml='22px'><BiUpArrow onClick={onToggle} fontSize={'30px'}  /></Text> */}
                        <Text onClick={onToggle} textAlign='center' >Today's Offers!</Text>
                    </GridItem>
                </Grid>
                <Slide direction='bottom' in={isOpen} w="100%">

                    <Box
                    w="100%"
                        p='40px'
                        color='white'
                        mt='4'
                        bg='teal.500'
                        rounded='md'
                        shadow='md'
                        // z-Index={'1000'}
        border='1px solid red'
                    >
                        <IconButton icon={<BiDownArrow />}
                            isRound={true}
                            ml='48%'
                            mb={'20px'}
                            fontSize='30px'
                            color={'blackAlpha.900'}
                            hover={{ cursor: "pointer", color: "blackAlpha.700" }} onClick={onToggle} />
                        {/* <BiDownArrow onClick={onClose} /> */}
                        <Box  w="100%" maxW="8xl" mx={'auto'} pt={1} px={{ base: 2, sm: 12, md: 17 }}>
                            {/* <chakra.h1
                                textAlign={'center'}
                                fontSize={'4xl'}
                                py={10}
                                fontWeight={'bold'}>
                                What I have achieved ?
                            </chakra.h1> */}
                            <SimpleGrid  columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                                <StatsCard title={'Online Only'} stat={'Today only: up to 55% off select brands online with your Belk Rewards+ credit card & coupon.'} />
                                <StatsCard title={'Online & In-Store'} stat={'Extra 10% off clearance purchases with Belk Rewards+ credit card & coupon'} />
                                <StatsCard title={'Online Only'} stat={'Get your wardrobe ready for spring with up to 50% off select brands online.'} />
                            </SimpleGrid>
                        </Box>
                    </Box>
                </Slide>
            </HStack>
        </>
    )
}

export default LowerFooter