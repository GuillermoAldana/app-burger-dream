import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import Burger from '../components/burger/burger';

const BurgerPage: React.FC = () =>{

    return(
        <Box p={4} display={{ base: 'flex', md: 'flex' }}>
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={8}>
            <Burger></Burger>
        </SimpleGrid>
    </Box>
    )
}
export default BurgerPage;