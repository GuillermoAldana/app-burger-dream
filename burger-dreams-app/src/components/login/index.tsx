import React, { useState } from 'react';
import { Flex, Stack, Heading, Text,Link, useColorModeValue } from '@chakra-ui/react';
import LoginBox from './loginBox';
import RegisterBox from './registerBox';
interface LoginProps {

}

const Login: React.FC<LoginProps> = () => {
    const [register, setRegister] = useState<boolean>(false);
    return (
        <React.Fragment>
            <Flex
                minH={'100vh'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}><Link onClick={()=>setRegister(false)}>Iniciar sesion</Link> | <Link onClick={()=>setRegister(true)}>Registrarse</Link></Heading>
                        <Text fontSize={'md'} color={'gray.600'}>
                            Para realizar su pedido es necesario que inicie sesion
                        </Text>
                        {!register && 
                        <Text fontSize={'sm'} color={'gray.400'}>
                            Si usted no tiene cuenta, puede utilizar la opcion 'registrarse'
                        </Text> }
                        
                    </Stack>
                    {register ? <RegisterBox /> : <LoginBox />}
                    
                </Stack>
            </Flex>
        </React.Fragment>
    );
}

export default Login;