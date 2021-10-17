import { Flex, SimpleGrid, Box } from '@chakra-ui/layout';
import React from 'react';
import PresentLayout from '../components/home/presentLayout';
import AboutLayout from '../components/home/aboutLayout';
const Home = () => {
    return(
        <Box p={4} display={{ base: 'flex', md: 'flex' }}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                
            </SimpleGrid>
        </Box>
    )
};

export default Home;