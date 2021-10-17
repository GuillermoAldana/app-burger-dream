import { Box, Text, Heading, Stack } from '@chakra-ui/react';
import React from 'react';

const AboutLayout = () =>
{
    return(
        <React.Fragment>
            <Box mx='10' mt='3'>
            <Stack spacing={2}> 
                <Heading as="h1" size="4xl">
                    Burger Dreams
                </Heading>
                <Text fontSize="4xl">
                    Burgers Dreams  - Las mejores hamburguesas
                </Text>
            </Stack> 
            </Box>
        </React.Fragment>
    )
}
export default AboutLayout;