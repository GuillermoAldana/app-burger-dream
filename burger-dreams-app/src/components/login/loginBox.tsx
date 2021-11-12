import React from "react";
import { useFormik } from 'formik';
import {  Box, FormControl, FormLabel, Input, Center, Stack, Button, Text, useColorModeValue } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
interface LoginBoxProps {
    
}

const LoginBox: React.FC<LoginBoxProps> = () => {
    const login = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
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
                                    Sign in
                                </Button>
                                <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
                                    <Center>
                                        <Text>Sign in with Google</Text>
                                    </Center>
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
        </React.Fragment>
     );
}
 
export default LoginBox;