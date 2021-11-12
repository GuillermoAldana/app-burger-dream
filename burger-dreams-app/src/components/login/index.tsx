import React from 'react';
import { Flex, Stack, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import LoginBox from './loginBox';
interface LoginProps {

}

const Login: React.FC<LoginProps> = () => {
    return (
        <React.Fragment>
            <Flex
                minH={'100vh'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Iniciar sesion | Registrarse</Heading>
                        <Text fontSize={'md'} color={'gray.600'}>
                            Para realizar su pedido es necesario que inicie sesion
                        </Text>
                    </Stack>
                    <LoginBox />
                </Stack>
            </Flex>
        </React.Fragment>
    );
}

export default Login;