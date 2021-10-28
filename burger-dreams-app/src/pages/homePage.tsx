import { SimpleGrid, Box } from '@chakra-ui/layout';
import React from 'react';
import Home from '../components/home/index';
const HomePage = () => {
    return(
        <Box p={4} display={{ base: 'flex', md: 'flex' }}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Home />
            </SimpleGrid>
        </Box>
    )
};

export default HomePage;