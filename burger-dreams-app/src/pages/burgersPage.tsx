import { Box, SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import Burger from '../components/burger';

const BurgerPage: React.FC = () =>{

    return(
        <Box p={2}>
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={8}>
            <Burger></Burger>
        </SimpleGrid>
    </Box>
    )
}
export default BurgerPage;