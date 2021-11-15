import React from "react";
import {  Box, FormControl, FormLabel, Input, Center, Stack, Button, Text, useColorModeValue } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

interface LoginBoxProps {
    
}

const LoginBox: React.FC<LoginBoxProps> = () => {

    return ( 
        <React.Fragment>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={4}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email</FormLabel>
                                <Input type="email" placeholder='Ingrese un email @' />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder='Ingrese una contraseña' />
                            </FormControl>
                            <Stack spacing={10}>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Iniciar sesion
                                </Button>
                                <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
                                    <Center>
                                        <Text>Iniciar sesion con Google</Text>
                                    </Center>
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
        </React.Fragment>
     );
}
 
export default LoginBox;