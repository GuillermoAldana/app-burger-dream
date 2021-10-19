import React from "react";
import {Stack, Text, Image, useColorModeValue } from '@chakra-ui/react';

interface AboutIconProps {
    title: string;
    image: string;
    _id?: number;
}

const AboutIcon = (props : AboutIconProps) => {
    return (
        <React.Fragment>
            <Stack align='center'>
                <Text
                    textTransform={'uppercase'}
                    color={'gray.500'}
                    fontWeight={600}
                    fontSize={'sm'}
                    bg={useColorModeValue('gray.100', 'gray.900')}
                    p={2}
                    alignSelf={'center'}
                    rounded={'md'}>
                    {props.title}
                </Text>
                <Image src={props.image}
                    borderWidth="1px"
                    border='solid'
                    borderColor='gray.100'
                    borderRadius="lg"
                    alt="Portada"
                    width='125px'
                    objectFit="cover" />
            </Stack>
        </React.Fragment>
    );
}

export default AboutIcon;