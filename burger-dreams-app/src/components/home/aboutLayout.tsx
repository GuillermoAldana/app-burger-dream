import { Box, Text, Heading, Divider, Stack } from '@chakra-ui/react';
import React from 'react';

const AboutLayout = () =>
{
    return(
        <React.Fragment>
            <Box mx='10' mt='50px' ml='5'>
            <Stack spacing={2}> 
                <Heading as="h1" size="4xl">
                    Burger <Text as='span' color='#f36767'>Dreams</Text>
                </Heading>
                <Divider />
                <Text fontSize="lg" mt='20px'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
                Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
            </Stack> 
            </Box>
        </React.Fragment>
    )
}
export default AboutLayout;