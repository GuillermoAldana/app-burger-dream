import { Grid, GridItem } from '@chakra-ui/layout';
import React from 'react';

const Home = () => {
    return(
        <Grid
        h="500px"
        autoRows="repeat(1, 1fr)"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}
        >
        <GridItem colSpan={2} rowSpan={2} bg="tomato" />
        <GridItem colSpan={3} bg="blue.500" />
        <GridItem colSpan={3} bg="papayawhip" />
        
        </Grid>
    );
};

export default Home;