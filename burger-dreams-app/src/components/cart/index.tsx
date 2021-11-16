import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import { Stack, Heading } from '@chakra-ui/react';
import CartCommment from "./cartComment";
import { useSelector } from "react-redux";


interface CartProps {
    
}
const CartComment: React.FC<CartProps> = () => {
    const { previewCart } = useSelector((state: any) => state.cartReducer);
    
    return ( 
        <React.Fragment>
            <Flex
                minH={'255vh'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'xl'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'3xl'} textAlign='center'> Antes de finalizar, registre un comentario sobre su compra</Heading>
                        {!previewCart &&
                        <Heading fontSize={'sm'} textAlign='center'> Recuerda realizar una compra!</Heading>
                        }
                    </Stack>
                    <CartCommment />
                    
                </Stack>
            </Flex>
        </React.Fragment>
     );
}
 
export default CartComment;