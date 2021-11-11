import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Box, IconButton, Divider, useColorModeValue, Flex, Stat, StatLabel, StatNumber, Image } from '@chakra-ui/react';
interface BurgerCartItemProps {
    Title: string;
    Price: number;
    Unit: number;
    ImageBurger: string
    Id: number;
    HandleDelete: Function;
}
const BurgerCartItem = ({ Title, Price, Unit, ImageBurger, Id, HandleDelete } : BurgerCartItemProps) => {
    
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 4, md: 4 }}>
                    <Flex w={{ base: "100%", md: "100%" }} display={{ md: "flex" }}>
                        <Box w={{ base: "100%", md: "70%" }} margin={1}>
                            <StatLabel fontWeight={'medium'} fontSize={'xl'}>
                                {Title}
                            </StatLabel>
                            <Box w={'100%'} margin={1}>
                            <IconButton 
                            onClick={()=>HandleDelete(Id)}
                            aria-label="Trash" 
                            size="sm" 
                            colorScheme="teal" 
                            mr={3} 
                            icon={<BsFillTrashFill />}>

                            </IconButton>
                            </Box>
                        </Box>
                        <Box w={{ base: "5%", md: "5%", lg: "5%" }} margin={1}>
                            <Divider orientation="vertical" />
                        </Box>

                        <Box w={{ base: "100%", md: "50%", lg: "40%" }} margin={1}>
                            <StatLabel>Price</StatLabel>
                            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                                {Price}
                            </StatNumber>
                        </Box>
                        <Box w={{ base: "100%", md: "50%", lg: "20%" }} margin={1}>
                            <StatLabel>Unit</StatLabel>
                            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                                {Unit}
                            </StatNumber>
                        </Box>
                    </Flex>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    <Image
                        borderRadius="5px"
                        boxSize="100px"
                        objectFit="cover"
                        width='100px'
                        src={ImageBurger}
                        alt={Title}
                    />
                </Box>
            </Flex>
        </Stat>
    );
};
export default BurgerCartItem;